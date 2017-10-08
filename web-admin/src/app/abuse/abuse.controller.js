'use strict';

    angular
        .module('sbAdminApp')
        .controller('AbuseController', AbuseController);

    AbuseController.$inject = ['AbuseService', '$state', '$scope', '$rootScope', 'FlashService'];
    function AbuseController(AbuseService, $state, $scope, $rootScope, FlashService) {
        var vm = this;
        vm.error = false;
        
        vm.dataLoading = true;
        vm.buttonDisabled = false;
        vm.abuses = [];
        vm.itemsByPage=10;
        vm.radio = '2';

        vm.getAll = getAll;
        vm.getOpen = getOpen;
        vm.getClosed = getClosed;

        getAll();

        $scope.$watch("vm.radio", function(newValue, oldValue){
            if(newValue != oldValue){
              switch(newValue) {
                case 0:
                    getOpen();
                    break;
                case 1:
                    getClosed();
                    break;
                default:
                    getAll();
                    break;
            }
          }
        });
        
        function getAll() {
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
        }

        function getOpen() {
            AbuseService.GetOpen().then(function (data) {
                if (data.success) {
                    vm.abuses = data.abuseReports;
                    vm.dataLoading = false;
                } else {
                    vm.error = true;
                    FlashService.Error(data.message);
                    vm.dataLoading = false;
                }
            });
        }

        function getClosed() {
            AbuseService.GetClosed().then(function (data) {
                if (data.success) {
                    vm.abuses = data.abuseReports;
                    vm.dataLoading = false;
                } else {
                    vm.error = true;
                    FlashService.Error(data.message);
                    vm.dataLoading = false;
                }
            });
        }

        vm.getCategory = function (category){
            switch(category) {
                case 1:
                    return 'Lenguaje abusivo';
                case 2:
                    return 'Fotos inapropiada';
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
