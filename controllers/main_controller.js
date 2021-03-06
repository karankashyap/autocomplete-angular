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

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                DroidNgNG                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
app.service('DroidNg', function () {

    ///////////////////////////////
    //           Get            //
    ///////////////////////////////

    this.getUserId = function () {
        return '1';
    };

    this.getUserName = function () {
        return 'Karan';
    };

    this.getUserMobile = function () {
        return '9999999999';
    };

    this.getDeviceId = function () {
        return 'SM-9005';
    };

    this.getUserToken = function () {
        return '89869as6df9a689sdf6asd9a86';
    };

    this.getUserEmail = function () {
        return 'karan@email.com';
    };

    this.getUserPic = function () {
        return 'karan.jpg';
    };


    ///////////////////////////////
    //           Set            //
    ///////////////////////////////

    this.setUserId = function (user_id) {
    };

    this.setUserName = function (user_name) {
    };

    this.setUserMobile = function (user_mbl) {
    };

    this.setDeviceId = function () {
    };

    this.setUserToken = function (token) {
    };

    this.setUserEmail = function (email) {
    };

    this.setUserPic = function (pic) {
    };

    this.logMessage = function (msg) {
        console.log(msg);
    };

    this.alertShow = function (alertMsg) {
        alert(alertMsg);
    };

});