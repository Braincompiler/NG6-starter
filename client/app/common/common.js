import angular from 'angular';
import ToolbarComponent from './toolbar/toolbar';
import SidenavComponent from './sidenav/sidenav';
import ChartComponent from './chart/chart';

let commonModule = angular.module('app.common', [
    ToolbarComponent.name,
    SidenavComponent.name,
    ChartComponent.name
]);

export default commonModule;
