import { hasMatch, getSuggestions } from '../helpers/data'

const defaultField = {
    text: '',
    isValid: false,
    suggestions: [],
    suggestionsActive: false
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
    let newState = {...state};

    switch (action.type) {
        case 'ROLL_LETTER':
            return {
                ...resetState(state),
                letter: getLetter(state.letter),
            }

        case 'WRITE':
            newState.fields[action.set].text = action.text;
            newState.fields[action.set].isValid = hasMatch(action.text, action.set, state.letter)
            return newState;

        case 'SUGGEST': {
            newState.fields[action.set].suggestions = getSuggestions(action.set, 3, state.letter);
            newState.fields[action.set].suggestionsActive = !newState.fields[action.set].suggestionsActive;
            
            return newState;
        }
        
        default:
            return state;
    }
}

export default reducers
