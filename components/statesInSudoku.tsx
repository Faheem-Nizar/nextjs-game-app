import { atom } from "recoil";

export const Uactual = atom ({
    key: 'trying-act-to-test',
    default: []
})//filled which is checked with final result to see victory
export const Usquares = atom ({
    key: 'squares-in-final',
    default: []
})//final squares, solution for the selected difficulty
export const UfillPossibility = atom ({
    key: 'possibility-to-fill',
    default: []
})//mapping all spots where its filled default
export const Unumber = atom ({
    key: 'num-to-fill-board',
    default: (0)
})//to set number in sudoku from keypad
export const UnextStep = atom ({
    key: 'actual-filled',
    default: (0)
})//to allow clicks on the board after clicking key pad
export const Ustatus = atom ({
    key: 'status-of-victory',
    default: [0]
})//self explanatory
export const UcolChange = atom ({
    key: 'col-change',
    default: ('btnc')
})//color change, identify which button to do so on clicking keypad
export const Uallow = atom ({
    key: 'allowing-shift',
    default: (0)
})
export const UvalI = atom ({
    key: 'UvalI-for-ivalue',
    default: null
})
export const UtimeStart = atom ({
    key: 'start-time',
    default: null
})
export const Udescrip = atom ({
    key: 'description-in-results-page',
    default: null
})
export const isSudokuTrue = atom ({
    key: 'sudoku1',
    default: [false, false, false, 
              false, false, false,
              false, false, false]
})
//const [actual, setActual] = useState([]);//the user inputed + initially given values
//const [squares, setSquares] = useState([]);//the final board
//const [fillPossibility, setFillPossibility] = useState([]);// identifying all empty spots 
//const [number, setNumber] = useState(0);
//const [nextStep, setNextStep] = useState(0);
//const [status, setStatus] = useState();
//const [colChange, setColChange] = useState('btnc');