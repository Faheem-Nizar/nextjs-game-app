import { atom } from "recoil";
import React from "react";

export const easy = atom ({
    key: "arrEasy",
    default: [3, 1, 6, 5, 7, 8, 4, 9, 2,
        5, 2, 9, 1, 3, 4, 7, 6, 8,
        4, 8, 7, 6, 2, 9, 5, 3, 1,
        2, 6, 3, 4, 1, 5, 9, 8, 7,
        9, 7, 4, 8, 6, 3, 1, 2, 5,
        8, 5, 1, 7, 9, 2, 6, 4, 3,
        1, 3, 8, 9, 4, 7, 2, 5, 6,
        6, 9, 2, 3, 5, 1, 8, 7, 4,
        7, 4, 5, 2, 8, 6, 3, 1, 9] 
})
export const easyFill = atom ({
    key: "arrFillEasy",
    default:  [3, 0, 6, 5, 0, 8, 4, 0, 0, 
        5, 2, 0, 0, 0, 0, 0, 0, 0, 
        0, 8, 7, 0, 0, 0, 0, 3, 1, 
        0, 0, 3, 0, 1, 0, 0, 8, 0, 
        9, 0, 0, 8, 6, 3, 0, 0, 5, 
        0, 5, 0, 0, 9, 0, 6, 0, 0, 
        1, 3, 0, 0, 0, 0, 2, 5, 0, 
        0, 0, 0, 0, 0, 0, 0, 7, 4, 
        0, 0, 5, 2, 0, 6, 3, 0, 0]
})
export const med = atom ({
    key: "arrMed",
    default: [3, 5, 1, 4, 9, 8, 7, 2, 6,
        2, 4, 9, 7, 6, 5, 1, 3, 8,
        6, 7, 8, 1, 3, 2, 9, 5, 4,
        8, 9, 4, 5, 2, 3, 6, 1, 7,
        1, 3, 2, 6, 8, 7, 5, 4, 9,
        5, 6, 7, 9, 1, 4, 2, 8, 3,
        7, 1, 3, 2, 4, 6, 8, 9, 5,
        4, 2, 6, 8, 5, 9, 3, 7, 1,
        9, 8, 5, 3, 7, 1, 4, 6, 2]
})
export const medFill = atom ({
    key: "arrFillMed",
    default: [3, 5, 1, 0, 0, 8, 7, 0, 6,
        0, 4, 0, 7, 0, 0, 1, 0, 0,
        0, 7, 0, 0, 0, 0, 9, 5, 4,
        8, 0, 4, 0, 2, 0, 6, 0, 0,
        0, 3, 2, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 0, 0, 0, 3,
        7, 1, 0, 0, 4, 6, 0, 0, 5,
        0, 0, 6, 0, 5, 9, 0, 7, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0]
})
export const hard = atom ({
    key: "arrHard",
    default: [1, 7, 2, 5, 4, 9, 6, 8, 3,
        6, 4, 5, 8,	7, 3, 2, 1,	9,
        3, 8, 9, 2,	6, 1, 7, 4,	5,
        4, 9, 6, 3,	2, 7, 8, 5,	1,
        8, 1, 3, 4,	5, 6, 9, 7,	2,
        2, 5, 7, 1,	9, 8, 4, 3,	6,
        9, 6, 4, 7,	1, 5, 3, 2,	8,
        7, 3, 1, 6,	8, 2, 5, 9,	4,
        5, 2, 8, 9,	3, 4, 1, 6,	7]
})
export const hardFill = atom ({
    key: "arrFillHard",
    default: [0, 0, 0, 0, 0, 0, 6, 8, 0,	 
        0, 0, 0, 0, 7, 3, 0, 0, 9,
        3, 0, 9, 0, 0, 0, 0, 4,	5,
        4, 9, 0, 0, 0, 0, 0, 0, 0,
        8, 0, 3, 0, 5, 0, 9, 0, 2,
        0, 0, 0, 0, 0, 0, 0, 3,	6,
        9, 6, 0, 0, 0, 0, 3, 0, 8,
        7, 0, 0, 6,	8, 0, 0, 0, 0,
        0, 2, 8, 0, 0, 0, 0, 0, 0]
})
export const Udifficulty = atom ({
    key: "chooseDifficulty",
    default: 1,
})