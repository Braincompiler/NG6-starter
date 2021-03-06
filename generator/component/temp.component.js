import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

let <%= name %>Component = ()  =>{
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: '<%= name %>',
    bindToController: true
  };
};

export default <%= name %>Component;
