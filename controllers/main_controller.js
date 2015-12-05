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
        sp_url = '/projects/DFS/services/services/';
    } else {

        host = 'socialcampaign.co.in/';
        sp_url = '/apps/DFS_server/services/';
    }
    this.checkUser = 'http://' + host + sp_url + 'checkuser.php?';
    this.otpUrl = 'http://' + host + sp_url + 'otp.php?';
    this.registerUser = 'http://' + host + sp_url + 'postuser.php?';
    this.addFlight = 'http://' + host + sp_url + 'addFlight.php?';
    this.airportList = 'http://' + host + sp_url + 'airportList.php?';
    this.countActions = 'http://' + host + sp_url + 'countActions.php?';
    this.confeeUrl = 'http://' + host + sp_url + 'transaction.php?';
    this.listingUrl = 'http://' + host + sp_url + 'listing.php?';
    this.showUser = 'http://' + host + sp_url + 'showUser.php?';
    this.getTransactionUrl = 'http://' + host + sp_url + 'getTransaction.php?';
    this.transOffer = 'http://' + host + sp_url + 'transOffer.php?';
    this.getProducts = 'http://' + host + sp_url + 'getProducts.php?';
    this.closeTransaction = 'http://' + host + sp_url + 'closeTransaction.php?';
    this.testUrl = 'adadasd.php';
});

app.service("GLOBALS", function () {
    this.appVersion = '0.01';
    this.prodId = '2'; //fix this, should be coming from DB

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
        //return window.AndroidFunction.getUserId();
    };

    this.getUserName = function () {
        return 'Karan';
        //return window.AndroidFunction.getUserName();
    };

    this.getUserMobile = function () {
        return '7503818158';
        //return window.AndroidFunction.getUserMobile();
    };

    this.getDeviceId = function () {
        return 'SM-9005';
        //return window.AndroidFunction.getDeviceId();
    };

    this.getUserToken = function () {
        return '6f639c0e4d728e88b61039ff763b3029';
        //return window.AndroidFunction.getUserToken();
    };

    this.getUserEmail = function () {
        return 'karan@email.com';
        //return window.AndroidFunction.getUserEmail();
    };

    this.getUserPic = function () {
        return 'karan.jpg';
        //return window.AndroidFunction.getUserPic();
    };


    ///////////////////////////////
    //           Set            //
    ///////////////////////////////

    this.setUserId = function (user_id) {
        //return window.AndroidFunction.setUserId(user_id);
    };

    this.setUserName = function (user_name) {
        //return window.AndroidFunction.setUserName(user_name);
    };

    this.setUserMobile = function (user_mbl) {
        //return window.AndroidFunction.setUserMobile(user_mbl);
    };

    this.setDeviceId = function () {
        //return window.AndroidFunction.getDeviceId();
    };

    this.setUserToken = function (token) {
        //return window.AndroidFunction.setUserToken(token);
    };

    this.setUserEmail = function (email) {
        //return window.AndroidFunction.setUserEmail(email);
    };

    this.setUserPic = function (pic) {
        //return window.AndroidFunction.setUserPic(pic);
    };

    this.logMessage = function (msg) {
        console.log(msg);
    };

    this.alertShow = function (alertMsg) {
        alert(alertMsg);
    };

});