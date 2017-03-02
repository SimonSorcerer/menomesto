import React from 'react';

export default class Letter extends React.Component {
    render() {
        let className = 'letter no-select';

        if (this.props.gameFinished) {
            className += ' happy';
        }
        return <div className={className} onClick={this.props.handleClick}>
            {this.props.letter}
        </div>
    }
}
