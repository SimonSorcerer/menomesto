import React from 'react';

export default class Letter extends React.Component {
    render() {
        return <div className='letter no-select' onClick={this.props.handleClick}>
            {this.props.letter}
        </div>
    }
}
