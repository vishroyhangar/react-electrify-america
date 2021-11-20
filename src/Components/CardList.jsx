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
                    image: 'https://www.electrifyamerica.com/img/member.3601bd05.png',
                    title: 'BECOME A MEMBER',
                    text: 'Need to fill up on the road? Enjoy discounted pricing with our Pass+ monthly subscription plan.'
                }
            ]
        }

        // card contents as an array
        this.content = [
            {
                id: '',
                link: 'https://www.google.com',
                variation: '',
                image: 'https://www.electrifyamerica.com/img/member.3601bd05.png',
                title: 'BECOME A MEMBER',
                text: 'Need to fill up on the road? Enjoy discounted pricing with our Pass+ monthly subscription plan.'
            },
            {
                id: '',
                link: 'https://www.google.com',
                variation: 'card--small',
                image: 'https://www.electrifyamerica.com/img/home_green_city.dc7925a8.png',
                title: 'OUR GREEN CITY',
                text: 'Learn how we’re accelerating freight and transit electrification in Southern California’s most bustling port locations.'
            },
            {
                id: '',
                link: 'https://www.google.com',
                variation: '',
                image: 'https://www.electrifyamerica.com/img/mobile_app_desktop.1821098b.png',
                title: 'MOBILE APP',
                text: 'Find stations, start charging, track and end your session from your smartphone with our app for iOS and Android.'
            },
            {
                id: '',
                link: 'https://www.google.com',
                variation: 'card--small',
                image: 'https://www.electrifyamerica.com/img/home_charger_HP.7e321604.png',
                title: 'HOME PRODUCTS',
                text: 'Simplify life with HomeStationTM. Our Level 2 EV home charger offers remote start, stop, and scheduling via the Electrify America app for a streamlined charging experience.'
            },
            {
                id: '',
                link: 'https://www.google.com',
                variation: '',
                image: 'https://www.electrifyamerica.com/img/support_desktop.26504b28.png',
                title: 'SUPPORT & TROUBLESHOOTING',
                text: 'Have a question or issue with a charging station? Our team is here to help.Call us at 1-833 - 632 - 2778 or use our contact form.'
            }
        ]
    }


    componentDidMount() {
        // fetch contents here
    }


    render() {
        return (
            <div className="card-list-container">
                <h2>
                    Learn about charging with
                    Electrify America
                </h2>
                <div className="card-list">
                    {/* {this.content.map(item => {
                    <Card id={item.id} link={item.link} variation={item.variation} />
                })} */}

                    <Card link={this.content[0].link} variation={''} image={this.content[0].image} title={this.content[0].title} text={this.content[0].text} />
                    <Card link={this.content[1].link} variation={'card--small'} image={this.content[1].image} title={this.content[1].title} text={this.content[1].text} />
                    <Card link={this.content[2].link} variation={''} image={this.content[2].image} title={this.content[2].title} text={this.content[2].text} />
                </div>
            </div>
        )
    }
}

export default CardList;