'use strict';

    angular
        .module('sbAdminApp')
        .controller('AbuseController', AbuseController);

    AbuseController.$inject = ['AbuseService', '$state', '$rootScope', 'FlashService'];
    function AbuseController(AbuseService, $state, $rootScope, FlashService) {
        var vm = this;
        vm.error = false;
        vm.abuse = abuse;

        function abuse() {
            vm.dataLoading = true;
            AbuseService.GetAll()
                .then(function ($scope/*response*/) {
                $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
                $scope.gridOptions = { data: 'myData' };
                   /* if (response.success) {
                        FlashService.Success('successful', true);
                        $state.go('abuse');
                    } else {
                        vm.error = true;
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }*/
                });
        }
    }
