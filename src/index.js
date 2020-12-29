import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,

    document.getElementById('root'),
);
