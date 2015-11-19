import angular from 'angular';
import 'angular-ui-router';

import AddImageController from './controllers/addImageController';
import HomeController from './controllers/homeController';
import ImageService from './services/imageService';
import imageItem from './directives/imageDirective';

angular
  .module('app.images', ['ui.router'])
  .controller('AddImageController', AddImageController)
  .controller('HomeController', HomeController)
  .service('ImageService', ImageService)
  .directive('imageItem', imageItem)
;





