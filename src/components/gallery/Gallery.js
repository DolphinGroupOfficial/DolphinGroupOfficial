import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Gallery.css';
import GalleryModal from "./GalleryModal";

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modalImage: "",
            modalAlt: "",
        };
    }

    srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    showModal = (src, alt) => {
        this.setState({
            isOpen: true,
            modalImage: src,
            modalAlt: alt,
        });
    };

    closeModal = () => {
        this.setState({
            isOpen: false,
            modalImage: "",
            modalAlt: "",
        });
    };

    render() {

        const { isOpen, modalImage, modalAlt } = this.state;

        const itemData = [
            {
                img: require('../../assets/images/aerial-view.jpg'),
                rows: 2,
                cols: 2,
            },
            {
                img: require('../../assets/images/s-1.jpg'),
            },
            {
                img: require('../../assets/images/snake.JPG'),
            },
            {
                img: require('../../assets/images/m-1.jpg'),
                cols: 2,
                rows: 2,
            },
            {
                img: require('../../assets/images/slides-potrait.jpg'),
                cols: 1,
                rows: 2,
            },
            {
                img: require('../../assets/images/slides-potrait-2.jpg'),
                cols: 1,
                rows: 2,
            },
            {
                img: require('../../assets/images/b-4.jpg'),
                rows: 4,
                cols: 2,
            },
            {
                img: require('../../assets/images/m-2.jpg'),
                rows: 2
            },
            {
                img: require('../../assets/images/raindance.jpg'),
                rows: 3
            }, {
                img: require('../../assets/images/rings.jpg'),
                rows: 2
            },
            {
                img: require('../../assets/images/slides-sunset.jpg'),
                rows: 2,
                cols: 2,
            },
            {
                img: require('../../assets/images/c-1-r-3.jpg'),
                rows: 2,
            },
            {
                img: require('../../assets/images/m-1.jpg'),
            },
        ];

        return (
            <div className="md:py-8 py-4 surface-200">
                <div className="font-bold md:text-5xl text-3xl text-center wave-text-gallery" style={{ letterSpacing: "0.16rem" }}>
                    Gallery
                </div>
                <div className="md:px-8 px-2">
                    <ImageList
                        sx={{ height: 550 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={121}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
                                className="hover-overlay-container"
                                onClick={() => {
                                    console.log('hello')
                                    this.showModal(item.img, "Image")
                                }}>
                                <img
                                    {...this.srcset(item.img, 201, item.rows, item.cols)}
                                    alt={"Show"}
                                    loading="lazy"
                                    className="hover-overlay"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                {isOpen && (
                    <GalleryModal
                        src={modalImage}
                        alt={modalAlt}
                        caption={modalAlt}
                        onClose={this.closeModal}
                    />
                )}
            </div>
        );
    }


}