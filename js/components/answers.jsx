import React from 'react';

export default class Letter extends React.Component {
    render() {
        return <div className='answers'>
            <span className='answer'>
                <input type='text' id='meno' />
                <label className='label-red' for='meno'>
                    <span className='label-content'>Meno</span>
                </label>
            </span>

            <span className='answer'>
                <input type='text' id='mesto' />
                <label className='label-blue' for='mesto'>
                    <span className='label-content'>Mesto</span>
                </label>
            </span>

            <span className='answer'>
                <input type='text' id='zviera' />
                <label className='label-green' for='zviera'>
                    <span className='label-content'>Zviera</span>
                </label>
            </span>
        </div>
    }
}
