import { connect } from 'react-redux'
import Component from '../components/field.jsx'
import { write } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        isValid: state[ownProps.type].isValid,
        isFilled: state[ownProps.type].text.length > 0
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: (e) => {
            const text = e.target.value;
            dispatch(write(text, ownProps.type));
        }
    }
}

const Answers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Answers
