"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchedule = void 0;
const fetch = require("node-fetch");
const FETCH_URL = `https://tahvel.edu.ee/hois_back/timetableevents/timetableByGroup/%SCHOOL_ID%?from=%FROM%&studentGroups=%GROUP%&thru=%TO%`;
const FETCH_GROUP_ID_URL = `https://tahvel.edu.ee/hois_back/timetables/group/%SCHOOL_ID%?lang=ET&name=%GROUP%&studyYearId=592`;
const tryNormalizeDate = (num) => `${num}`.length == 1 ? `0${num}` : `${num}`;
const getStringDay = (year, month, day) => `${year}-${month}-${day}T00:00:00Z`;
const getURL = (school, group, year, month, day) => FETCH_URL.replace("%GROUP%", `${group}`).replace("%FROM%", getStringDay(year, month, day))
    .replace("%TO%", getStringDay(year, month, day)).replace("%SCHOOL_ID%", `${school}`);
function getSchedule(schoolId, group, opts = {}) {
    let { year, month, day } = opts;
    if (!year || !month || !day) {
        const now = new Date();
        year = year || now.getFullYear();
        month = month || now.getMonth() + 1;
        day = day || now.getDate();
    }
    month = tryNormalizeDate(month);
    day = tryNormalizeDate(day);
    return new Promise((res) => __awaiter(this, void 0, void 0, function* () {
        let id = parseInt(`${group}`);
        if (isNaN(id)) {
            yield fetch(FETCH_GROUP_ID_URL.replace("%GROUP%", `${group}`).replace("%SCHOOL_ID%", `${schoolId}`))
                .then((x) => __awaiter(this, void 0, void 0, function* () { return id = (yield x.json()).content[0].id; }));
        }
        const url = getURL(schoolId, id, year, month, day);
        fetch(url).then((z) => __awaiter(this, void 0, void 0, function* () {
            const json = yield z.json();
            if (json._errors)
                throw json;
            res(json);
        }));
    }));
}
exports.getSchedule = getSchedule;
//# sourceMappingURL=schedule.js.map