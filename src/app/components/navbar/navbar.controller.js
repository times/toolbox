'use strict';

class NavbarCtrl {
  constructor ($scope) {
    $scope.user = {
    	forename: 'Chris',
    	surname: 'Hutchinson',
    	image: 'https://pbs.twimg.com/profile_images/482607943071039488/vcujIxUA.jpeg',
    };
  }
}

NavbarCtrl.$inject = ['$scope'];

export default NavbarCtrl;
