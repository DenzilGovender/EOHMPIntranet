(function () {
    'use strict';   

    function ChatController($location, $firebaseArray, $sessionStorage) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'chat';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/chat");
       // var time = '';
        init();
       // timeNow(i);

        function timeNow(i) { 
            var d = new Date(),
                h = (d.getHours()<10?'0':'') + d.getHours(),
                m = (d.getMinutes()<10?'0':'') + d.getMinutes();
            i.value = h + ':' + m;
        }

        var d = new Date(); // for now
       var time = d.getHours() + ':' + d.getMinutes() +  ':' + d.getSeconds(); // => 51

        function init() {
            vm.messages = $firebaseArray(ref);
        }

        vm.addMessage = function (message) {
                vm.messages.$add({
                text: message,
                TimeSubmitted: time,
                user: $sessionStorage.displayName,
                image: $sessionStorage.profileImage
            });

            vm.message = undefined;
        };
       
    }

    angular.module('EOHIntranet').controller('ChatController', ChatController);
    ChatController.$inject = ['$location', '$firebaseArray', '$sessionStorage'];
})();
