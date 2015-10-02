import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tecdaxComponent from './tecdax.component';

let tecdaxModule = angular.module('tecdax', [
  uiRouter
])

.directive('tecdax', tecdaxComponent);

export default tecdaxModule;
