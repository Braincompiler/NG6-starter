import angular from 'angular';
import uiRouter from 'angular-ui-router';
import vwComponent from './vw.component';

let routerConfig     = ($stateProvider) => {
    $stateProvider
        .state('vw', {
            url:      '/vw',
            template: '<vw></vw>'
        });
};
routerConfig.$inject = ['$stateProvider'];

let vwModule = angular.module('vw', [
        uiRouter
    ])

    .config(routerConfig)

    .directive('vw', vwComponent)
    ;

export default vwModule;
