import angular from 'angular';
import uiRouter from 'angular-ui-router';
import daxComponent from './dax.component';

let routerConfig     = ($stateProvider) => {
    $stateProvider
        .state('dax', {
            url:      '/dax',
            template: '<dax></dax>'
        });
};
routerConfig.$inject = ['$stateProvider'];

let daxModule = angular.module('dax', [
        uiRouter
    ])

    .config(routerConfig)

    .directive('dax', daxComponent);

export default daxModule;
