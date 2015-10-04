import template from './vw.html';
import controller from './vw.controller';
import './vw.styl';

let vwComponent = ()  => {
    return {
        restrict:         'E',
        scope:            {},
                          template,
                          controller,
        controllerAs:     'vw',
        bindToController: true
    };
};

export default vwComponent;
