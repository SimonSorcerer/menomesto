import React from 'react';
import Letter from '../containers/letter'

export default class Game extends React.Component {
    render() {
        return <div className='game'>
            <Letter />
        </div>;
    }
}
