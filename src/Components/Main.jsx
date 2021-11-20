import React from 'react';
import CardList from './CardList';
import '../sass/Main.scss';
import About from './About';

export default function Main() {
    return (
        <main className="main-content">
            <div className="main-content__wrapper">
                <CardList />
            </div>

            <About />
        </main>
    )
}
