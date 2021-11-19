import React from "react";
import Card from './Card.jsx';
import '../sass/CardList.scss';


class CardList extends React.Component {
    constructor() {
        super()

        this.state = {
            content: [
                {
                    id: '',
                    link: 'https://www.google.com',
                    image: '',
                    title: 'BECOME A MEMBER',
                    text: 'Need to fill up on the road? Enjoy discounted pricing with our Pass+ monthly subscription plan.'
                }
            ]
        }
    }


    componentDidMount() {
        // fetch contents here
    }


    render() {
        return (
            <div className="card-list">
                <Card link={this.state.content[0].link} variation={''} title={this.state.content[0].title} text={this.state.content[0].text} />
                <Card link={this.state.content[0].link} variation={'card--small'} title={this.state.content[0].title} text={this.state.content[0].text} />
                <Card link={this.state.content[0].link} variation={''} title={this.state.content[0].title} text={this.state.content[0].text} />
            </div>
        )
    }
}

export default CardList;