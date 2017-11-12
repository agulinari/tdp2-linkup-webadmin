'use strict';
    
    angular
        .module('sbAdminApp')
        .controller('BanPieDetailController', BanPieDetailController); 

    BanPieDetailController.$inject = ['ReportsService','$state', '$scope', '$stateParams'];
    function BanPieDetailController(ReportsService, $state, $scope, $stateParams) {
        var vm = this;
        vm.dataLoading = false;
        vm.error = false;
        vm.grid = [];
        vm.itemsByPage=10;
        
        vm.pie = {
            labels : ["Premium", "Básicos"],
            data : [0, 0],
            onClick: function (points, evt) {
                if (points.length > 0){
                    console.log(points[0].label);
                    $state.go('dashboard.banreport.pie');

                }
                
            }
        };

        vm.getReport = function(isActive){
            vm.dataLoading = true;
            ReportsService.GetBanDetail($stateParams.isActive).then(function (data) {
                    if (data.success) {
                        var chartData = [];
                        chartData.push(data.stats[0].premium);
                        chartData.push(data.stats[0].basic);
                        vm.grid = data.stats[0];
                        vm.dataLoading = false;
                        vm.pie.data = chartData;

                    } else {
                        vm.error = true;
                        //Mostrar mensaje
                        vm.dataLoading = false;
                    }
            });
        }

       vm.getReport('true');
    }