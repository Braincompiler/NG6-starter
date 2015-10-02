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
let themingConfig     = ($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('orange');
};
themingConfig.$inject = ['$mdThemingProvider'];

angular.module('app', [
        ngRouter,
        ngMaterial,
        Common.name,
        Components.name
    ])

    .config(themingConfig)

    .directive('app', AppComponent)

;
