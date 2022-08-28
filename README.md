# Tahvel api gateway
`
Tahvli kasutamiseks on vajalik sisse logida kas ID-kaardi, mobiil-ID, pangalingi kaudu (valik "TARA"), mis võimaldab ka SmartID kasutamist või HarID kasutajanime ja parooliga.
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

| ID | School name                                |
| -- | ------------------------------------------ |
| 1  | Tallinna Kopli Ametikool                   |
| 2  | Hiiumaa Ametikool                          |
| 3  | Estonian Business School                   |
| 4  | Räpina Aianduskool                         |
| 5  | Olustvere Teenindus- ja Maamajanduskool    |
| 6  | Tartu Tervishoiu Kõrgkool                  |
| 7  | Järvamaa Kutsehariduskeskus                |
| 8  | Ida-Virumaa Kutsehariduskeskus             |
| 9  | Viljandi Kutseõppekeskus                   |
| 11 | Tallinna Tööstushariduskeskus              |
| 12 | Pärnu Saksa Tehnoloogiakool                |
| 13 | Tartu Kunstikool                           |
| 14 | Tallinna Polütehnikum                      |
| 15 | Valgamaa Kutseõppekeskus                   |
| 16 | Eesti EKB Liit Kõrgem Usuteaduslik Seminar |
| 17 | Tallinna Tehnikakõrgkool                   |
| 18 | Eesti Merekool                             |
| 19 | Võrumaa Kutsehariduskeskus                 |
| 20 | EELK Usuteaduse Instituut                  |
| 21 | Kõrgem Kunstikool Pallas                   |
| 22 | Eesti Metodisti Kiriku Teoloogiline Seminar|
| 23 | Eesti Lennuakadeemia                       |
| 24 | Tallinna Lasnamäe Mehaanikakool            |
| 25 | Tallinna Muusika- ja Balletikool           |
| 26 | Sisekaitseakadeemia                        |
| 27 | Vana-Vigala Tehnika- ja Teeninduskool      |
| 28 | Luua Metsanduskool                         |
| 31 | Eesti Kunstiakadeemia                      |
| 32 | Tallinna Majanduskool                      |
| 33 | Kehtna Kutsehariduskeskus                  |
| 35 | Tallinna Tervishoiu Kõrgkool               |
| 36 | Haapsalu Kutsehariduskeskus                |
| 37 | Pärnumaa Kutsehariduskeskus                |
| 38 | Kuressaare Ametikool                       |
| 39 | Tallinna Ehituskool                        |
| 40 | Tallinna Teeninduskool                     |
| 41 | Rakvere Ametikool                          |
| 42 | Astangu Kutserehabilitatsiooni Keskus      |
| 43 | Heino Elleri Muusikakool                   |
| 44 | Kaitseväe Akadeemia                        |
| 45 | Eesti Kaitsevägi                           |
| 46 | Eesti Massaaži- ja Teraapiakool            |