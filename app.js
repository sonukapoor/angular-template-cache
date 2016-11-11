var app = angular.module('plunker', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: 'product.html',
      controller: 'MainCtrl'
    })
});

app.controller('MainCtrl', function () {
  var vm = this;
});