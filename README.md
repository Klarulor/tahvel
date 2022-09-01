# Tahvel api gateway
`Tahvli kasutamiseks on vajalik sisse logida kas ID-kaardi, mobiil-ID, pangalingi kaudu (valik "TARA"), mis võimaldab ka SmartID kasutamist või HarID kasutajanime ja parooliga.
`

## Installation
`npm i tahvel -g`

## Examples
```ts
import {getSchedule} from "tahvel";

const SCHOOL_ID = 8; // ID you can take in down of the readme
const GROUP_NAME = "JPTV22"; // You basically school group id

(async () => {
    const data = await getSchedule(SCHOOL_ID, GROUP_NAME, {
        year: 2022,
        month: 9,
        day: 7
    });
    console.log(data);
})()
```

### Estonian school list

| ID | School code  | School name                                |
| -- | ------------ | ------------------------------------------ |
| 1  | TKAK         | Tallinna Kopli Ametikool                   |
| 2  | HAK          | Hiiumaa Ametikool                          |
| 3  | EBS          | Estonian Business School                   |
| 4  | RAK          | Räpina Aianduskool                         |
| 5  | Olustvere    | Olustvere Teenindus- ja Maamajanduskool    |
| 6  | Nooruse      | Tartu Tervishoiu Kõrgkool                  |
| 7  | JKHK         | Järvamaa Kutsehariduskeskus                |
| 8  | IVKHK        | Ida-Virumaa Kutsehariduskeskus             |
| 9  | VIKK         | Viljandi Kutseõppekeskus                   |
| 11 | TTHK         | Tallinna Tööstushariduskeskus              |
| 12 | SAKSATK      | Pärnu Saksa Tehnoloogiakool                |
| 13 | TK           | Tartu Kunstikool                           |
| 14 | TPT          | Tallinna Polütehnikum                      |
| 15 | VKOK         | Valgamaa Kutseõppekeskus                   |
| 16 | KUS          | Eesti EKB Liit Kõrgem Usuteaduslik Seminar |
| 17 | TKTK         | Tallinna Tehnikakõrgkool                   |
| 18 | MereK        | Eesti Merekool                             |
| 19 | VKHK         | Võrumaa Kutsehariduskeskus                 |
| 20 | EELK         | EELK Usuteaduse Instituut                  |
| 21 | Pallas       | Kõrgem Kunstikool Pallas                   |
| 22 | EMKTS        | Eesti Metodisti Kiriku Teoloogiline Seminar|
| 23 | EAVA         | Eesti Lennuakadeemia                       |
| 24 | TLMK         | Tallinna Lasnamäe Mehaanikakool            |
| 25 | MUBA         | Tallinna Muusika- ja Balletikool           |
| 26 | SKA          | Sisekaitseakadeemia                        |
| 27 | VVTTK        | Vana-Vigala Tehnika- ja Teeninduskool      |
| 28 | LUUA         | Luua Metsanduskool                         |
| 31 | EKA          | Eesti Kunstiakadeemia                      |
| 32 | TMK          | Tallinna Majanduskool                      |
| 33 | KehtnaKHK    | Kehtna Kutsehariduskeskus                  |
| 35 | TTK          | Tallinna Tervishoiu Kõrgkool               |
| 36 | HKHK         | Haapsalu Kutsehariduskeskus                |
| 37 | PKHK         | Pärnumaa Kutsehariduskeskus                |
| 38 | Ametikool    | Kuressaare Ametikool                       |
| 39 | TEK          | Tallinna Ehituskool                        |
| 40 | TEKO         | Tallinna Teeninduskool                     |
| 41 | RAM          | Rakvere Ametikool                          |
| 42 | AKRK         | Astangu Kutserehabilitatsiooni Keskus      |
| 43 | HEMK         | Heino Elleri Muusikakool                   |
| 44 | KVA          | Kaitseväe Akadeemia                        |
| 45 | MIL          | Eesti Kaitsevägi                           |
| 46 | EMTK         | Eesti Massaaži- ja Teraapiakool            |
