import { connect } from 'react-redux'
import Component from '../components/message.jsx'
import { types } from '../helpers/data'

const hasWrongStartingLetterPerType = (state, type) => {
    return state[type].text.length && !state[type].text.startsWith(state.letter);
}

const hasWrongStartingLetter = (state) => {
    return types.some((type) => {
        return hasWrongStartingLetterPerType(state, type);
    });
}

const mapStateToProps = (state, ownProps) => {
    let message = 'Pozor: ';
    let isVisible = false;

    if (hasWrongStartingLetter(state)) {
        isVisible = true;
        message += 'Slová musia začínať na písmeno "' + state.letter + '"!';
    }
    
    return {
        isVisible,
        message
    }
}

const Letter = connect(
    mapStateToProps
)(Component)

export default Letter
