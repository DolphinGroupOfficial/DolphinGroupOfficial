import React, { Component } from "react";
import './GalleryModal.css';

export default class GalleryModal extends Component {
  render() {
    const { src, alt, caption, onClose } = this.props;
    return (
      <div className="modal w-screen h-screen">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content text-center">
          <img className="max-w-full max-h-full" src={src} alt={alt} title={caption}/>
        </div>
      </div>
    );
  }
}