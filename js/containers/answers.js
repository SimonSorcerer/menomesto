import { connect } from 'react-redux'
import Component from '../components/answers.jsx'
import { rollLetter } from '../actions'
import { getSuggestions } from '../helpers/data'

const mapStateToProps = (state, ownProps) => {
    return {
        sug: getSuggestions('zviera', 10).join(' - ')
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
