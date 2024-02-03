import React, {useState} from "react";
import FullImageView from "../full-image-view/full-image-view";
import "./thumbnail-view.scss"

export const ThumbnailView = ({imageList, isLoading, API_URI}) => {

    const [selectedImage, setSelectedImage] = new useState(null);

    const openModal = (imageName) => {
        setSelectedImage(API_URI + '/images/' + imageName.replace('_resized', ''));
        console.log(selectedImage);
    }

    const closeModal = () => {
        setSelectedImage(null);
    }

    return (
        <>
            <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
                <h1>Images from S3</h1>
            </div>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    imageList.map((imageName, index) => (
                        <img
                            key={index}
                            src={API_URI+'/images/'+imageName}
                            alt={`Thumbnail of ${imageName}`}
                            className="thumb-img"
                            onClick={() => openModal(imageName)}
                        />
                        
                    ))
                )}
                {selectedImage && (
                    <FullImageView
                        imageURI = {selectedImage}
                        onClose = {closeModal}
                    />
                )}
            </div>
        </>
    )
}