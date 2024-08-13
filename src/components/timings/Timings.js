import React from "react";
import './Timings.css';
import { Card } from 'primereact/card';

export default class Timings extends React.Component {
    render() {
        const header = (
            <img alt="Card" src={require('../../assets/timing-header.jpg')} />
        );

        return (
            <div className="parallax">
                <div className="timing-overlay">
                    <div className="align-items-center flex flex-1 flex-wrap justify-content-around md:px-8 px-4 timing-content">
                        <div className="font-bold md:text-5xl text-3xl text-center text-white wave-text-gallery" style={{ letterSpacing: "0.16rem" }}>
                           Our Timings
                        </div>
                        <Card title="Splash into Fun!"
                            header={header}
                            subTitle="Know When to Dive In!"
                            className="md:w-30rem border-round-bottom-3xl md:mt-0 mt-3">
                            <div className="flex">
                                <div className="flex flex-1 flex-column gap-3 text-center">
                                    <div className="font-medium mb:pb-3 pb-1 md:font-bold md:text-xl underline-highlight-green">Weekdays</div>
                                    <div className="md:font-semibold">10:00 AM - 06:00 PM</div>
                                </div>
                                <div className="flex mx-4 py-2" style={{ width: "0.1rem" }}>
                                    <div className="opacity-10 surface-600 w-full"></div>
                                </div>
                                <div className="flex flex-1 flex-column gap-3 text-center">
                                    <div className="font-medium mb:pb-3 pb-1 md:font-bold md:text-xl underline-highlight-green">Weekend</div>
                                    <div className="md:font-semibold">10:00 AM - 06:00 PM</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
