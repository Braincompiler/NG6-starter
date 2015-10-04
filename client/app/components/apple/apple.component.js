import template from './apple.html';
import controller from './apple.controller';
import './apple.styl';

let appleComponent = ()  => {
    return {
        restrict:         'E',
        scope:            {},
                          template,
                          controller,
        controllerAs:     'apple',
        bindToController: true
    };
};

export default appleComponent;
