(function () {
    'use strict';

    function helper($filter) {

        this.getRandomizeId = function () {
            var id = Math.floor(Math.random() * 999999) + 1;

            return id;
        }
        
    }


    angular.module('EOHIntranet').service('helper', helper);
    helper.$inject = ['$filter'];
}

());