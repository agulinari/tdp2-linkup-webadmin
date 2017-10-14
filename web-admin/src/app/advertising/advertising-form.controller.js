'use strict';

    angular
        .module('sbAdminApp')
       .controller('AdvertFormController', AdvertFormController);

    AdvertFormController.$inject = ['$state', '$scope', '$stateParams', '$rootScope'];
    function AdvertFormController($state, $scope, $stateParams, $rootScope) {
        var vm = this;
        vm.error = false;
        $scope.advert = null;

        $scope.processImage = function (flowFile){
        	//flow-file-added="!!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]"

        	var files = ["png", "gif", "jpg", "jpeg"];
        	if (!files.includes(flowFile.getExtension())) return false;
	        
        	if (flowFile.size > 500000) return false;	

			var fileReader = new FileReader();
			    fileReader.onload = function (event) {
			        $scope.advert.image = event.target.result;
			    };
			fileReader.readAsDataURL(flowFile.file);
			return true;
		}

		$scope.removeImage = function ($flow){
			$scope.advert.image = null;
			$flow.cancel();
		}
    }
