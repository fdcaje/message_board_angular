"use strict"
import {validate} from './controllers/Auth.js'
const app = angular.module('App', [])

app.controller("AppController", AppController)
app.controller('Auth', Auth)

function AppController($scope){
    $scope.name = validate("Bro")
}

function Auth($scope){
    $scope.username = "username"
    $scope.password = "password"
}

// app root - main component
app.component('app', {
    templateUrl: "/src/app.html",
    controller: AppController
    // transclude: true,
})

// compnents
app.component('navbar', {
    templateUrl: "/src/View/navbar.html",
})

app.component('authForm', {
    templateUrl: "/src/View/auth_form.html",
    controller: Auth
})

AppController.$inject = ['$scope']
