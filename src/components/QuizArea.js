import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import Pass from './Pass';
import Fail from './Fail';


function QuizArea(props) {
    if(props.isFinished){
        if(props.correct >= 2){
            return <Pass />
        } else {
            return <Fail />
        }
    }

    return (
        <div>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea;