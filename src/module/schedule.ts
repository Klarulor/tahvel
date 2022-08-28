const fetch = require("node-fetch");
import {ISchedule} from "./features/interfaces";

const FETCH_URL: string = `https://tahvel.edu.ee/hois_back/timetableevents/timetableByGroup/%SCHOOL_ID%?from=%FROM%&studentGroups=%GROUP%&thru=%TO%`;
const FETCH_GROUP_ID_URL: string = `https://tahvel.edu.ee/hois_back/timetables/group/%SCHOOL_ID%?lang=ET&name=%GROUP%&studyYearId=592`;

const tryNormalizeDate = (num: string | number): string => `${num}`.length == 1? `0${num}` : `${num}`;
const getStringDay = (year: string | number, month: string | number , day: string | number): string => `${year}-${month}-${day}T00:00:00Z`
const getURL = (school: number, group: string | number, year: string | number, month: string | number, day: string | number): string =>
    FETCH_URL.replace("%GROUP%", `${group}`).replace("%FROM%", getStringDay(year, month, day))
        .replace("%TO%", getStringDay(year, month, day)).replace("%SCHOOL_ID%", `${school}`);


export function getSchedule(schoolId: number, group: string | number, opts: IGetScheduleOptions = {}): Promise<ISchedule>{
    let {year, month, day} = opts;
    if(!year || !month || !day){
        const now = new Date();
        year = year || now.getFullYear();
        month = month || now.getMonth() + 1;
        day = day || now.getDate();
    }

    month = tryNormalizeDate(month);
    day = tryNormalizeDate(day);

    return new Promise<ISchedule>(async res => {
        let id = parseInt(`${group}`);
        if(isNaN(id)){
            await fetch(FETCH_GROUP_ID_URL.replace("%GROUP%", `${group}`).replace("%SCHOOL_ID%", `${schoolId}`))
                .then(async (x: any) => id = ((await x.json()) as any).content[0].id);
        }
        const url = getURL(schoolId, id, year, month, day);
        fetch(url).then(async (z: any) => {
            const json = await z.json();
            if((json as any)._errors)
                throw json;
            res(json as ISchedule);
        });

    })
}


interface IGetScheduleOptions{
    year?: string | number;
    month?: string | number;
    day?: string | number;
}