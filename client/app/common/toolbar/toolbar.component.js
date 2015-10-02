import template from './toolbar.html';
import controller from './toolbar.controller';
import './toolbar.styl';
import 'lodash';

let toolbarComponent = function () {
    return {
        restrict:         'E',
        scope:            {
            title: '@'
        },
                          template,
                          controller,
        controllerAs:     'toolbar',
        bindToController: true,

        /**
         *
         * @param $scope
         * @param $element
         * @param $attrs
         * @param {ToolbarController} toolbarCtrl
         */
        link: ($scope, $element, $attrs, toolbarCtrl) => {
            _.forEach(['sidenav'], (attr) => {
                if (!_.isUndefined($attrs[attr])) {
                    toolbarCtrl[attr] = $attrs[attr];
                }
            });

            _.forEach(['title'], (attr) => {
                if (!_.isUndefined($scope[attr])) {
                    toolbarCtrl[attr] = $scope[attr];
                }
            });
        }
    };
};

export default toolbarComponent;
