import {CapacityType, StudyPeriod} from "./types";

export interface ISchedule{
    studyPeriods: StudyPeriod;
    timetableEvents: ITimetableEvent[];
    school: ISchool;
    isHigher: boolean;
    personalParam: any;
    generalTimetableCurriculum: IGeneralTimetableCurriculum
}

export interface ITimetableEvent{
    id: number;
    journalId: number;
    subjectStudyPeriodId: any,
    nameEt: string;
    nameEn: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    hasStarted: false;
    teachers: ITeacher[];
    rooms: IRoom[];
    studentGroups: any[];
    subgroups: any[];
    students: any[];
    addInfo: any;
    singleEvent: boolean;
    publicEvent: boolean;
    timetableId: number;
    showStudyMaterials: boolean;
    capacityType: CapacityType;
    isPersonal: any;
    person: any;
    isJuhanEvent: boolean;
    isExam: boolean;
    isOngoing: any;
    includesEventStudents: boolean;
    changed: string;
    canEdit: any,
    canDelete: any;
    nameRu: string;
}

export interface ISchool{
    id: number;
    nameEt: string;
    nameEn: string;
    nameRu: string;
}

export interface IGeneralTimetableCurriculum{
    studentGroupCode: string;
    curriculumCode: string;
    nameEt: string;
    nameEn: string;
}

export interface ITeacher{
    id: number;
    name: string;
}

export interface IRoom{
    id: number;
    roomCode: string;
    buildingCode: string;
}