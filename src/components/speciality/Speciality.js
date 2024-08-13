import React from "react";

export default class Speciality extends React.Component {
    render() {

        const specialityDetails = [
            {
                "image" : require('../../assets/images/snake.JPG'),
                "caption" : "Central India`s FIRST NAGA Slide"
            },
            {
                "image" : require('../../assets/speciality/slides.jpg'),
                "caption" : "20+ water slides"
            },
            {
                "image" : require('../../assets/speciality/slides-sunset.jpg'),
                "caption" : "Biggest Waterplay System"
            },
            {
                "image" : require('../../assets/images/c-1-r-3.jpg'),
                "caption" : "Wavepool with 4 different patterns"
            },
            {
                "image" : require('../../assets/speciality/raindance.jpg'),
                "caption" : "Raindance with DJ"
            },
            {
                "image" : require('../../assets/speciality/party.jpg'),
                "caption" : "Party island"
            },
            {
                "image" : require('../../assets/speciality/picnic.jpg'),
                "caption" : "Serene picnic point"
            },
            {
                "image" : require('../../assets/speciality/food.jpg'),
                "caption" : "Restaurant"
            },
            {
                "image" : require('../../assets/speciality/water.jpg'),
                "caption" : "RO drining water"
            },
            {
                "image" : require('../../assets/speciality/random.jpg'),
                "caption" : "Free costumes"
            }
        ];

        const imageStyle = {
            borderRadius: "50%", // Makes the image fully rounded
            border: "2px solid white", // Inner border
            boxShadow: "0 0 0 4px #00800094" // Outer border (using box-shadow for double border effect)
        };

        return (
            <div className="md:py-8 py-5">
                <div className="wave-text-gallery text-center md:text-5xl text-3xl font-bold mb-4" style={{ letterSpacing: "0.16rem" }}>
                    Specialities
                </div>

                <div className="flex flex-wrap justify-content-evenly">
                    {
                        specialityDetails.map((item, index) => {
                            return (
                                <div key={index} className="align-items-center flex flex-column text-center" style={{flex : "1 1 33.33%"}}>
                                    <div style={imageStyle} className="md:w-12rem md:h-12rem h-8rem w-8rem overflow-hidden">
                                        <img src={item.image} alt="speciality" className="w-full h-full" style={{objectFit: "cover" }} />
                                    </div>
                                    <p className="font-semibold line-height-3 md:line-height-4 md:text-base md:w-10rem mt-3 text-800 text-sm w-9rem">
                                        {item.caption}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
