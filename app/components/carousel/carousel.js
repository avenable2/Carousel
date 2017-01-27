function CarouselCtrl() {
  var ctrl = this;
  ctrl.message = 'This is a message';
}

angular.module("myApp.carousel", [])
    .component('carousel',{
      templateUrl: 'carousel.html',
      controller: CarouselCtrl,
    });