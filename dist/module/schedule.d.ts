import { ISchedule } from "./features/interfaces";
export declare function getSchedule(schoolId: number, group: string | number, opts?: IGetScheduleOptions): Promise<ISchedule>;
interface IGetScheduleOptions {
    year?: string | number;
    month?: string | number;
    day?: string | number;
}
export {};
