export default function GalleryList ({galleryItems, getPhotos}) {
    console.log(galleryItems);

    return (
        <div>
            {galleryItems.map(item => {
                return (<img src={item.path} key={item.id}/>)
            })}
        </div>
    )
}