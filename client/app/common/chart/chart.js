import angular from 'angular';
import chartComponent from './chart.component';

// impl taken from: http://www.ng-newsletter.com/posts/d3-on-angular.html
let d3ServiceFactory     = ($document, $q, $rootScope) => {
    let d = $q.defer();

    function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(() => { d.resolve(window.d3); });
    }

    // Create a script tag with d3 as the source
    // and call our onScriptLoad callback when it
    // has been loaded
    let scriptTag                = $document[0].createElement('script');
    scriptTag.type               = 'text/javascript';
    scriptTag.async              = true;
    scriptTag.src                = 'http://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
    scriptTag.onreadystatechange = () => {
        if (this.readyState == 'complete') {
            onScriptLoad();
        }
    };
    scriptTag.onload             = onScriptLoad;

    let s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return {
        d3: () => { return d.promise; }
    };
};
d3ServiceFactory.$inject = ['$document', '$q', '$rootScope'];

// @TODO merge with d3Factory and $q.all
let techanServiceFactory     = ($document, $q, $rootScope) => {
    let d = $q.defer();

    function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(() => { d.resolve(window.techan); });
    }

    let scriptTag                = $document[0].createElement('script');
    scriptTag.type               = 'text/javascript';
    scriptTag.async              = true;
    scriptTag.src                = 'http://techanjs.org/techan.min.js';
    scriptTag.onreadystatechange = () => {
        if (this.readyState == 'complete') {
            onScriptLoad();
        }
    };
    scriptTag.onload             = onScriptLoad;

    let s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return {
        techan: () => { return d.promise; }
    };
};
techanServiceFactory.$inject = ['$document', '$q', '$rootScope'];

let chartModule = angular.module('chart', [])

    .directive('chart', chartComponent)

    .factory('d3Service', d3ServiceFactory)
    .factory('techanService', techanServiceFactory)

    ;

export default chartModule;
