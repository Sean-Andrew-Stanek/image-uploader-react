import React from "react";

export const ThumbnailView = ({imageList, isLoading, API_URI}) => {

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                imageList.map((imageName, index) => (
                    <img
                        key={index}
                        src={API_URI+'/images/'+imageName}
                        alt={`Thumbnail of ${imageName}`}
                        style={{margin: '5px'}}
                    />
                ))
            )}
        </div>
        
    )
}