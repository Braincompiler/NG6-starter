import TecdaxModule from './tecdax'
import TecdaxController from './tecdax.controller';
import TecdaxComponent from './tecdax.component';
import TecdaxTemplate from './tecdax.html';

describe('Tecdax', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TecdaxModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TecdaxController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TecdaxTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TecdaxComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(TecdaxTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TecdaxController);
      });
  });
});
