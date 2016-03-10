(function () {
    'use strict';

    angular
        .module('EOHIntranet')
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
