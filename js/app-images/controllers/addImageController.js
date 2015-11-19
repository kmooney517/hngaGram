let AddImageController = function($scope, PARSE, ImageService) {
  
  let vm = this;

  vm.addPicture = addPicture;

  function addPicture (image) {
    console.log('clicked');
    ImageService.addImage(image).then( (response) => {
    });
    $scope.image = {};
  }

};

AddImageController.$inject = ['$scope', 'PARSE', 'ImageService'];

export default AddImageController;




