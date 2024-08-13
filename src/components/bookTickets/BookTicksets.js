import React from "react";
import './BookTickets.css';

/* eslint-disable no-dupe-keys */
export default class BookTickets extends React.Component {

    render() {

        return (
            <div className="align-items-center book-tickets-container flex flex-column gap-3 gap-5 md:px-8 pb-5 px-4">
                <div className="pb-3 text-2xl md:text-5xl underline-highlight-light-green">
                    Explore <span style={{
                        background: '#11998e',  /* fallback for old browsers */
                        background: '-webkit-linear-gradient(to right, #38ef7d, #11998e)',  /* Chrome 10-25, Safari 5.1-6 */
                        background: 'linear-gradient(to right, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Dolphin Waterpark</span>
                </div>
                <div className="flex">
                    <div className="md:flex flex-column gap-4 px-8 hidden md:block">
                        <div className="font-medium md:text-2xl text-blue-500">Your Ultimate Destination for Fun</div>
                        <div className="line-height-4 text-justify">Discover a world of thrilling rides, relaxing pools, and family-friendly attractions at Dolphin Waterpark. Whether you’re seeking excitement or relaxation, we have something for everyone.</div>
                    </div>
                    <div className="flex flex-column gap-4 md:px-8 px-4">
                        <div className="font-medium md:text-2xl text-blue-500">Ready to Dive In?</div>
                        <div className="line-height-4 text-justify text-xs md:text-base">Secure your spot today and embark on an unforgettable adventure. Click below to book your tickets and make the most of your visit!</div>
                    </div>
                </div>
                <div className="">
                    <button className="button-85 px-8 md:py-5 md:text-3xl py-3 text-lg">Book Tickets</button>
                </div>
            </div>
        );
    }
}