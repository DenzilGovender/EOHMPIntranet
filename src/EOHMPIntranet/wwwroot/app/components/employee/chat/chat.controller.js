(function () {
    'use strict';   

    function ChatController($location, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'chat';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/chat");

        init();

        function init() {
            vm.messages = $firebaseArray(ref);
        }

        vm.addMessage = function (message) {
            vm.messages.$add({
                text: message
            });

            vm.message = undefined;
        };
       
    }

    angular.module('EOHIntranet').controller('ChatController', ChatController);
    ChatController.$inject = ['$location', '$firebaseArray'];
})();
