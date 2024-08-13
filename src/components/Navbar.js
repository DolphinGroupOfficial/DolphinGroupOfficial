import React from "react";
import { Button } from 'primereact/button';

export default class Navbar extends React.Component {

    render() {

        return (
          <div className="absolute align-items-center flex justify-content-around left-0 md:justify-content-between md:px-8 pt-4 top-0 w-full z-5"
            style={{ background: 'linear-gradient(to bottom, rgba(0, 83, 106, 0.67s), rgba(0, 0, 0, 0))' }}>
            <div><img src={require('../assets/logo.png')} loading="lazy" alt="logo" className="h-5rem md:h-6rem"/></div>
            <div className="">
                <Button label="Book tickets" severity="secondary" outlined rounded text
                  className="button-87 md:text-base text-xs"
                   />
            </div>
          </div>
        );
    }
}