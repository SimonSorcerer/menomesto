import React from 'react';

export default class Message extends React.Component {
    render() {
        const className = this.props.isVisible ? 'message' : 'message hidden';

        return <div className={className}>
            {this.props.message}
        </div>
    }
}
