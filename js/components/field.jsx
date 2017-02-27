import React from 'react';

export default class Letter extends React.Component {
    render() {
        const labelClassName = this.props.isValid ? 'label-green': 'label-red';

        return <span className='answer'>
            <input type='text' id={this.props.type} onChange={this.props.handleChange} />
            <label className={ labelClassName } htmlFor={this.props.type}>
                <span className='label-content'>{this.props.label}</span>
            </label>
        </span>
    }
}
