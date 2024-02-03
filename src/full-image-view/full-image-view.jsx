import React, { useState } from "react";
import './full-image-view.scss';

export const FullImageView = ({imageURI, onClose}) => {

    console.log(imageURI);
    const [isVisible, setIsVisible] = useState(true);

    const closeModal = () => {
        setIsVisible(false);
        onClose();
    }

    return (
        <>
            {isVisible && (
                <div 
                    className="modal-background"
                    onClick={closeModal}
                >
                    <img
                        src={imageURI}
                        alt={`Full Size of ${imageURI}`}
                        className="modal-image"
                    />

                </div>
            )}
        </>
    )

}

export default FullImageView;