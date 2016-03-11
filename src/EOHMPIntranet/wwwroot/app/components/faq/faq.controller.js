(function () {
    'use strict';



    function faqController($location, $sessionStorage, $firebaseObject, $firebaseArray, EventService, $mdToast, modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Faq';
        vm.events = [];
        

        var ref = new Firebase("https://eoh-intranet.firebaseio.com");

        init();

        function init() {

         
        }

        vm.video = function(e)
        {
            var videoElements = angular.element(e.srcElement);
            videoElements[0].pause();
        }

       
    }

    angular.module('EOHIntranet').controller('faqController', faqController);
    faqController.$inject = ['$location', '$sessionStorage', '$firebaseObject', '$firebaseArray', 'EventService', '$mdToast', 'modal'];
})();
