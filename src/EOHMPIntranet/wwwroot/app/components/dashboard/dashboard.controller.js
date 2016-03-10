(function () {
    'use strict';



    function dashboardController($location, $firebaseArray, $mdToast) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Create Event';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Event");
        vm.minDate = new Date();

        vm.save = function (event)
        {
            var AddEvent = $firebaseArray(ref);
            var date = event.date;
            event.date = event.date.toString();
            AddEvent.$add(event);
            $mdToast.show(
                          $mdToast.simple()
                          .textContent('Event is saved successfully!')
                          .hideDelay(3000));
            $location.path('/Events');
        }

        vm.cancel = function () {
            $location.path('/Events');
        }

        vm.navigateTo = function (url) {
            $location.path(url);
        }
    }

    angular.module('EOHIntranet').controller('dashboardController', dashboardController);
    dashboardController.$inject = ['$location', '$firebaseArray', '$mdToast'];

})();
