import React from "react";
import ReactDOM from "react-dom/client";
//Creating Nested Element
const parent  =  React.createElement("div",{id:'one',className:"one"},
    [React.createElement("div",{id:'two',className:'two'},

        [React.createElement('h1',{id:'three',className:'three'},"This is Level Two from Nested Element Creation",
        React.createElement('h2',{id:"Main"},"Sibling🚀")  
        )]
    ),
    React.createElement("div",{id:'two',className:'two'},

        [React.createElement('h1',{id:'three',className:'three'},"This is Level three from Nested Element Creation",
        React.createElement('h2',{id:"Main"},"Sibling🥂")  
        )]
    )]
    
);
const root = ReactDOM.createRoot(document.getElementById('one'));
//ReactElement(Object)=>HTML[Browser Understandable]
root.render(parent);
