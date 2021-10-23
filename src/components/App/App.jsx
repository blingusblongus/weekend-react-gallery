import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  const [galleryItems, setGalleryItems] = useState([]);


  const getPhotos = () => {
    Axios.get('/gallery')
      .then(response => {
        console.log(response);
        setGalleryItems(response.data);
      }).catch(response => {
        console.log('GET error');
      })
  }

  useEffect(() => {
    getPhotos();
  }, []);

  console.log('galleryItems:', galleryItems);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryForm getPhotos={getPhotos}/>
        <GalleryList galleryItems={galleryItems} getPhotos={getPhotos} />

      </div>
    );
}

export default App;
