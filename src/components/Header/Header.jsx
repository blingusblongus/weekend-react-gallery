import './Header.css';

export default function Header(props) {
    return (
        <header className="App-header">
            <div className="title-container">
                <i className="fas fa-cat"></i>
                <h1 className="App-title">
                    Very Important Photos
                </h1>
                <i className="fas fa-cat"></i>
            </div>
        </header>
    )
}