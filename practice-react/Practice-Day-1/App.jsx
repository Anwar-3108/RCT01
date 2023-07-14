

const h1=  React.createElement('h1' ,{className:'heading1'} ,"Hey! I'm Heading1")
const h2=  React.createElement('h2' ,{className:'heading1'} ,"Hey! I'm Heading2")
const img =  React.createElement('img' ,{className:'image' , src:"https://loremflickr.com/640/360"} ,undefined)
const container =  React.createElement("div" ,{className:"container"} , [h1,h2 ,img]) ;
const  root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(container) ;