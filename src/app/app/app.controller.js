'use strict';

class AppCtrl {
  constructor ($scope, $state, $stateParams, WordPress, $sce) {
    WordPress.single($stateParams.id, {
      type: 'app',
    }).then(data => {
      $scope.record = data.data;
      $scope.loading = false;
    });

    $scope.trustAsURL = function(data) {
      return $sce.trustAs('html', data);
    };
  } 
}

AppCtrl.$inject = ['$scope', '$state', '$stateParams', 'WordPressProvider', '$sce'];

export default AppCtrl;
