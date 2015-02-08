describe('twDataRobotTakeHome', function () {
    var scope;
    var elem;
    var dscope;
    beforeEach(function () {
        module('twDataRobotTakeHome');
    });

    beforeEach(inject(function($templateCache) {
        var directiveTemplate = null;
        var req = new XMLHttpRequest();
        req.onload = function() {
            directiveTemplate = this.responseText;
        };
        req.open("get", "/app/views/countdown.html", false);
        req.send();
        $templateCache.put("views/countdown.html", directiveTemplate);
    }));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        elem = "<div countdown></div>";
        elem = $compile(elem)(scope);
        scope.$digest();
    }));

    describe('countDown', function() {
        it('will count down', function() {
            dscope = elem.scope();
            expect(dscope.returnedNumber).toEqual(dscope.colors.id);
        });
    });

    describe('stopCounting', function() {
        it('will stop counting', function() {
            dscope = elem.scope();
            expect(dscope.isCounting).toEqual(false);
        });
    });

    describe('returnColor', function() {
        it('will return the matching color', function () {
            dscope = elem.scope();
            expect(dscope.color).toEqual(dscope.colors.color);
        });
    });
});