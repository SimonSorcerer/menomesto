import React from 'react';
import Letter from '../containers/letter'
import Answers from '../components/answers.jsx'

export default class Game extends React.Component {
    render() {
        return <div className='game'>
            <Letter />
            <Answers />
        </div>;
    }
}
