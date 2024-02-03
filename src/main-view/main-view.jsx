import React, { useEffect, useState } from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThumbnailView } from "../thumbnail-view/thumbnail-view";
import { Row } from "react-bootstrap";

const API_URI = "http://3.80.91.71"

export const MainView = () => {

    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        fetch(API_URI + '/images')
        .then((response)=> response.json())
        .then((data) => {
            const imageFromAPI = data;
            console.log(imageFromAPI);
        });

        
    }, [imageList]);

    //Links to 'pages'
    let navigationBar = 
        //<NavigationBar
        <>
        </>
        ///>;

    //Display all thumbnails (default route)
    let routeToThumbnailView = 
        <Route
            path = '/'
            element = {
                <ThumbnailView 
                    imageList={imageList}
                />
            }
        />;

    //Router
    let returnCode = 
        <>
            <BrowserRouter>
                {navigationBar}
                <Row>
                    <Routes>
                        {routeToThumbnailView}
                    </Routes>
                </Row>
            </BrowserRouter>
        </>;

    return returnCode;
}