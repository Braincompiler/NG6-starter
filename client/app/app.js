import angular from 'angular';
import ngRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

/**
 * @param {$mdTheming} $mdThemingProvider
 */
let theamingConfig = ($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('orange');
};
theamingConfig.$inject = ['$mdThemingProvider'];

angular.module('app', [
        ngRouter,
        ngMaterial,
        Common.name,
        Components.name
    ])

    .config(theamingConfig)

    .directive('app', AppComponent)

;
