(function () {
    'use strict';

    function ViewEventController($location, $scope, $firebaseObject, EventService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'View Event';
        
        init();

        function init() {
            vm.event = EventService.getSelectedEvent();
        }

        vm.addEventComment = function (comment) {
          
        }
        
    }

    angular.module('EOHIntranet').controller('ViewEventController', ViewEventController);
    ViewEventController.$inject = ['$location', '$scope', '$firebaseObject', 'EventService'];
})();
