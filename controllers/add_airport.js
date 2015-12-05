app.controller('airport', ['$scope', '$http', 'ws', 'GLOBALS', '$document', 'DroidNg',
    function ($scope, $http, ws, GLOBALS, $document, DroidNg) {
        $scope.airportDiv = false;
        $scope.submitButtonState = false;
        $scope.flightErrMsg = '';
        $scope.airportErrMsg = '';
        $scope.dateErrMsg = '';
        $scope.errorMsgClass1 = $scope.errorMsgClass2 = $scope.errorMsgClass3 = 'valErrColor';

        var userExists = DroidNg.getUserId();


        $scope.showAirport = function () {
            $scope.airportState = true;
            $scope.airport = '';

        };


        $scope.searchAirport = function () {
            var query = $scope.search;
            var airportList = ws.airportList;
            airportList += 'query=' + query;
            var queryLen = ('' + $scope.search).length;
            $scope.processing = true;
            if (queryLen == 0) {
                $scope.listAirport = $scope.listCity = $scope.listCountry = $scope.listCode = '';
            }
            if (queryLen > 2) {
                $http.get(airportList).success(function (airport) {
                    DroidNg.logMessage(angular.fromJson(airport));
                    $scope.processing = false;
                    if (airport.response == false) {
                        $scope.showSearchError = 'Nothing was found';
                        $scope.showAirportList = false;
                    } else {
                        var len = airport.data.length;
                        $scope.airport = airport.data;
                        $scope.comma = ', ';
                        $scope.showAirportList = true;

                    }

                });
            }
        };


        $scope.cancel = function () {
            window.location.replace('post_view.html');
        };


        $scope.backToDefault = function () {
            $scope.airportState = false;
            $scope.airport = '';
        };


        $scope.airportSelect = function (airportCode) {
            $scope.airportState = false;
            $scope.airport = airportCode;
        };

        $scope.validate = function () {
            var flight = $scope.flight;
            var airport = $scope.airport;
            var arrTime = $("#arrTime").val();

            DroidNg.logMessage(arrTime);

        };

        $scope.flightAdd = function () {
            var flight = $scope.flight;
            var airport = $scope.airport;
            var arrTime = $("#arrTime").val();
            var addFlightUrl = ws.addFlight;
            addFlightUrl += 'flight=' + flight + '&arrival_airport=' + airport + '&arrival_time=' + arrTime;
            addFlightUrl += '&user_id=' + DroidNg.getUserId();
            addFlightUrl += '&token=' + DroidNg.getUserToken();
            $http.get(addFlightUrl).success(function (flight) {
                DroidNg.logMessage(addFlightUrl);
                DroidNg.logMessage(flight);
                $scope.submitButtonState = true;
                window.location.replace('post_view.html');
            });

        };

        $scope.submitFlight = function () {
            window.location.replace('post_view.html');

        };


        $scope.showSimpleToast = function (data) {
            $mdToast.show(
                $mdToast.simple()
                    .content(data)
            );
        };


    }]);


