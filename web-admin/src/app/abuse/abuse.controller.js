'use strict';

    angular
        .module('sbAdminApp')
        .controller('AbuseController', AbuseController);

    AbuseController.$inject = ['AbuseService', '$state', '$rootScope', 'FlashService'];
    function AbuseController(AbuseService, $state, $rootScope, FlashService) {
        var vm = this;
        vm.error = false;
        
        vm.dataLoading = true;
        vm.buttonDisabled = false;
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
        vm.getCategory = function (category){
            switch(category) {
                case 1:
                    return 'Fotos inapropiadas';
                case 2:
                    return 'Lenguaje Abusivo';
                case 3:
                    return 'Spam';
                default:
                    return 'Otros';
            }
        }

        vm.getStatus = function (isOpen){
            if (isOpen){
                return 'Abierto';
            }else{
                return 'Cerrado';
            }
        }

        vm.close = function(abuse){
            vm.buttonDisabled = true;
            AbuseService.Update(abuse._id, false).then(function (data) {
                if (data.success) {
                    abuse.isOpen = false;
                    vm.buttonDisabled = false;
                } else {
                    vm.error = true;
                    FlashService.Error(data.message);
                    vm.buttonDisabled = false;
                }
            });
        }
    }
