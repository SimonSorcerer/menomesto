import React from 'react';

export default class Letter extends React.Component {
    render() {
        return <span className='answer'>
            <input type='text' id={ this.props.id } />
            <label className='label-red' htmlFor={ this.props.id }>
                <span className='label-content'>{ this.props.label }</span>
            </label>
        </span>
    }
}
