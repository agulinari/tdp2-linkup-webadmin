'use strict';
    
    angular
        .module('sbAdminApp')
        .controller('PieController', PieController); 

    PieController.$inject = ['ReportsService','$state', '$scope'];
    function PieController(ReportsService, $state, $scope) {
        var vm = this;
        vm.dataLoading = false;
        vm.error = false;
        
        vm.pie = {
            labels : ["Lenguaje Abusivo", "Fotos Inapropiadas", "Spam", "Otros"],
            data : [250, 250, 250, 250],
            onClick: function (points, evt) {
                if (points.length > 0){
                    console.log(points[0].label);
                    $state.go('dashboard.abusereport.piedetail');

                }
                
            }
        };

        vm.getReport = function(fromDate, toDate){
            vm.dataLoading = true;
            ReportsService.GetAbuses(fromDate, toDate).then(function (data) {
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

       vm.getReport('fecha1','fecha2');

    }