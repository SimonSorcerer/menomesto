import React from 'react';
import Field from './field.jsx'

export default class Letter extends React.Component {
    render() {
        return <div className='answers'>
            <Field id='meno' label='Meno' />
            <Field id='mesto' label='Mesto' />
            <Field id='zviera' label='Zviera' />

            Debug: { this.props.sug }
        </div>
    }
}
