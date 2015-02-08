'use strict';

// SPECS

describe('twDataRobotTakeHome', function () {
    var scope;
    var elem;
    var dscope;
    beforeEach(function () {
        module('twDataRobotTakeHome');
    });

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        elem = angular.element("<div countdown></div>");
        $compile(elem)(scope);
        dscope = elem.isolateScope();
    }));

    describe('returnColor', function () {
        it('returns the color', function () {
            expect(dscope.blue).toEqual("blue");
        });
    });

});

// RUNNER

(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();