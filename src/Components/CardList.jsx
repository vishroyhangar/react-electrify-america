import React from "react";
import Card from './Card.jsx';


class CardList extends React.Component {
    constructor() {
        super()

        this.state = {
            content: [
                {
                    id: '',
                    image: '',
                    title: '',
                    text: ''
                }
            ]
        }
    }


    componentDidMount() {
        // fetch contents here
    }


    render() {
        return (
            <Card title={"Vishroy"}/>
        )
    }
}

export default CardList;