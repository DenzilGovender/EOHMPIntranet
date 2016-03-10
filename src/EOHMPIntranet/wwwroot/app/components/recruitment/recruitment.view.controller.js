(function () {
    'use strict';

    function RecruitmentViewController($location, $scope, $firebaseObject, $firebaseArray, RecruitmentService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/");
        vm.recruitment = {};
        //ref.push({ name: 'Denzil' });
        ////vm.Users.$add({ name: 'Denzil' });

     
            $firebaseArray(ref.child('Recruitment')).$loaded().then(function (reponse) {
        
            vm.listOfRecruitments = reponse;
            for (var i = 0; i < vm.listOfRecruitments.length; i++) {
                vm.listOfRecruitments[i].closeDate = new Date(vm.listOfRecruitments[i].closeDate);
            }
        });

        

        //$scope.navigateTo = function (url) {
        //    $location.path(url);
        //}

        $scope.view = function (recruitment) {
            RecruitmentService.assignCurrentRecruitment(recruitment);
            $location.path('/RecruitmentDetail');
        }

    }

    angular.module('EOHIntranet').controller('RecruitmentViewController', RecruitmentViewController);
    RecruitmentViewController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'RecruitmentService'];
})();
