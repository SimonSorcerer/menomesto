import React from 'react';

export default class Letter extends React.Component {
    render() {
        return <div className='letter' onClick={this.props.handleClick}>
            {this.props.letter}
        </div>
    }
}
