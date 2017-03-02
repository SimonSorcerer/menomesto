import { hasMatch } from '../helpers/data'

const defaultField = {
    text: '',
    isValid: false
}

const defaultState = {
    letter: 'A',
    fields: {
        meno: {...defaultField},
        mesto: {...defaultField},
        zviera: {...defaultField}
    }
}

const getLetter = (exclude = '') => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    exclude = exclude.split('');
    letters = letters.filter(x => exclude.indexOf(x) < 0);

    return letters[Math.floor(Math.random() * letters.length)]
}

const resetState = (state) => {
    return {
        ...state,
        fields: {
            meno: {...defaultField},
            mesto: {...defaultField},
            zviera: {...defaultField}
        }
    }
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'ROLL_LETTER':
            return {
                ...resetState(state),
                letter: getLetter(state.letter),
            }
        case 'WRITE':
            let newState = {...state};
            newState.fields[action.set].text = action.text;
            newState.fields[action.set].isValid = hasMatch(action.text, action.set, state.letter)

            return newState;
        default:
            return state;
    }
}

export default reducers
