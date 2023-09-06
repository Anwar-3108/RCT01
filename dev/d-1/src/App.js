
import './App.css';
import Header from './Header';
import Component from './Component';
import Footer from './Footer';

const appStyle={
  margin:'0px',
  padding:'0px',
  
}



function App() {
  return (
    <div className="App" style={appStyle}>
      <Header/>
      <Component/>
      <Footer/>
    
    </div>
  );
}

export default App;
