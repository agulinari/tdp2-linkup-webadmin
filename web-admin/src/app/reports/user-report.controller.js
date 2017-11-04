'use strict';

    angular
        .module('sbAdminApp')
        .controller('ActiveUsersReportController', ActiveUsersReportController);

    ActiveUsersReportController.$inject = ['ReportsService','$state', '$scope'];
    function ActiveUsersReportController(ReportsService, $state, $scope) {
        var vm = this;
        vm.error = false;
        vm.fromDate = null;
        vm.toDate = null;
        vm.dataLoading = true;

         vm.line = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            series: ['Normales', 'Premium'],
            data: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]
            ],
            onClick: function (points, evt) {
              console.log(points, evt);
            }
        };

        vm.getReport = function(fromDate, toDate){
            ReportsService.GetActiveUsers(fromDate, toDate).then(function (data) {
                    if (data.success) {
                        vm.dataLoading = false;
                        vm.line.data = data.data;
                    } else {
                        vm.error = true;
                        //Mostrar mensaje
                        vm.dataLoading = false;
                    }
            });
        };

        vm.getReport('fecha1','fecha2');


    }
