var myApp = angular.module("myApp", ['ngRoute']);
myApp.service("mainService", function($http){
    this.getBooks = function(){
        return $http.get("http://172.17.12.247:8080/api/getBooks");
    };
});
myApp.config(function($routeProvider){
    $routeProvider.when("/viewBook",{
        templateUrl: "view.html"
    }).when("/home", {
        templateUrl: "home.html"
    }).when("/addBook", {
        templateUrl: "add.html"
    });
});
myApp.controller("mainController", function($scope, $location, mainService){
    $scope.myName = "kae";
    $scope.isShow = true;
    $scope.toDay = new Date();
    $scope.getBooks = function(){
        mainService.getBooks()
            .then(function(response){
                $scope.books = response.data.Result;
            });
    };
    $scope.saveBook = function(data){
        $scope.books.push(data);
        $location.path("/viewBook");
    };
    // $scope.books = [{
    //     name: "AngularJS",
    //     price: 299,
    //     description: "Angular JS Basic",
    //     stock: false
    // },{
    //     name: "Golang",
    //     price: 499,
    //     description: "Golang basic",
    //     stock: true
    // }];
});