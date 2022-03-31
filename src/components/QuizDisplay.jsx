import React from 'react'
import { ListGroup } from 'react-bootstrap';

export default function Quiz (params) {
  const [isLoadingQuiz, setIsLoadingQuiz] = React.useState(true)
  const [quizData, setQuizData] = React.useState([])
  let quiz = params

  React.useEffect(() => {
    let quizQuery = quiz.params.replaceAll(' ', '_')
      fetch(`https://6judzwfwlf.execute-api.eu-west-2.amazonaws.com/test?query=${quizQuery}`,{
      })
      .then (response => response.json()) 
      .then(response => { 
          setQuizData(response) 
      })
      .catch(error => console.log(error)) 
  }, []) 

  React.useEffect(() => {
      if (quizData.length !== 0) {
          setIsLoadingQuiz(false)
      }
  }, [quizData])

  function QuizRender() {
    let questionTitle = []
    for (var questionCounter=0; questionCounter < (quizData.length); questionCounter++){
      questionTitle.push({'question' : quizData[questionCounter].question[0]})
      for (var answerCounter=0; answerCounter < (quizData[questionCounter].question[1].length); answerCounter++)
      questionTitle.push({'answer' : quizData[questionCounter].question[1][answerCounter]})
    }
    questionTitle.splice(0, `test ${questionCounter}`)


      return (

        <div>
          {questionTitle.map((outerData, i) => (
            <ListGroup.Item>
            <div className="fw-bold" variant="dark">{outerData.question}</div><div>{outerData.answer}</div>
            </ListGroup.Item>)
          )}
        </div>
      )
  }

  return (
      <div>
          {isLoadingQuiz ? (<h1>loading...</h1>) : <ListGroup>
                                                      <QuizRender /> 
                                                    </ListGroup>}
      </div>
  )
}