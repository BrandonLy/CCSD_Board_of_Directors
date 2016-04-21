angular.module('CCSD_Board')

.directive('menu', function() {
    return {
        templateUrl: '../templates/menu.html',
        controller: 'mainCtrl'
    };

});

console.log('menu.js was loaded');

