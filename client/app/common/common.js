import angular from 'angular';
import ToolbarComponent from './toolbar/toolbar';
import SidenavComponent from './sidenav/sidenav';

let commonModule = angular.module('app.common', [
    ToolbarComponent.name,
    SidenavComponent.name
]);

export default commonModule;
