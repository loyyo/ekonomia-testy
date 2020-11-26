import React from 'react'
import testy from './testy.json'

const Question = () => {
  return (
    <div className="questionList">
      {testy.questions.map((e)=>{
      return (
        <>
          <div className="question">
            {e.question}
          </div>
          <div className="answers">
            {e.answers.map((answer)=>{
              return <div className="answer">{answer.a}</div>
            })}
          </div>
          <div className="correct">
            Poprawna odpowiedź to: <strong>{e.correct.toUpperCase()}</strong>
          </div>
        </>
      )
    })}
    </div>
  )
}

export default Question
