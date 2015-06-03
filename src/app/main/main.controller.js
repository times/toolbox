'use strict';

class MainCtrl {
  constructor ($scope) {
    $scope.categories = [
      {
        name: 'Maps',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Charts',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Long Reads',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Quizzes',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Timelines',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Bulletins',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Videos',
        image: 'http://www.placehold.it/140x140'
      },
      {
        name: 'Images',
        image: 'http://www.placehold.it/140x140'
      },
    ];
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
