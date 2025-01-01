import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";


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



// const parent = React.createElement("div", {id:"parent"},
//     [React.createElement("div", {id:"child1"}, 
//         [React.createElement("h1",{}, "I am an H1 tag"), 
//             React.createElement("h2",{}, "I am an H2 tag")
//         ]),
//         React.createElement("div", {id:"child2"}, 
//             [React.createElement("h1",{}, "I am an H1 tag"), 
//                 React.createElement("h2",{}, "I am an H2 tag")
//         ])
//     ]);


//     console.log(parent);
    
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent)

// React.createElement => Object => HTMLElement(render)

// const parent = 
// React.createElement('h1', {id:"heading"}, "Namaste React 🚀");

// console.log(parent);

// JSX = transpiled before it reaches the JS = > PARCEL => Babel

// const jsxHeading = (<h1 className="head">
//     Namaste React using JSX
//     </h1>) 
// console.log(jsxHeading);




// root.render(parent)
// root.render(jsxHeading)

/*
// React element
const heading = (
    <h1>Namaste React JSX 🚀</h1>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

*/

/*


// React variable 
const elem = <span>React Element</span>

// React component - 2
const Title = () => (
    <h1 className="head" tabIndex='5'>
        {elem}
        Namaste React using another way of Component</h1>
)


// React element
const title = (
    <h1>Namaste React Element 🚀</h1>
)

// React Component - 1
const HeadingComponent = () => (
    <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    {title}
     <h1>Namaste React using Component</h1>
     </div>
)
    

const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(<HeadingComponent />)

*/
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)