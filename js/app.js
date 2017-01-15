
var app = angular.module("myApp", []);
app.controller("mainController", function($scope){
    $scope.bookStoreName = "KaeBook";
    $scope.dateNow = new Date();
    $scope.books = [
    {
        name: 'AngularJs',
        price: 899,
        description: 'angular js basic',
        canPurchase: true
    },
    {
        name: 'Robot framework',
        price: 599,
        description: 'automate test using robot framework',
        canPurchase: true
    }];
});





