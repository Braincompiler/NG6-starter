import template from './tecdax.html';
import controller from './tecdax.controller';
import './tecdax.styl';

let tecdaxComponent = function () {
    return {
        restrict:         'E',
        scope:            {},
                          template,
                          controller,
        controllerAs:     'tecdax',
        bindToController: true
    };
};

export default tecdaxComponent;
