import angular from 'angular';

import HomeController from './controllers/homeController';

angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
;

