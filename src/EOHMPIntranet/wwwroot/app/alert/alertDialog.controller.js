(function() {
    'use strict';
    function alertDialogController($location, $scope, modal, alertDialogService) {

        var vm = this;
        vm.header = "Alert";
        vm.message = "Are you sure you want to navigate away from this page? All entered information will be lost.";

        init();

        function init() {
            $scope.header = alertDialogService.header;
            $scope.message = alertDialogService.message;
        }
        $scope.navigate = function () {
            $location.path(alertDialogService.getPath());
            modal.getResult(true);
        };

        $scope.cancel = function () {
            modal.hide();
        };
    }

    angular.module('EOHIntranet').controller('alertDialogController', alertDialogController);
    alertDialogController.$inject = ['$location', '$scope', 'modal', 'alertDialogService'];

})();