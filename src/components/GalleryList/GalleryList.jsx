import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

export default function GalleryList ({galleryItems, getPhotos}) {
    console.log(galleryItems);

    return (
        <div className="list-container">
            {galleryItems.map(item => {
                return <GalleryItem 
                    key={item.id} 
                    item={item}
                    getPhotos={getPhotos}/>
            })}
        </div>
    )
}