'use strict';
    
    angular
        .module('sbAdminApp')
        .controller('BanPieController', BanPieController); 

    BanPieController.$inject = ['ReportsService','$state', '$scope'];
    function BanPieController(ReportsService, $state, $scope) {
        var vm = this;
        vm.dataLoading = false;
        vm.error = false;
        
        vm.pie = {
            labels : ["Activos", "Bloqueados"],
            data : [500, 500],
            onClick: function (points, evt) {
                if (points.length > 0){
                    console.log(points[0].label);
                    $state.go('dashboard.banreport.piedetail');

                }
                
            }
        };

        vm.getReport = function(){
            vm.dataLoading = true;
            ReportsService.GetBannedUsers().then(function (data) {
                    if (data.success) {
                        var chartData = [];
                        chartData.push(data.stats.active);
                        chartData.push(data.stats.blocked);
                        vm.pie.data = chartData;
                        vm.dataLoading = false;

                    } else {
                        vm.error = true;
                        //Mostrar mensaje
                        vm.dataLoading = false;
                    }
            });
        }

       vm.getReport();

    }