import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class QuizSelector extends Component{

    callAPI = async (query) => {
        alert(`Clicked on ${query}`)
        try {
            const res = await fetch (`https://6judzwfwlf.execute-api.eu-west-2.amazonaws.com/test?query=${query}`)
            let resjson = await res.json()
            this.setState({
                list: resjson
            })
            console.log(this.state.list)
        }
        catch(err){
            console.log(err)
        }
    }

    render() {
        const listAll = this.props.list

        let mapList = !listAll.length ? <tr><td>Nothing to list</td></tr> : listAll.map(quizItem =>
                <div key={quizItem}>
                    <ListGroup.Item action onClick={this.callAPI.bind(this, quizItem)}>
                        {quizItem}
                    </ListGroup.Item>
                </div>
            )

    return (
        <div>
            <ListGroup>
                {mapList}
            </ListGroup>
        </div>
    )
    }
}