﻿(function () {
    'use strict';

    function RecruitmentViewController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com");
        vm.recruitment = {};
        //ref.push({ name: 'Denzil' });
        ////vm.Users.$add({ name: 'Denzil' });

        vm.listOfRecruitments = $firebaseArray(ref.child('Recruitment'));

        for (var i = 0; i < vm.listOfRecruitments.length; i++)
        {
            vm.listOfRecruitments[i].closeDate = Date.parse(vm.listOfRecruitments[i]);
        }

        //$scope.navigateTo = function (url) {
        //    $location.path(url);
        //}

        $scope.create = function (recruitment) {
            var AddRecruitment = $firebaseArray(ref);
            recruitment.openDate = recruitment.openDate.toString();
            recruitment.closeDate = recruitment.closeDate.toString();
            AddRecruitment.$add(recruitment);
        }

    }

    angular.module('EOHIntranet').controller('RecruitmentViewController', RecruitmentViewController);
    RecruitmentViewController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();