(function () {
    'use strict';

    var app = angular.module('EOHIntranet', ['ngRoute','toastr','firebase', 'ngStorage', 'angular-jwt',  'ngMaterial', 'ngMenuSidenav', 'ngMessages', 'md.data.table', 'angularMoment']);
    app.constant('firebaseUrl', 'https://flickering-torch-5362.firebaseio.com');
  
})();