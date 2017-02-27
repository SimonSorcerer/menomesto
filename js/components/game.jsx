import React from 'react'
import Letter from '../containers/letter'
import Answers from '../containers/answers'

export default class Game extends React.Component {
    render() {
        return <div className='game'>
            <Letter />
            <Answers />
        </div>
    }
}
