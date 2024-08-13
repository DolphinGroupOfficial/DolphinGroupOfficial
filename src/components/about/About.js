import React from "react";
import logo from '../../assets/logo.png';
import './About.css';

export default class About extends React.Component {

    render() {

        return (
            <div className="container-about flex md:h-30rem">
                <div className="md:flex-1 h-25rem md:h-30rem pt-4 about-image-container">
                    <div className="container md:py-4" style={{borderRadius: "0rem 14rem 14rem 0rem"}}>
                        <div className="align-content-evenly border-round-2xl glass-card my-8 shadow-5">
                            <img
                                src={logo}
                                alt="logo"
                                loading="lazy"
                                className="h-11rem md:h-14rem zoomin animation-duration-1000 animation-ease-in"
                                style={{ opacity: '0.9' }}
                            />
                        </div>
                    </div>
                    <div className="circle1 zoomin animation-duration-500 animation-ease-in"></div>
                    <div className="circle2 zoomin animation-duration-500 animation-ease-in"></div>
                </div>
                <div className="align-items-center flex flex-1 flex-column justify-content-center md:pb-0 md:px-0 pb-4 px-4">
                    <div className="wave-text-gallery text-center md:text-4xl text-2xl font-bold" style={{ letterSpacing: "0.16rem" }}>
                        About us
                    </div>
                    <div className="fadeinright animation-duration-500 animation-ease-in">
                        <p className="text-700 text-justify md:text-xl line-height-3 about-me-content md:w-30rem">
                            Dive into a world of endless fun and adventure at Dolphin Waterpark, Experience the central India's  4 seater NAGA slide and variety of thrilling rides, exhilarating wave pools, and vibrant music in an atmosphere perfect for families and friends. Indulge in delicious food while making unforgettable memories. Our state-of-the-art facilities ensure a splash-tastic time for all ages. Join us today for an adventure you won't forget!
                        </p>
                    </div>
                </div>
            </div>


        );
    }
}