import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import './index.scss';

const App = () => {
    return(
        <Container>
            <MainView />
        </Container>
    )
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
