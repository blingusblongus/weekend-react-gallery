import Axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material/";
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
        <>
        <h3 className="photo-label">Submit a Photo</h3>
        <form className="input-form">
            <TextField 
                id="path-in" 
                className="form-item" 
                onChange={(e) => setPath(e.target.value)}
                label="Image URL"
                variant="outlined"
                required>
            </TextField>
            <TextField 
                className="form-item" 
                onChange={(e) => setDescription(e.target.value)} 
                label="Description"
                required>
            </TextField>
            <Button onSubmit={addItem} className="form-item" variant="contained">Add</Button>
        </form>
        </>
    )
}