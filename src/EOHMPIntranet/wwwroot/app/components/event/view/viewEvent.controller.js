(function () {
    'use strict';

    angular
        .module('app')
        .controller('viewEvent', viewEvent);

    viewEvent.$inject = ['$location']; 

    function viewEvent($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'viewEvent';

        activate();

        function activate() { }
    }
})();
