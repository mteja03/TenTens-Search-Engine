import React from 'react';
import './Home.css';
import logo1 from "./logos/logo1.png";
import Search from "./Search";

function Home() {
    return (
        <div className='home'>
            <div className="home__body">
                <img src={logo1} alt="TenTens Logo" />
                <div className="home__inputContainer">
                    <Search />
                    <div className="typewriter">
                        <h1>Simplest Limited Search Engine.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
