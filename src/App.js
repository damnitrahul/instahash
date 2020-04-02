import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import { Switch, Route } from 'react-router-dom';
import Hashtag from './components/hashtag/Hashtag';
import Downloader from './components/downloader/Downloader';
import Footer from './components/footer/Footer';

function App() {
  // const [appState, setAppState] = useState('hash');
  // const handleStateChange = e => {
  //   setAppState(e.target.getAttribute('name'));
  // };
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
