import React from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { BrowserRouter, Route} from 'react-router-dom';
import { ThumbnailView } from "../thumbnail-view/thumbnail-view";

export const MainView = () => {

    //Links to 'pages'
    let navigationBar = 
        <NavigationBar

        />;

    //Display all thumbnails (default route)
    let routeToThumbnailView = 
        <Route
            path = '/'
            element = {
                <ThumbnailView />
            }
        />;

    //Router
    let returnCode = 
        <>
            <BrowserRouter>
                {navigationBar}
                <Row>
                    <Routes>
                        {routeToHomeScreen}
                    </Routes>
                </Row>
            </BrowserRouter>
        </>;

    return returnCode;
}