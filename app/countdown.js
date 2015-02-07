'use strict';

angular.module('countdown', [

])
    .controller('CountdownCtrl', ['$timeout', function($timeout) {

        var ctdn = this;
        var counting;

        ctdn.isCounting = false;
        ctdn.number = "";
        ctdn.colors = [
            {"id": 0, "color": "#EC5845" },
            {"id": 1, "color": "#EC6C45" },
            {"id": 2, "color": "#EC7F45" },
            {"id": 3, "color": "#EC8B45" },
            {"id": 4, "color": "#EC9845" },
            {"id": 5, "color": "#ECA445" },
            {"id": 6, "color": "#ECAC45" },
            {"id": 7, "color": "#ECBF45" },
            {"id": 9, "color": "#ECC545" },
            {"id": 10, "color": "#ECD345" },
            {"id": 11, "color": "#ECE145" },
            {"id": 12, "color": "#E6EC45" },
            {"id": 13, "color": "#DBEC45" },
            {"id": 14, "color": "#D0EC45" },
            {"id": 15, "color": "#C2EC45" },
            {"id": 16, "color": "#B7EC45" },
            {"id": 17, "color": "#A9EC45" },
            {"id": 18, "color": "#9BEC45" },
            {"id": 19, "color": "#88EC45" },
            {"id": 20, "color": "#6FEC45" }
        ];

        ctdn.returnColor = function(number) {
            ctdn.color = ctdn.colors[number-1].color;
            console.log(ctdn.color);
        };

        ctdn.countDown = function(){
            ctdn.returnColor(ctdn.number);
            counting = $timeout(function(){
                ctdn.number--;
                if (ctdn.number > 0) {
                    ctdn.countDown();
                } else {
                    ctdn.stopCounting();
                }
            }, 1000);
            ctdn.isCounting = true;
        };

        ctdn.stopCounting = function(){
            $timeout.cancel(counting);
            ctdn.number = "";
            ctdn.isCounting = false;
        };

    }])

    .directive('limit', [function (){
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {

                var valid = false;
                var limit = parseInt(attr.limit);

                var testValidity = function(valid) {
                    var isValid = valid;
                };

                // DOM to model validation
                ngModel.$parsers.unshift(function(value) {
                    var valid = value <= limit && value > 0;
                    ngModel.$setValidity('limit', valid);
                    testValidity(valid);
                    return value;
                });

                // model to DOM validation
                ngModel.$formatters.unshift(function(value) {
                    ngModel.$setValidity('limit', value <= limit && value > 0);
                    testValidity(valid);
                    return value;
                });
            }
        };
    }])
;