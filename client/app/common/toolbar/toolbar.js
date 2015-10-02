import angular from 'angular';
import toolbarComponent from './toolbar.component';

let toolbarModule = angular.module('toolbar', [])

    .directive('toolbar', toolbarComponent);

export default toolbarModule;
