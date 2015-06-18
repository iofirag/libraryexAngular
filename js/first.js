var app= angular.module('exercise_part_b',[]);


app.service('libraryApi', function($http){
    var result = {};

    this.getAllBestSellersBooks = function() {
        return $http.get('http://libraryex.herokuapp.com/getAllBestSellersBooks')
					.then(function(result) {
                        return result.data;	//result.data
                    });
    };
    this.getBooksByMonth = function(month) {
    	return $http.get('http://libraryex.herokuapp.com/getBooksByMonth?month='+month)
        			.then(function(result) {
        				return result.data;
        			});
    };
    this.getBookById = function(id) {
    	return $http.get('http://libraryex.herokuapp.com/getBookById/'+id)
    				.then(function(result) {
    					return result.data;
    				});
    }
    this.getBookByName = function(name) {
    	return $http.get('http://libraryex.herokuapp.com/getBookByName?name='+name)
    				.then(function(result){
    					return result.data;
    				});
    }
});

app.controller('functrions', function ($scope, libraryApi) {
	$scope.titleResult1 = 'Function 1';
	$scope.titleResult2 = 'Function 2';
	$scope.titleResult3 = 'Function 3';
	$scope.titleResult4 = 'Function 4';
    $scope.ofiraghai = 'Ofir Aghai';

    libraryApi.getAllBestSellersBooks().then(function(d){
        $scope.result1 = d;
    });
        
    

	$scope.function2 = function() {
		//ajax to ws
        libraryApi.getBooksByMonth('april').then(function(d){
            $scope.result2 = d;
        });
	};
	$scope.function3 = function() {
		//ajax to ws
        libraryApi.getBookById('1004').then(function(d){
            $scope.result3 = d;
        });
	};
	$scope.function4 = function() {
		//ajax to ws
        libraryApi.getBookByName('book_f').then(function(d){
            $scope.result4 = d;
        });
	};
});