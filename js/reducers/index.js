const defaultState = {
    letter: 'A'
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
        default:
            return state;
    }
}

export default reducers
