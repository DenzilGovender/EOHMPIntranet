(function () {
    'use strict';

    var app = angular.module('EOHIntranet', ['ngRoute','toastr','firebase', 'ngStorage', 'angular-jwt',  'ngMaterial', 'ngMenuSidenav', 'ngMessages', 'md.data.table', 'angularMoment']);
    app.constant('firebaseUrl', 'https://eoh-intranet.firebaseio.com');
  
    app.run(function ($rootScope, $location, $sessionStorage, $timeout) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.currentUrl = $location.path();
        });
    });
    
})();