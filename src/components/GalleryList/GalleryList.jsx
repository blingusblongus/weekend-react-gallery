import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList ({galleryItems, getPhotos}) {
    console.log(galleryItems);

    return (
        <div>
            {galleryItems.map(item => {
                return <GalleryItem item={item}/>
            })}
        </div>
    )
}