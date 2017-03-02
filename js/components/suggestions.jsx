import React from 'react';

export default class Suggestions extends React.Component {
    render() {
        let className = 'suggestions';
        let suggestDom = this.props.suggestions.map((suggestion, index) => {
            return <li key={index}>{suggestion}</li>
        })

        if (!suggestDom.length) {
            suggestDom.push(<li>Žiadne príklady :(</li>)
        }

        if (!this.props.isOn) {
            className += ' off'
        }

        return <div className={className}>
            <div class='head'>Príklady:</div>
            <ul>{suggestDom}</ul>
        </div>
    }
}
