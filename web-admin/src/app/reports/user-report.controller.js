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
                        

                        var labels = [];    
                        var basicUsers = [];
                        var premiumUsers = [];
                        for (var i = 0, len = data.stats.length; i < len; i++) {
                          labels.push(data.stats[i].date);
                          basicUsers.push(data.stats[i].basic);
                          premiumUsers.push(data.stats[i].premium);
                        }
                        var users = [basicUsers, premiumUsers];

                        vm.line.labels = labels;
                        vm.line.data = users;

                        vm.dataLoading = false;
                    } else {
                        vm.error = true;
                        //Mostrar mensaje
                        vm.dataLoading = false;
                    }
            });
        };

        vm.getReport('01/01/2017','07/11/2017');


    }
