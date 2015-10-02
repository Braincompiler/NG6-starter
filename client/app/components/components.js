import angular from 'angular';
import Home from './home/home';
import Dax from './dax/dax';
import Tecdax from './tecdax/tecdax';

let componentModule = angular.module('app.components', [
    Home.name,
    Dax.name,
    Tecdax.name
]);

export default componentModule;
