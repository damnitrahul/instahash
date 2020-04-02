import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import { Switch, Route } from 'react-router-dom';
import Hashtag from './components/hashtag/Hashtag';
import Downloader from './components/downloader/Downloader';
import Footer from './components/footer/Footer';

function App() {
  console.log(
    '%c 👋 Oh, Hi there,Curious web lover!',
    'color: #d74034; font-size:24px;'
  );
  console.log(
    `%c  ✨ Like what you see? We could work together!
    
  🐛 Found a bug? Please, let me know by e-mail, twitter, github issue...

  🛠 Code available here: https://github.com/damnitrahul/instahash
    
  📬 Find me here: https://twitter.com/damnitrahul
    
  Let the debug begin!
  
  Bonus meme: https://preview.redd.it/xxeyh0e833711.gif?format=mp4&s=5fe8fde9cb56528721c04741f1ac7cfb14ef2053
  `,
    'font-size:16px'
  );
  return (
    <div id="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hashtag} />
        <Route exact path="/hashtags" component={Hashtag} />
        <Route exact path="/downloader" component={Downloader} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
