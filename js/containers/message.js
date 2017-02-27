import { connect } from 'react-redux'
import Component from '../components/message.jsx'
import { types } from '../helpers/data'

const hasWrongStartingLetter = (state, type) => {
    return state[type].text.length && !state[type].text.toLowerCase().startsWith(state.letter.toLowerCase());
}

const isValid = (state, type) => {
    return state[type].isValid;
}

const mapStateToProps = (state, ownProps) => {
    let message = '';
    let mood = 'sad';

    if (hasWrongStartingLetter(state, ownProps.type)) {
        message = 'Slovo musí začínať na písmeno "' + state.letter + '"!';
    }

    if (isValid(state, ownProps.type)) {
        mood = 'happy';
        message = 'Správne!';
    }
    
    return {
        message,
        mood
    }
}

const Letter = connect(
    mapStateToProps
)(Component)

export default Letter
