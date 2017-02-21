import { connect } from 'react-redux'
import LetterComponent from '../components/letter.jsx'
import { rollLetter } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        letter: state.letter
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
)(LetterComponent)

export default Letter
