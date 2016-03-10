(function () {
    'use strict';

    function LoginController($location, $scope, $firebaseObject, $firebaseArray, $sessionStorage, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        vm.login = {};
        $rootScope.displayName = 'Name';
        $rootScope.profileImage = '/app/assets/img/placeholder.png';
        $rootScope.idNumber = '123456789';
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
                    $scope.$apply(function () {
                        console.log("Authenticated successfully with payload:", authData);
                        $rootScope.isUserAuthenticated = true;
                        $rootScope.displayName = 'Administrator';
                        $rootScope.profileImage = '';
                        $rootScope.idNumber = '123456789';
                        $rootScope.userType = 'admin';
                        $location.path('/ViewRecruitment');
                    });
                }
            });
        }

        $scope.loginWithFacebook = function (credentials) {

            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $scope.$apply(function (){
                        console.log("Authenticated successfully with payload:", authData);
                    $sessionStorage.isUserAuthenticated = true;
                    $rootScope.userType = 'employee';
                    $rootScope.displayName = authData.facebook.displayName;
                    $rootScope.profileImage = authData.facebook.profileImageURL;
                    $rootScope.idNumber = authData.facebook.cachedUserProfile.id;
                    $location.path('/ViewRecruitment');
                    });
                   
                }

            });
        }

    }

    angular.module('EOHIntranet').controller('LoginController', LoginController);
    LoginController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', '$sessionStorage', '$rootScope'];
})();
