let HomeController = function(ImageService, $http, PARSE) {

  let vm = this;

  vm.photo = getPhotos;

  let url = PARSE.URL + 'classes/image';

  getPhotos();

  function getPhotos () {
    ImageService.getImages().then( (response) => {
      vm.photo = response.data.results;
    });
  }


};

HomeController.$inject = ['ImageService', '$http', 'PARSE'];

export default HomeController;