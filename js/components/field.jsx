import React from 'react'
import Message from '../containers/message'
import Suggestions from '../containers/suggestions'

export default class Field extends React.Component {
    render() {
        let labelClassName = this.props.isValid ? 'label-green': 'label-red';
        labelClassName += this.props.isFilled ? ' filled' : '';

        return <div>
            <span className='answer'>
                <input type='text' id={this.props.type} value={this.props.text} onChange={this.props.handleChange} />
                <label className={ labelClassName } htmlFor={this.props.type}>
                    <span className='label-content'>{this.props.label}</span>
                </label>
                <span className='hint no-select' onClick={this.props.handleSuggestClick} title='Pomoc! Daj mi pár príkladov...'>?</span>
            </span>
            <Message type={this.props.type} />            
            <Suggestions type={this.props.type} />
        </div>
    }
}
