import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Filter from './Filter';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
          <Route path='/filter' element={<Filter/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
