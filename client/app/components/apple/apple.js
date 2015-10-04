import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appleComponent from './apple.component';

let routerConfig     = ($stateProvider) => {
    $stateProvider
        .state('apple', {
            url:      '/apple',
            template: '<apple></apple>'
        });
};
routerConfig.$inject = ['$stateProvider'];

let appleModule = angular.module('apple', [
        uiRouter
    ])

    .config(routerConfig)

    .directive('apple', appleComponent)
    ;

export default appleModule;
