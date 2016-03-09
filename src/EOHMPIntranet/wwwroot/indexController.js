(function () {
    'use strict';   

    function indexController($location, $scope, $firebaseObject) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
       var ref = new Firebase("https://flickering-torch-5362.firebaseio.com");


        $scope.navigateTo = function (url) {
            $location.path(url);
        }

    }

    angular.module('EOHIntranet').controller('indexController', indexController);
    indexController.$inject = ['$location', '$scope','$firebaseObject'];
})();
