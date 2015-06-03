'use strict';

class AppCtrl {
  constructor ($scope, $state, $stateParams, WordPress, $sce, localStorageService) {
    WordPress.single($stateParams.id, {
      type: 'app',
    }).then(data => {
      $scope.record = data.data;
      $scope.loading = false;
    });

    $scope.trustAsURL = function(data) {
      return $sce.trustAs('html', data);
    };

    $scope.save = function(id) {
      return localStorageService.set('saved', id);
    };

    $scope.isSaved = function(id) {
      var storage = localStorageService.get('saved');
      if(storage === id) {
        return true;
      }

      return false;
    };
  } 
}

AppCtrl.$inject = ['$scope', '$state', '$stateParams', 'WordPressProvider', '$sce', 'localStorageService'];

export default AppCtrl;
