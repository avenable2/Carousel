function CarouselCtrl() {
  var ctrl = this;
  ctrl.images = [
      '../../../resources/images/img1.jpg',
      '../../../resources/images/img2.jpg',
      '../../../resources/images/img3.jpg'
  ]
}

angular.module("myApp.carousel", [])
    .component('carousel',{
      templateUrl: 'components/carousel/carousel.html',
      controller: CarouselCtrl
    });