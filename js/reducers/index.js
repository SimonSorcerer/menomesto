import { hasMatch } from '../helpers/data'

const defaultState = {
    letter: 'A',
    meno: {
        text: '',
        isValid: false
    },
    mesto: {
        text: '',
        isValid: false
    },
    zviera: {
        text: '',
        isValid: false
    }
}

const getLetter = (exclude = '') => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    exclude = exclude.split('');
    letters = letters.filter(x => exclude.indexOf(x) < 0);

    return letters[Math.floor(Math.random() * letters.length)]
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'ROLL_LETTER':
            return {
                ...state,
                letter: getLetter(state.letter)
            }
        case 'WRITE':
            let newState = {...state};
            newState[action.set].text = action.text;
            newState[action.set].isValid = hasMatch(action.text, action.set, state.letter)

            return newState;
        default:
            return state;
    }
}

export default reducers
