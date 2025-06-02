const App = ({ shadowContainer }) => {
    const handleClose = () => {
        shadowContainer.remove()
    };

    return (
        <div className="shadow-container">
            
            <button className="close" onClick={handleClose}>X</button>
        </div>
    )
}

export default App;