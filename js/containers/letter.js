import { connect } from 'react-redux'
import Component from '../components/letter.jsx'
import { rollLetter } from '../actions'

const gameFinished = (state) => {
    return Object.keys(state.fields).every((key) => {
        return state.fields[key].isValid;
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        letter: state.letter,
        gameFinished: gameFinished(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(rollLetter())
        }
    }
}

const Letter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Letter
