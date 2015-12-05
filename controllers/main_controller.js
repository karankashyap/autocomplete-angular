'use strict';

var app = angular.module('dfs', ['ngRoute', 'ngCookies']); //app initiate

app.constant('config', {
    appName: 'DFS',
    appFullName: 'Duty Free Shop',
    appVersion: 0.01,
    appState: 'Development',
    apiDomain: 'http://localhost/projects/DFS/app/'
});


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

app.service("ws", function ($location) {
    var host = $location.host();
    var sp_url = '';
    if (host == 'localhost') {
        sp_url = '/projects/';
    }
    this.airportList = 'http://' + host + sp_url + 'airportList.php?';
});

app.service("GLOBALS", function () {
    this.appVersion = '0.01';

});

