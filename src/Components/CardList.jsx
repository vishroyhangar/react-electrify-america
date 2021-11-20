import React from "react";
import Card from './Card.jsx';
import '../sass/CardList.scss';
import CardDownload from "./CardDownload.jsx";


class CardList extends React.Component {
    constructor() {
        super()

        this.state = {
            content: [
                {
                    id: '01',
                    link: 'https://www.google.com',
                    variation: '',
                    image: 'https://www.electrifyamerica.com/img/member.3601bd05.png',
                    title: 'BECOME A MEMBER',
                    text: 'Need to fill up on the road? Enjoy discounted pricing with our Pass+ monthly subscription plan.'
                },
                {
                    id: '02',
                    link: 'https://www.google.com',
                    variation: 'card--small',
                    image: 'https://www.electrifyamerica.com/img/home_green_city.dc7925a8.png',
                    title: 'OUR GREEN CITY',
                    text: 'Learn how we’re accelerating freight and transit electrification in Southern California’s most bustling port locations.'
                },
                {
                    id: '03',
                    link: 'https://www.google.com',
                    variation: '',
                    image: 'https://www.electrifyamerica.com/img/mobile_app_desktop.1821098b.png',
                    title: 'MOBILE APP',
                    text: 'Find stations, start charging, track and end your session from your smartphone with our app for iOS and Android.'
                },
                {
                    id: '04',
                    link: 'https://www.google.com',
                    variation: 'card--small',
                    image: 'https://www.electrifyamerica.com/img/home_charger_HP.7e321604.png',
                    title: 'HOME PRODUCTS',
                    text: 'Simplify life with HomeStationTM. Our Level 2 EV home charger offers remote start, stop, and scheduling via the Electrify America app for a streamlined charging experience.'
                },
                {
                    id: '05',
                    link: 'https://www.google.com',
                    variation: '',
                    image: 'https://www.electrifyamerica.com/img/support_desktop.26504b28.png',
                    title: 'SUPPORT & TROUBLESHOOTING',
                    text: 'Have a question or issue with a charging station? Our team is here to help.Call us at 1-833 - 632 - 2778 or use our contact form.'
                },
                {
                    id: '06',
                    variation: '',
                    title: 'Contactless In- app Payment',
                    text: 'Download the Electrify America mobile app to pay for your charging session right from your phone.'
                }
            ]
        }
    }


    componentDidMount() {
        // fetch contents here
    }


    render() {
        return (
            <div className="card-list-container">
                <h2 className='card-list-container__title'>
                    Learn about charging with <br />
                    Electrify America
                </h2>

                <div className="card-list">
                    {
                        this.state.content.map(item => {
                            if (item.id === '06') {
                                return <CardDownload key={item.id} title={item.title} text={item.text} />
                            } else {
                                return <Card key={item.id} link={item.link} variation={item.variation} image={item.image} title={item.title} text={item.text} />
                            }
                        })
                    }

                    
                </div>
            </div>
        )
    }
}

export default CardList;