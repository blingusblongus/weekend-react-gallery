import './GalleryItem.css';
import {useState} from 'react';
import Axios from 'axios';

export default function GalleryItem({item, getPhotos}){
    const [showDescription, setShowDescription] = useState(false);

    // flips showDescription bool on image click
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }

    // PUT request to add a like
    const addLike = () => {
        Axios.put(`gallery/like/${item.id}`)
            .then(response => {
                console.log('Like incremented');
                getPhotos();
            }).catch(err => {
                console.log('couldn\'t PUT like', err);
            })
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
            <div className="item-description noselect" onClick={toggleDescription}>
                {item.description}
            </div>}
            <div onClick={addLike}>
                <div className="lower-right">
                    <i className="fas fa-heart"></i>
                </div>
                <div className="lower-right noselect">
                    <div className="like-number">{item.likes}</div>
                </div>
            </div>
        </div>
    )

    return jsx;
}