import { connect } from 'react-redux'
import Component from '../components/message.jsx'

const hasWrongStartingLetter = (state, type) => {
    return state.fields[type].text.length && !state.fields[type].text.toLowerCase().startsWith(state.letter.toLowerCase());
}

const notFound = (state, type) => {
    return state.fields[type].text.length && !hasWrongStartingLetter(state, type) && !state.fields[type].isValid;
}

const isValid = (state, type) => {
    return state.fields[type].isValid;
}

const mapStateToProps = (state, ownProps) => {
    let message = '';
    let mood = 'sad';

    if (hasWrongStartingLetter(state, ownProps.type)) {
        message = 'Slovo musí začínať na písmeno "' + state.letter + '"!';
    }

    if (notFound(state, ownProps.type)) {
        message = 'Hmm, nie úplne správne ...';
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

const Message = connect(
    mapStateToProps
)(Component)

export default Message
