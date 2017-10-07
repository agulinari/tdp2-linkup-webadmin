'use strict';

    angular
        .module('sbAdminApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['ProfileService', '$state', '$stateParams', '$rootScope'];
    function ProfileController(ProfileService, $state, $stateParams, $rootScope) {
        var vm = this;
        vm.error = false;
        
    }
