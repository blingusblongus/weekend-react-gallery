import Axios from "axios";
import { useState } from "react";
import './GalleryForm.css';

export default function GalleryForm({getPhotos}) {
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');
    
    const addItem = (e) => {
        e.preventDefault();

        const data = {
            path: path,
            description: description
        }
        
        Axios.post('/gallery', data)
            .then(response => {
                console.log('Successful POST');
                getPhotos();
            }).catch(err => {
                console.log('Post problem:', err);
            })
    }

    return (
        <form className="input-form">
            <div className="form-group">
                <label htmlFor="path-in">Image URL:</label>
                <input id="path-in" className="form-item" onChange={(e) => setPath(e.target.value)} type="text" placeholder="Image URL"></input>
            </div>
            <div className="form-group">
                <label htmlFor="description-in">Description:</label>
                <input id="description-in" className="form-item" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"></input>
            </div>
            <button onClick={addItem} className="form-item">Add</button>
        </form>
    )
}