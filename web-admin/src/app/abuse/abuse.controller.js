'use strict';

    angular
        .module('sbAdminApp')
        .controller('AbuseController', AbuseController);

    AbuseController.$inject = ['AbuseService', '$state', '$rootScope', 'FlashService'];
    function AbuseController(AbuseService, $state, $rootScope, FlashService) {
        var vm = this;
        vm.error = false;
        
        vm.dataLoading = true;
        vm.abuses = [];
        AbuseService.GetAll().then(function (data) {
                if (data.success) {
                    vm.abuses = data.abuseReports;
                    vm.dataLoading = false;
                } else {
                    vm.error = true;
                    FlashService.Error(data.message);
                    vm.dataLoading = false;
                }
            });

        vm.itemsByPage=10;
    }
