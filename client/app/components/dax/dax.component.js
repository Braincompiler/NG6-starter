import template from './dax.html';
import controller from './dax.controller';
import './dax.styl';

let daxComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'dax',
    bindToController: true
  };
};

export default daxComponent;
