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
  vm.addLike = function(image) {
    console.log(image.objectId);
    vm.likes = vm.likes + 1;
    return $http.put(url + '/' + image.objectId, image.likes, PARSE.CONFIG);
  };

};

HomeController.$inject = ['ImageService', '$http', 'PARSE'];

export default HomeController;