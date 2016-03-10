(function () {
    'use strict';

    function LoginController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        vm.login = {};
        //ref.push({ name: 'Denzil' });
        ////vm.Users.$add({ name: 'Denzil' });

        //$scope.listOfUsers = $firebaseArray(ref.child('Users'));

        //$scope.navigateTo = function (url) {
        //    $location.path(url);
        //}

        $scope.login = function (credentials) {
            ref.authWithPassword({
                email: credentials.username,
                password: credentials.password
            }, function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        }

        $scope.loginWithFacebook = function (credentials) {

            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }

            });
        }

    }

    angular.module('EOHIntranet').controller('LoginController', LoginController);
    LoginController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
