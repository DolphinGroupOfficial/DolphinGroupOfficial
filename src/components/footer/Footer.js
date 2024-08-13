import React from "react";
import { Button } from 'primereact/button';
/* import FooterGoogleMap from "./FooterGoogleMap"; */
import './Footer.css'

/* const center = {
    lat: 22.0329891,
    lng: 74.8878088
}; */

export default class Footer extends React.Component {

    openLink = (url) => {
        window.open(url, "_blank");
    }

    render() {

        return (
            <div className="flex h-fit md:h-screen surface-900 footer-container">
                <div className="flex flex-1 flex-column justify-content-center md:pt-0 md:px-8 pt-5 px-4">
                    <div className="mb-6 pb-3 pr-3 text-200 md:text-6xl text-2xl underline-highlight-green w-fit" style={{ borderBottom: "5px solid #3cc23c" }}>
                        GET IN TOUCH
                    </div>
                    <div className="font-medium line-height-4 md:mb-6 mb-4 text-200 md:w-30rem text-sm md:text-base">
                        Ready to Dive into Fun? Get in Touch with Us Today to Plan Your Perfect Day at Dolphin Waterpark – Where Adventure Awaits!
                    </div>
                    <div className="align-items-center flex font-medium gap-4 md:mb-6 mb-4 text-200 text-sm md:text-base">
                        <div className=""><i className="pi pi-map-marker" style={{ color: 'rgb(60, 194, 60)', fontSize: 'x-large' }}></i></div>
                        <div className="line-height-4">Behind Shri Ramkulleshwar Mandir, Pati Naka to Bomya Road, Barwarni, Madhya Pradesh, India</div>
                    </div>
                    <div className="align-items-center flex font-medium gap-4 md:mb-6 mb-4 text-200 text-sm md:text-base">
                        <div className=""><i className="pi pi-phone" style={{ color: 'rgb(60, 194, 60)', fontSize: 'x-large' }}></i></div>
                        <div className="">8962677123</div>
                    </div>
                    <div className="flex gap-4">
                        <Button icon="pi pi-instagram" rounded text raised
                            className="text-white md:px-4 md:py-4 px-1 py-1"
                            size="large"
                            style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" }}
                            onClick={() => this.openLink("https://www.instagram.com/dolphinwaterparkbarwani?igsh=MWdzbWJ4ZGRhdTg1MQ%3D%3D&utm_source=qr")} />
                        <Button icon="pi pi-google" rounded text raised
                            className="text-white md:px-4 md:py-4 px-1 py-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            size="large"
                            onClick={() => window.location.href = 'mailto:dolphingroupofficial15@gmail.com'} />
                        <Button icon="pi pi-youtube" rounded text raised
                            className="text-white md:px-4 md:py-4 px-1 py-1"
                            style={{ backgroundColor: "#ce0000" }}
                            size="large"
                            onClick={() => this.openLink("https://youtube.com/@dolphinwaterparkofficial?si=mr34ZVfD0i2r0loH")} />
                    </div>

                </div>
                <div className="md:h-full h-27rem pl-5 py-6 w-full">
                    <div className="bg-black-alpha-20 border-round-left-3xl h-full w-full overflow-hidden">
                        {/* <FooterGoogleMap center={center}/> */}
                        <img src={require('../../assets/map.png')} alt='Map' className="h-full w-full" />
                    </div>
                </div>
            </div>
        );
    }
}
