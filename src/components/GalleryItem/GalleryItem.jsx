import './GalleryItem.css';

export default function GalleryItem({item}){
    return (<img src={item.path} key={item.id}/>);
}