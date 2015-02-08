'use strict';

angular.module('twDataRobotTakeHome', [

])
    .directive('countdown', function() {
        return {
            templateUrl: "views/countdown.html",
            controller: function ($scope, $timeout) {

                var counting;

                $scope.blue = "blue";

                $scope.isCounting = false;
                $scope.number = "";
                $scope.colors = [
                    {"id": 0, "color": "#EC5845"},
                    {"id": 1, "color": "#EC6C45"},
                    {"id": 2, "color": "#EC7F45"},
                    {"id": 3, "color": "#EC8B45"},
                    {"id": 4, "color": "#EC9845"},
                    {"id": 5, "color": "#ECA445"},
                    {"id": 6, "color": "#ECAC45"},
                    {"id": 7, "color": "#ECBF45"},
                    {"id": 9, "color": "#ECC545"},
                    {"id": 10, "color": "#ECD345"},
                    {"id": 11, "color": "#ECE145"},
                    {"id": 12, "color": "#E6EC45"},
                    {"id": 13, "color": "#DBEC45"},
                    {"id": 14, "color": "#D0EC45"},
                    {"id": 15, "color": "#C2EC45"},
                    {"id": 16, "color": "#B7EC45"},
                    {"id": 17, "color": "#A9EC45"},
                    {"id": 18, "color": "#9BEC45"},
                    {"id": 19, "color": "#88EC45"},
                    {"id": 20, "color": "#6FEC45"}
                ];

                $scope.returnColor = function(number) {
                    $scope.returnedNumber = number;
                    $scope.color = $scope.colors[number - 1].color;
                };

                $scope.countDown = function () {
                    if ($scope.number <= 20) {
                        $scope.returnColor($scope.number);
                        counting = $timeout(function() {
                            $scope.number--;
                            if ($scope.number > 0) {
                                $scope.countDown();
                            } else {
                                $scope.stopCounting();
                            }
                        }, 1000);
                        $scope.isCounting = true;
                    }
                };

                $scope.stopCounting = function() {
                    $timeout.cancel(counting);
                    $scope.number = "";
                    $scope.isCounting = false;
                };
            }
        };
    })

    .directive('limit', function(){
        return {
            require: 'ngModel',
            link: function($scope, elem, attr, ngModel) {

                var limit = parseInt(attr.limit);

                // DOM to model validation
                ngModel.$parsers.unshift(function(value) {
                    $scope.isValid = value <= limit && value > 0;
                    ngModel.$setValidity('limit', $scope.isValid);
                    return value;
                });

                // model to DOM validation
                ngModel.$formatters.unshift(function(value) {
                    ngModel.$setValidity('limit', value <= limit && value > 0);
                    return value;
                });
            }
        };
    })
;