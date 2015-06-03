'use strict';

class SearchCtrl {
  constructor ($scope, WordPress) {
   	$scope.term = null;
   	$scope.documentationLanguage = null;
   	$scope.demo = null;

   	$scope.search = function() {
   		$scope.records = null;
   		$scope.loading = true;
   		$scope.error = false;

   		WordPress.get({
	      type: 'app',
	      'filter[taxonomy]': 'post_tag',
	      'filter[term]': $scope.term,
	      'filter[orderby]': 'meta_value_num',
	      'filter[meta_key]': 'upvotes',
	      'filter[order]': 'DESC'
	    }).then(data => {
	    	if(data.data.length > 0) {
		    	$scope.records = data.data;
		    } else {
		    	$scope.error = 'Sorry, we didn\'t find results for "' + $scope.term + '"';
		    }
		    $scope.loading = false;
	    });
   	};
  }
}

SearchCtrl.$inject = ['$scope', 'WordPressProvider'];

export default SearchCtrl;
