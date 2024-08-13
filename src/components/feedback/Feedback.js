import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default class Feedback extends React.Component {

    render() {

        return (
            <div className="md:px-8 md:py-5 px-2 py-3">
                <Card className="border-round-xl md:border-round-3xl md:mx-8 md:shadow-8 shadow-5">
                    <div className="align-items-center flex flex-wrap md:px-6">
                        <div className="flex flex-column gap-3 gap-2">
                            <div className="font-bold md:text-4xl pb-2 text-700 text-xl underline-highlight-green w-fit">We'd Love to Hear From You!</div>
                            <div className="font-medium md:text-2xl text-sm">Tell Us About Your Splash-tastic Day!</div>
                            <div className="line-height-4 md:w-30rem text-xs md:text-base">We're always looking to make your time with us even better. Let us know what you loved and what we can do to make your next visit even more fun.</div>
                        </div>
                        <div className="flex flex-1 md:justify-content-end md:pr-8 justify-content-center md:mt-0 mt-3">
                            <Button label="Give Feedback" severity="help" raised
                                iconPos="left"
                                icon="pi pi-pencil"
                                className="md:px-4 md:py-4 md:font-bold px-3 py-3 md:text-base text-sm" />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}