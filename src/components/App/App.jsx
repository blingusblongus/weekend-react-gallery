import Axios from 'axios';
import React, {useEffect, useState} from 'react';
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
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
