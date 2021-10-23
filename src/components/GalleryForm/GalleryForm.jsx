import Axios from "axios";
import { useState } from "react"

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
        <form>
            <input onChange={(e) => setPath(e.target.value)} type="text" placeholder="Image URL"></input>
            <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}