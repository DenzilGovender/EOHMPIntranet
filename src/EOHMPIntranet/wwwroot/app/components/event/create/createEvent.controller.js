(function () {
    'use strict';



    function CreateEventController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Create Event';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Event");

        vm.save = function (event)
        {

        }
    }

    angular.module('EOHIntranet').controller('CreateEventController', CreateEventController);
    CreateEventController.$inject = ['$location'];

})();
