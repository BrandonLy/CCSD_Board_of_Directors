
console.log('main.js loaded');

angular.module('CCSD_Board')

.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log('helloWorld');
    };
});
