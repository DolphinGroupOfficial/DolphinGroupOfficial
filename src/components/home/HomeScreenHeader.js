import React from "react";
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './HomeScreenHeader.css';

export default class HomeScreenHeader extends React.Component {


  render() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    /* eslint-disable no-dupe-keys */
    return (
      <>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
          className="h-screen"
          bullets={false}>

          <div className="h-full w-full">
            <img
              src={require('../../assets/banner-images/background.jpg')}
              alt="Background"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute pt-8 flex h-full justify-content-center left-0 top-0 w-full pb-8"
              style={{ background: 'rgba(0, 83, 106, 0.67)', letterSpacing: "0.16rem" }}>

              <div className="align-items-center flex flex-column justify-content-center text-white">
                <h3 className="animation-duration-300 fadeinup font-normal md:m-0 md:text-4xl text-base">
                  Welcome to
                </h3>
                <h3 className="md:m-0 wave-text zoomin animation-duration-500 animation-ease-in home-header-text-slide-1">
                  Dolphin Waterpark
                </h3>
                <h4 className="font-normal font-semibold md:text-2xl fadeindown animation-duration-500">
                  The place where you always be <span className="text-orange-400">young</span>!
                </h4>

              </div>
            </div>
          </div>

          <div className="h-full">
            <img
              src={require('../../assets/banner-images/background-2.jpg')}
              alt="Background"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute align-items-center flex h-full md:justify-content-end left-0 md:pr-8 md:px-0 px-4 top-0 w-full"
              style={{ background: 'linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))' }}>
              <div className="md:mr-4">
                <h1 className="animation-duration-500 animation-ease-in fadeinright md:text-6xl text-3xl">
                  <span style={{
                    background: '#11998e',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to right, #38ef7d, #11998e)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Splash into Fun!</span></h1>
                <p className="animation-duration-500 animation-ease-in fadeinright font-semibold line-height-4 text-100 md:text-3xl md:w-29rem ">
                  Watch Your Kids Laugh and Play, Beating the Heat in Every Way!
                </p>
              </div>
              <div className="absolute align-items-center bottom-0 flex gap-2 mb-6 text-400 text-xs home-header-caption-2">
                <i className="pi pi-info-circle text-xs"></i> Image from<a href="https://www.vecteezy.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>vecteezy.com</a>
              </div>
            </div>
          </div>

          <div className="h-full">
            <img
              src={require('../../assets/banner-images/background-3.jpg')}
              alt="Background"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute align-items-center flex h-full md:justify-content-start left-0 md:pl-8 top-0 w-full"
              style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))' }}>
              <div className="ml-4">
                <h1 className="animation-duration-500 animation-ease-in fadeinright md:text-6xl text-3xl">
                  <span style={{
                    background: '#11998e',  /* fallback for old browsers */
                    background: '-webkit-linear-gradient(to right, #38ef7d, #11998e)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Family Fun Awaits!</span></h1>
                <p className="animation-duration-500 animation-ease-in fadeinright font-semibold line-height-4 text-100 md:text-3xl md:w-29rem ">
                  Dive into Joy Together on Our Thrilling Water Slides!
                </p>
              </div>
            </div>
          </div>
        </AutoplaySlider>
      </>
    );
  }
}