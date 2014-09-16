angular.module("sessionsApp")
    .controller("sessionCtrl", ["$scope", "sessionService", function ($scope, sessionService) {
        $scope.sessions = [];
        $scope.newSession = {};

        $scope.addSession = function () {
            var onSessionAdded = function (newSession) {
                $scope.sessions.push(newSession);
                $scope.newSession = {};
            };
            sessionService.addSession($scope.newSession,onSessionAdded);
        };
        $scope.init = function () {
            var onSessionsLoaded = function (data) {
                $scope.sessions = data;
            };

            sessionService.loadSessions(onSessionsLoaded);
        };

        $scope.init();
    }]);
