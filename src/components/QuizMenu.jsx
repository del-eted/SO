import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Quiz from './QuizDisplay'



export default function QuizLister(){
    const [displayToggle, setDisplayToggle] = React.useState([true])
    const [quiz, setQuiz] = React.useState([])
    const [isLoadingList, setIsLoadingList] = React.useState(true)
    const [list, setList] = React.useState([])

    const selectionHandler = (paramater) => {
        setDisplayToggle(false)
        setQuiz(paramater)
    }

    React.useEffect(() => {
        fetch(`https://6judzwfwlf.execute-api.eu-west-2.amazonaws.com/test?query=list`,{
        })
        .then (response => response.json())
        .then(response => {
            setList(response)
            setIsLoadingList(false)
        })
        .catch(error => console.log(error))
    }, [])

    React.useEffect(() => {
        if (list.length !== 0) {
            setIsLoadingList(false)
        }
    }, [list])

    return(
    <div>
        <div>
            <>{displayToggle && <div>
                {isLoadingList ? (<h1>loading...</h1>) : list[0].allQuizzes.map(quizItem => 
                                                                <div key={quizItem}>
                                                                    <ListGroup.Item action onClick={ () => selectionHandler(quizItem)}>{quizItem}</ListGroup.Item>
                                                                </div>
                                                                )}
            </div>}</>
            <>{!displayToggle && <Quiz params={quiz}/>}</>
        </div>
    </div>
    )
}