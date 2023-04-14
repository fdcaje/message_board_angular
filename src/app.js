"use strict";
import Auth from "./controllers/Auth.js";
import User from "./controllers/User.js";
import { render } from "./directives/directives.js";
import { activateBehaviorByClassname, setRequired } from "./utils.js";

const app = angular.module("App", []);

app.controller("AppController", AppController);
app.controller("Login", Login);
app.controller("Register", Register);

app.directive("applyBehavior", [
    "$timeout",
    function ($timeout) {
        const unboundRender = render.startRender;
        const boundRender = unboundRender.bind(render);
        return boundRender(() => $timeout(activateBehaviorByClassname("input", "input"), 0));

        // const def = {
        //     restrict: "A",
        //     terminal: true,
        //     tansclude: false,
        //     link: function () {
        //         $timeout(activateBehaviorByClassname("input", "input"), 0);
        //     },
        // };
        // return def;
        // return boundRender;
    },
]);

function AppController($scope) {
    // $scope.name = validate("Bro");
}

function Login($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.data = [];

    $scope.signin = () => {
        if (Auth.login($scope.username, $scope.password)) {
            $scope.data = User.getUser(Auth.getAuth());
            console.log($scope.data);
        }
    };
    
}

function Register($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.username = "";
    $scope.password = "";
    $scope.repassword = "";
    // activateBehaviorByClassname("input", "input");
}

// app root - main component
app.component("app", {
    templateUrl: "/src/app.html",
    controller: AppController,
    // transclude: true,
});

// compnents
app.component("navbar", {
    templateUrl: "/src/View/navbar.html",
});

app.component("login", {
    templateUrl: "/src/View/Forms/login.html",
    controller: Login,
});

app.component("register", {
    templateUrl: "/src/View/Forms/register.html",
    controller: Register,
});

AppController.$inject = ["$scope"];
