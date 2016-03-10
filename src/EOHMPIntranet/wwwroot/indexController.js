(function () {
    'use strict';   

    function indexController($location, $scope, $firebaseObject, $firebaseArray, $rootScope, $sessionStorage) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
       var ref = new Firebase("https://eoh-intranet.firebaseio.com/Users");
       vm.Users = $firebaseArray(ref);
       $scope.currentUrl = $location.path();
      // vm.Users.$add({ name: 'Denzil' });
       
      

       if ($sessionStorage.isUserAuthenticated) {
           vm.userAuthenticated = true;

       }
       else {
           vm.userAuthenticated = false;
           $location.path('/login');
       }


        $scope.navigateTo = function (url) {
            $location.path(url);
        }

    }

    angular.module('EOHIntranet').controller('indexController', indexController);
    indexController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', '$rootScope', '$sessionStorage'];
})();
