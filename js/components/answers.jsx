import React from 'react';
import Field from '../containers/field'

export default class Letter extends React.Component {
    render() {
        return <div className='answers'>
            <Field type='meno' label='Meno' />
            <Field type='mesto' label='Mesto' />
            <Field type='zviera' label='Zviera' />

            Debug: { this.props.sug }
        </div>
    }
}
