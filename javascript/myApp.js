/**
 * Created by 孙颢pc on 2016/10/30.
 */

var myapp = angular.module("myapp", ["ionic"]);

// 路由配置
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tour", {
        url: "/tour",
        templateUrl: "views/tour/tour.html",
        controller: "tourCtrl"
    })
        .state("home", {
            url: "/home",
            templateUrl: "views/home/home.html"
        })
        .state("reservation", {
            url: "/reservation",
            templateUrl: "views/reservation/reservation.html",
            controller: "reservationCtrl"
        })
        .state("weather", {
            url: "/weather",
            templateUrl: "views/weather/weather.html",
            controller: "weatherCtrl"
        })
        .state("restaurants", {
            url: "/restaurants",
            templateUrl: "views/restaurants/restaurants.html",
            controller: "restaurantsCtrl"
        });

    // 默认路由
    //$urlRouterProvider.otherwise("/home");
    $urlRouterProvider.otherwise("/tour");  // 指向引导页面
});