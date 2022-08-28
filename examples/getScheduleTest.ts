import {getSchedule} from "../dist/module/schedule";

const SCHOOL_ID = 8;
const GROUP_NAME = "JPTV22";

(async () => {
    const data = await getSchedule(SCHOOL_ID, GROUP_NAME, {
        year: 2022,
        month: 9,
        day: 7
    });
    console.log(data);
})()