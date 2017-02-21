import { connect } from 'react-redux'
import Component from '../components/answers.jsx'
import { rollLetter } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const Answers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Answers
