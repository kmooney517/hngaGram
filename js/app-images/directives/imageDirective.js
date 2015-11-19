import $ from 'jquery';

let imageItem = function($state, ImageService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      pic: '=pizza'
    },
    template: `
      <div class="tile">
        <img class="picture" ng-src="{{pic.link}}">
        <small class="title">{{pic.name}} | </small>
        <small>Likes: {{pic.likes}}</small>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        ImageService.addLike(scope.pic);
      });
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