angular.module("sessionsApp")
    .factory("sessionService", ['$http', function ($http) {
        return {
            'loadSessions': function (onSessionsLoaded) {

                $http.get("/api/sessions")
                .success(function (data) {
                    if (onSessionsLoaded != null) {
                        onSessionsLoaded(data);
                    }
                });
            },
            'addSession': function (session, onSessionAdded) {
                $http.post("/api/sessions", session)
                .success(function (data) {
                    if (onSessionAdded != null) {
                        onSessionAdded(data);
                    }
                });
        }
        };
    }
    ]);