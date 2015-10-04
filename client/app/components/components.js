import angular from 'angular';
import Home from './home/home';
import Dax from './dax/dax';
import Tecdax from './tecdax/tecdax';
import VW from './vw/vw';
import Apple from './apple/apple';

let componentModule = angular.module('app.components', [
    Home.name,
    Dax.name,
    Tecdax.name,
    VW.name,
    Apple.name
]);

export default componentModule;
