import './GalleryItem.css';
import {useState} from 'react';

export default function GalleryItem({item}){
    const [showDescription, setShowDescription] = useState(false);

    // flips showDescription bool on image click
    const toggleDescription = () => {
        setShowDescription(!showDescription);
        console.log('description:', showDescription);
    }

    // conditionally renders dim and description based on showDescription
    let jsx = (
        <div className="item-container">
            <img 
            className={showDescription ?
                "item item-image dim" :
                "item item-image"}
            src={item.path} 
            onClick={toggleDescription}
            />
            {showDescription && 
            <div className="item-description">
                {item.description}
            </div>}
            <div className="lower-right">
                <i className="fas fa-heart"></i>
            </div>
            <div className="lower-right">
                <div className="like-number">{item.likes}</div>
            </div>
        </div>
    )

    return jsx;
}