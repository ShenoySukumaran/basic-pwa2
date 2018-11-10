import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const beers = [{
  id: 1,
  name: '1857 Ale', 
  imagesUrl: ['images/beers/dark-ales-1.jpg'],
  type: 'Ales',
  style: 'Strong',
  restaurantId: 1,
  description: '1857 is our rendition of the classic Cologne ale that blends the line between ale and lager. Soft notes of German Pils malt compliment the subtle and smooth crisp finish. Lightly hopped and balanced by delicate esters of traditional Kolsch yeast.'
}];

const state = {
  beers: beers,
};

ReactDOM.render(<App {...state} />, document.getElementById('root'));
