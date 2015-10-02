import template from './sidenav.html';
import controller from './sidenav.controller';
import './sidenav.styl';

let sidenavComponent = function () {
    return {
        restrict:         'E',
                          template,
                          controller,
        controllerAs:     'sidenav',
        bindToController: true,
        replace:          true // md-sidenav needs to be located directly under the element with the "flex"-attribute
    };
};

export default sidenavComponent;
