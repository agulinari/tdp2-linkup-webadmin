'use strict';
    
    angular
        .module('sbAdminApp')
        .controller('PieDetailController', PieDetailController); 

    PieDetailController.$inject = ['ReportsService','$state', '$scope'];
    function PieDetailController(ReportsService, $state, $scope) {
        var vm = this;
        vm.dataLoading = false;
        vm.error = false;

        vm.pie = {
            labels : ["Bloqueado", "No Bloqueado"],
            data : [500, 500],
            onClick: function (points, evt) {
                if (points.length > 0){
                    console.log(points[0].label);
                    $state.go('dashboard.abusereport.pie');

                }
                
            }
        };

        vm.getReport = function(fromDate, toDate, abuseType){
            vm.dataLoading = true;
            ReportsService.GetBannedUsers(fromDate, toDate, abuseType).then(function (data) {
                    if (data.success) {
                        vm.dataLoading = false;
                        vm.pie.data = data.data;

                    } else {
                        vm.error = true;
                        //Mostrar mensaje
                        vm.dataLoading = false;
                    }
            });
        }

       vm.getReport('fecha1','fecha2', 'Fotos Inapropiadas');
    }