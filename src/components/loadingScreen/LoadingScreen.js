import React from 'react';
import "../loadingScreen/LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div className="overlay">
            <div className="lds-heart"><div></div></div>
        </div>
    );
};

export default LoadingScreen;