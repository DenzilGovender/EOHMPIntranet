(function () {
    'use strict';   

    function indexController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
       var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Recruitment");
      // ref.push({ name: 'Denzil' });
       //vm.Users.$add({ name: 'Denzil' });
       
       $scope.listOfUsers = $firebaseArray(ref.child('Users'));

        $scope.navigateTo = function (url) {
            $location.path(url);
        }

    }

    angular.module('EOHIntranet').controller('indexController', indexController);
    indexController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
