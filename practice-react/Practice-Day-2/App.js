import React from 'react';
import ReactDOM from 'react-dom/client' ;

const   h1 =  React.createElement('h1' ,{className:"heading-1"} ,`Hey! I'm heading 1 form React`);
const   h2 =  React.createElement('h2' ,{className:"heading-2"} ,`Hey! I'm heading 2 form React`);


const  component =  React.createElement('div' ,{className:"component"} ,[h1,h2]) ;

const root = ReactDOM.createRoot(document.getElementById('root')) ;

root.render(component) ;
