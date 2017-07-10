var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom' ;
import { IndexRoute } from 'react-router';
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <HashRouter>
      <Main>
          <Route exact path="/" component={Weather}/>
          <Route path="/about" component={About}/>
          <Route path="/examples" component={Examples}/>
      </Main>
  </HashRouter>,
  document.getElementById('app')
);
