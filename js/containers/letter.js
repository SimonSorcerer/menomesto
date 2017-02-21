import { connect } from 'react-redux'
import Component from '../components/letter.jsx'
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
)(Component)

export default Letter
