'use strict';

    angular
        .module('sbAdminApp')
        .controller('AbuseReportController', AbuseReportController);


    AbuseReportController.$inject = ['ReportsService','$state', '$scope'];
    function AbuseReportController(ReportsService, $state, $scope) {
        var vm = this;
        vm.dataLoading = false;
        vm.error = false;
        vm.grid = [];
        vm.itemsByPage=10;
        
        vm.pie = {
            labels : ["Lenguaje Abusivo", "Fotos Inapropiadas", "Spam", "Otros"],
            data : [0, 0, 0, 0],
            onClick: function (points, evt) {
                if (points.length > 0){
                    console.log(points[0].label);
                }
            }
        };

        vm.getReport = function(fromDate, toDate){
            vm.dataLoading = true;
            ReportsService.GetAbuses(fromDate, toDate).then(function (data) {
                    if (data.success) {
                        var chartData = [];
                        chartData.push(data.stats.abusiveLang);
                        chartData.push(data.stats.illegalImage);
                        chartData.push(data.stats.spam);
                        chartData.push(data.stats.other);
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

       vm.getReport('05/11/2017','11/11/2017');
    }

