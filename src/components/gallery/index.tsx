import React, {useState} from "react";
import {createUseStyles} from "react-jss";

interface IGallery {
    images: string[]
}

const useStyles = createUseStyles({
    imageVisible: {
        maxWidth: '100%',
        display: 'block',
        transition: '1s'
    },
    imageHidden: {
        display: 'none',
        transition: '1s'
    },

})
const Gallery: React.FC<IGallery> = ({ images}) => {
    const classes = useStyles();
    const [imageIndex, setImageIndex] = useState(0)
    const nextImage = () => setImageIndex((index=>(index+1)%images.length))
    const prevImage = () => setImageIndex((index=>(images.length+index-1)%images.length))
    return (
        <div className="gallery_container">
            <div onClick={prevImage}>
                <i className="material-icons gallery_arrow">keyboard_arrow_left</i>
            </div>
            <div className="flex-grow">
                {images.map((imageSrc, index)=>(
                    <img src={imageSrc} alt="photo" className={index === imageIndex ? classes.imageVisible : classes.imageHidden} />
                ))}
            </div>
            <div onClick={nextImage}>
                <i className="material-icons gallery_arrow">keyboard_arrow_right</i>
            </div>
        </div>
    )
}

export default Gallery;
