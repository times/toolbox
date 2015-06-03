'use strict';

class NavbarCtrl {
  constructor ($scope, $state) {
    $scope.user = {
    	forename: 'Chris',
    	surname: 'Hutchinson',
    	image: 'https://pbs.twimg.com/profile_images/482607943071039488/vcujIxUA.jpeg',
    };

    $scope.home = function() {
    	$state.go('home', {}, {reload: true});
    };
  }
}

NavbarCtrl.$inject = ['$scope', '$state'];

export default NavbarCtrl;
