'use strict';

    angular
        .module('sbAdminApp')
        .controller('ActiveUsersReportController', ActiveUsersReportController);

    ActiveUsersReportController.$inject = ['ReportsService','$state', '$scope', '$filter'];
    function ActiveUsersReportController(ReportsService, $state, $scope, $filter) {
        var vm = this;
        vm.error = false;
        vm.fromDate = null;
        vm.toDate = null;
        vm.dataLoading = false;
        vm.showChart = false;
        vm.grid = [];
        vm.itemsByPage=10;

         vm.line = {
            labels: [],
            series: ['Normales', 'Premium'],
            data: [
              [],
              []
            ],
            onClick: function (points, evt) {
              console.log(points, evt);
            }
        };

        

        vm.getReport = function(fromDate, toDate){
            
            fromDate = $filter('date')(fromDate, 'dd/MM/yyyy'); 
            toDate = $filter('date')(toDate, 'dd/MM/yyyy');

            vm.dataLoading = true;

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
                        vm.grid = data.stats;
                        vm.line.labels = labels;
                        vm.line.data = users;

                        vm.dataLoading = false;
                        vm.showChart = true;
                    } else {
                        vm.error = true;
                        //Mostrar mensaje
                        vm.dataLoading = false;
                    }
            });
        };


    }
