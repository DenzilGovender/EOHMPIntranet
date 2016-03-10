(function () {
    'use strict';   

    function indexController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
       var ref = new Firebase("https://eoh-intranet.firebaseio.com/Users");
       vm.Users = $firebaseArray(ref);
      // vm.Users.$add({ name: 'Denzil' });
       


        $scope.navigateTo = function (url) {
            $location.path(url);
        }

    }

    angular.module('EOHIntranet').controller('indexController', indexController);
    indexController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
