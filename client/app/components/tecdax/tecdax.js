import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tecdaxComponent from './tecdax.component';

let routerConfig     = ($stateProvider) => {
    $stateProvider
        .state('tecdax', {
            url:      '/tecdax',
            template: '<tecdax></tecdax>'
        });
};
routerConfig.$inject = ['$stateProvider'];

let tecdaxModule = angular.module('tecdax', [
        uiRouter
    ])

    .config(routerConfig)

    .directive('tecdax', tecdaxComponent);

export default tecdaxModule;
