'use strict';

const config = require('./config');
const search = require('./lib/search');
const geo = require('./lib/geo');
const brewery = require('./lib/brewery');

var brewfinder = {
  config, search, geo, brewery
}

/*brewfinder.search.all({q:'Upslope'}, (err, res) => {
  console.log(res);
});

brewfinder.search.beer({q:'Fat Tire'}, (err, res) => {
  console.log(res);
});
*/

/*brewfinder.search.guild({q:'New Belgium'}, (err, res) => {
  console.log(res);
});*/

var params = {
  lat: '40.014986',
  lng: '-105.270546'
};
/*
brewfinder.geo(params, (err, res) => {
  console.log(res);
});

params = {
  established: '1997',
  name: 'Just Beer Brewing Co.'
}
brewfinder.brewery.all(params, (err, res) => {
  console.log(res);
});*/

var id = 'OFZxLj';
/*brewfinder.brewery.byId(id, (err, res) => {
  console.log(res);
});*/

/*var ids = ['OFZxLj', 'w8xrXU'];
params.ids = ids;
brewfinder.brewery.all(params, (err, res) => {
  console.log(res);
});*/
module.exports = brewfinder;
