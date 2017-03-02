import { connect } from 'react-redux'
import Component from '../components/answers.jsx'
import { rollLetter } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const Answers = connect(
    mapStateToProps
)(Component)

export default Answers
