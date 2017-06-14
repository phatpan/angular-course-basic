
angular.module("myApp", ['ngRoute'])
    .service("mainServer", function($http){
        this.getBooks = function(){
            return $http.get("http://localhost:8080/api/getBooks");
        };
    })
    .config(function($routeProvider){
        $routeProvider.when("/viewBook", {
            templateUrl: "view.html"
        }).when("/addBook", {
            templateUrl: "addBook.html"
        }).when("/home", {
            templateUrl: "home.htm"
        }).otherwise({
            redirectTo: "/home"
        });
    })
    .controller("mainController", function($scope, $location, mainServer){
        $scope.myName = "Kae";
        $scope.isShow = true;
        $scope.toDay = new Date();
        $scope.isShowMenu = true;
        $scope.saveBook = function(data){
            mainServer.getBooks().then(function(data){
                console.log(data);
            });
            $scope.books.push(data);
            $location.path("/viewBook");
            $scope.data = [];
        };
        $scope.books = [
        {
            name: 'AngularJs',
            price: 899,
            description: 'angular js basic'
        },
        {
            name: 'Robot framework',
            price: 599,
            description: 'automate test using robot framework'
        }];
    });
