import { connect } from 'react-redux'
import Component from '../components/field.jsx'
import { write } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.fields[ownProps.type].text,
        isValid: state.fields[ownProps.type].isValid,
        isFilled: state.fields[ownProps.type].text.length > 0
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
