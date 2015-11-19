let ImageService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/image';

  this.getImages = getImages;
  this.addImage = addImage;
  // this.addSomeLove = addSomeLove;



  function Image (imageObj) {
    this.link = imageObj.link;
    this.name = imageObj.name;
    this.like = 0;
  }

  function addImage (imageObj) {
    let i = new Image(imageObj);
    return $http.post(url, i, PARSE.CONFIG);
  }

  function getImages () {
    return $http.get(url, PARSE.CONFIG);
  }

};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;



