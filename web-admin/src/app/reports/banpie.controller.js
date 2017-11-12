'use strict';
    
    angular
        .module('sbAdminApp')
        .controller('BanPieController', BanPieController); 

    BanPieController.$inject = ['ReportsService','$state', '$scope'];
    function BanPieController(ReportsService, $state, $scope) {
        var vm = this;
        vm.dataLoading = false;
        vm.error = false;
        vm.grid = [];
        vm.itemsByPage=10;
        
        vm.pie = {
            labels : ["Activos", "Bloqueados"],
            data : [0, 0],
            onClick: function (points, evt) {
                if (points.length > 0){
                    console.log(points[0].label);
                    if (points[0].label == vm.pie.labels[0]){
                        $state.go('dashboard.banreport.piedetail',{isActive:true});
                    }
                    if (points[0].label == vm.pie.labels[1]){
                        $state.go('dashboard.banreport.piedetail',{isActive:false});   
                    }   
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
                        vm.grid = data.stats;
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