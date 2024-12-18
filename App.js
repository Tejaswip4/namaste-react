import React from "react";
import ReactDOM from 'react-dom/client'

// const header = React.createElement('h1', {id: 'heading', xyz: "abc"}, "Hello world namaste react !");

// console.log(header); // Object


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(header)

{/* <div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
    </div>
</div> */}


// const parent = React.createElement('div', {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement('h1', {}, "I am an h1 tag")));

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent)


{/* <div id = "parent">
    <div id="child1">
        <h1>I am an H1 tag</h1>
        <h2>I am an H1 tag</h2>
    </div>
    <div id="child2">
        <h1>I am an H1 tag</h1>
        <h2>I am an H1 tag</h2>
    </div>
</div> */}


const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1",{}, "I am an H1 tag"), 
            React.createElement("h2",{}, "I am an H2 tag")
        ]),
        React.createElement("div", {id:"child2"}, 
            [React.createElement("h1",{}, "I am an H1 tag"), 
                React.createElement("h2",{}, "I am an H2 tag")
        ])
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)