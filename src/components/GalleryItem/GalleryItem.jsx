import './GalleryItem.css';
import {useState} from 'react';

export default function GalleryItem({item}){
    const [showDescription, setShowDescription] = useState(false);
    console.log(item.description);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
        console.log('description:', showDescription);
    }

    let imageJsx = (
        <div className="item-container">
            <img 
            className="item item-image"
            src={item.path} 
            onClick={toggleDescription}
            alt={item.description}
            />
            
        </div>);

    let descriptionJsx = (
        <div className="item-container">
            <img 
            className="item item-image dim"
            src={item.path} 
            onClick={toggleDescription}
            />
            <div className="item-description">
                {item.description}
            </div>
            
        </div>
    )

    // return image or description 
    return showDescription ? descriptionJsx : imageJsx;
}