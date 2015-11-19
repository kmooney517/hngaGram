import $ from 'jquery';

let imageItem = function($state, ImageService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      pic: '=pizza'
    },
    template: `
      <div class="tile" ng-dblclick="vm.addLike(pic)" ng-init="vm.likes=0">
        <img class="picture" ng-src="{{pic.link}}">
        <small class="title">{{pic.name}} | </small>
        <small>Likes: {{vm.likes}}</small>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('mouseenter', function () {
        element.addClass('heart');
      });
      element.on('mouseleave', function () {
        element.removeClass('heart');
      });
    }
  };
};

imageItem.$inject = ['$state', 'ImageService'];

export default imageItem;