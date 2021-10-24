import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import './App.css';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  // Retrieve photos from server/db
  const getPhotos = () => {
    Axios.get('/gallery')
      .then(response => {
        console.log(response);
        setGalleryItems(response.data);
      }).catch(response => {
        console.log('GET error');
      })
  }

  // On Load, get data from server
  useEffect(() => {
    getPhotos();
  }, []);
  
    return (
      <div className="App">
        <Header />
        <main>
          <GalleryForm getPhotos={getPhotos}/>
          <GalleryList galleryItems={galleryItems} getPhotos={getPhotos} />
        </main>
      </div>
    );
}

export default App;
