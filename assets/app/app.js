var applicacion = angular.module('Prueba', ['ui.router', 'ngAnimate', 'ngResource', 'toastr'])

applicacion.config(function ($stateProvider, $urlRouterProvider) {


    //$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "Rutas/home.html",
            controller: 'HomeController'
        })
        .state('nuevousuario', {
            url: "/nuevousuario",
            templateUrl: "Rutas/nuevousuario.html",
            controller: 'NuevoUsuarioController'
        })
        .state('pastel', {
            url: "/pastel/:idUsuario",
            templateUrl: "Rutas/Pastel.html",
            controller: 'PastelController'
        })
        .state('ingrediente', {
            url: "/ingrediente",
            templateUrl: "Rutas/Ingrediente.html",
            controller: 'IngredienteController'
        })


});

//0999849845