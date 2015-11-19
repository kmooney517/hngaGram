let ImageService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/image';

  this.getImages = getImages;
  this.addImage = addImage;
  this.addLike = addLike;


  function Image (imageObj) {
    this.link = imageObj.link;
    this.name = imageObj.name;
    this.likes = Number(imageObj.likes);
  }

  function addImage (imageObj) {
    let i = new Image(imageObj);
    return $http.post(url, i, PARSE.CONFIG);
  }

  function getImages () {
    return $http.get(url, PARSE.CONFIG);
  }


  function addLike (pic) {
    console.log(pic.objectId);
    pic.likes = pic.likes + 1;
    return $http.put(url + '/' + pic.objectId, pic, PARSE.CONFIG);
  }

};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;



