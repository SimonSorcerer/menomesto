import { connect } from 'react-redux'
import Component from '../components/field.jsx'
import { write, suggest } from '../actions'

const mapStateToProps = (state, ownProps) => {
    const fieldState = state.fields[ownProps.type];

    return {
        text: fieldState.text,
        isValid: fieldState.isValid,
        isFilled: fieldState.text.length > 0,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: (e) => {
            const text = e.target.value;
            dispatch(write(text, ownProps.type));
        },
        handleSuggestClick: () => {
            dispatch(suggest(ownProps.type));
        }
    }
}

const Answers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Answers
