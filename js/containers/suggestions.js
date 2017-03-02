import { connect } from 'react-redux'
import Component from '../components/suggestions.jsx'

const mapStateToProps = (state, ownProps) => {
    const fieldState = state.fields[ownProps.type];

    return {
        suggestions: fieldState.suggestions,
        isOn: fieldState.suggestionsActive
    }
}

const Suggestions = connect(
    mapStateToProps
)(Component)

export default Suggestions
