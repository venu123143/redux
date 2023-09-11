import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import img1 from "../MainImages/coding.jpg"
import img2 from "../MainImages/editing.jpg"
import img3 from "../MainImages/learning.jpg"
// import img4 from "../MainImages/listensongs.jpg"
// import img5 from "../MainImages/teaching.jpg"
// import img6 from "../MainImages/playgames.jpg"
import "./jqueryexzoom.css"
const ReactMagnifier = () => {

    return (
        <div className="imageMagnifier">
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'back image',
                    isFluidWidth: true,
                    src: img1
                },
                largeImage: {
                    src: img1,
                    width: 500,
                    height: 500,
                },
                isHintEnabled:true,
                hintTextMouse:'Zoom',
                enlargedImageContainerDimensions:{width: '100%', height: '100%'}
            }} />
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'back image',
                    isFluidWidth: true,
                    src: img2
                },
                largeImage: {
                    src: img2,
                    width: 500,
                    height: 500,
                },
                isHintEnabled:true,
                hintTextMouse:'Zoom',
                enlargedImageContainerDimensions:{width: '100%', height: '100%'}
            }} />
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'back image',
                    isFluidWidth: true,
                    src: img3
                },
                largeImage: {
                    src: img3,
                    width: 500,
                    height: 500,
                },
                isHintEnabled:true,
                hintTextMouse:'Zoom',
                enlargedImageContainerDimensions:{width: '100%', height: '100%'}
            }} />
        </div>
    )
}

export default ReactMagnifier