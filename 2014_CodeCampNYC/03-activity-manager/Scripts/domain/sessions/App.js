angular.module("sessionsApp", [])
.directive('nycSession', function() {
    return {
        restrict: 'E',
        scope: {
            sessionInfo: '=info'
        },
        templateUrl: '../content/templates/session.html'
    };
})
.directive('nycAddSession', function () {
    return {
        restrict: 'E',
        templateUrl: '../content/templates/addsession.html'
    };
});