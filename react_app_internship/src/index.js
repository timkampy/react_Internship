import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Header(){
    return(
        <div>
            <h1>‘Case study’</h1>
        </div>
    )
}

ReactDOM.render(<Header/>, document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
