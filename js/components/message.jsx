import React from 'react';

export default class Message extends React.Component {
    render() {
        const className = this.props.message.length ? 'message' : 'message hidden';

        return <div className={className}>
            <span className={this.props.mood}>{this.props.message}</span>
        </div>
    }
}
