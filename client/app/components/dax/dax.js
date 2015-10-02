import angular from 'angular';
import uiRouter from 'angular-ui-router';
import daxComponent from './dax.component';

let daxModule = angular.module('dax', [
  uiRouter
])

.directive('dax', daxComponent);

export default daxModule;
