/*
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

HOULIHANS RESTAURANT AND BAR ---

Project Description: Houlihan's website partial re-design
Objective: Transform part of the site into a single page application
Technology: jQuery, AngularJS, Google Maps API
Version Control: GIT, available on Github

THIS PROJECT NOT ENDORSED, APPROVED, OR IN ANY WAY ASSOCIATED
WITH HOULIHAN'S RESTAURANT - IT IS A PERSONAL EDUCATION PROJECT


Written by Kevin Fischer as a personal portfolio project

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
*/

// Setup hamburger-menu functionality
$(".hamburger-closed").click(function(){
  // When the menu button is clicked, change the icon and show the menu
  $(".hamburger-closed").hide();
  $(".hamburger-open").show();
  $(".small-menu").show();
});

$(".hamburger-open").click(function(){
  // When the menu button is clicked, change the icon and hide the menu
  $(".hamburger-open").hide();
  $(".hamburger-closed").show();
  $(".small-menu").hide();
});

function hideMenu() {
  $(".hamburger-open").hide();
  $(".hamburger-closed").show();
  $(".small-menu").hide();
}

// This variable will hold the features array, if it exists
var featuresArray = "";

/* -----SETUP ANGULAR MODULE----- */

// Initialize the module with dependency ngRoute
var appModule = angular.module('application', ['ngRoute']);

// Configure appModule to be okay with outside url activity
appModule.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self'
  ]);
});


/*  -----SETUP ANGULAR FACTORY dataFactory----- */

// Initialize the factory
appModule.factory('dataFactory', ['$http',
  function($http) {

    // init the factory object to be returned
    var dataFactory = {};

    var currentLocation = {
      "city" : "Chanhassen",
      "street" : "530 Pond Promenade",
      "state" : "Minnesota",
      "stateAb" : "MN",
      "zip" : "55317",
      "phone" : "(952) 974-3939",
      "hours" : [
        {"days" : "Sun - Mon", "times" : "11am - 11pm"},
        {"days" : "Tues - Thurs", "times" : "11am - Midnight"},
        {"days" : "Fri - Sat", "times" : "11am - 1am"}
      ],
      "url" : "//www.google.com/maps/embed/v1/place?q=Houlihans,Chanhassen,MN%2055317&zoom=17&key=YOUR_API_KEY"
    }


    var currentCity = "Chanhassen";

    var locations =
    {
      "locations" : [
        {
          "state" : "Arkansas",
          "addresses" : [
            {"city" : "Rogers",
            "street" : "2203 Promenade Blvd.\nSte 15100",
            "state" : "Arkansas",
            "stateAb" : "AK",
            "zip" : "72758",
            "phone" : "(479) 246-0296",
            "hours" : [ {"days" : "Sun - Thurs", "times" : "11am - 10pm"},
                        {"days" : "Fri - Sat", "times" : "11am - 11pm"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=Houlihans,Rogers,AR%2072758&zoom=17&key=YOUR_API_KEY"
            }
          ]
        },
        {
          "state" : "California",
          "addresses" : [
            {"city" : "South San Francisco",
            "street" : "275 S. Airport Blvd.",
            "state" : "California",
            "stateAb" : "CA",
            "zip" : "94080",
            "phone" : "(650) 588-2265",
            "hours" : [ {"days" : "SUN - MON", "times" : "11am - 11pm"},
                        {"days" : "TUES - THURS", "times" : "11am - Midnight"},
                        {"days" : "FRI - SAT", "times" : "11am - 1am"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=Houlihans,South%20San%20Francisco,CA%2094080&zoom=17&key=YOUR_API_KEY"
            }
          ]
        },
        {
          "state" : "Georgia",
          "addresses" : [
            {"city" : "Columbus Doubletree",
            "street" : "5351 Sidney Simons Blvd",
            "state" : "Georgia",
            "stateAb" : "GA",
            "zip" : "31904",
            "phone" : "(706) 243-0551",
            "hours" : [ {"days" : "Mon - Sun", "times" : "6am - 11pm"},
                        {"days" : "Breakfast", "times" : "until 11am"},
                        {"days" : "Fri - Sat", "times" : "Bar til 12am"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=5351%20Sidney%20Simons%20Blvd%20DoubleTree%20Hotel%20Columbus,GA%2031904&zoom=17&key=YOUR_API_KEY"
            },
            {"city" : "Columbus Marriott",
            "street" : "800 Front Ave",
            "state" : "Georgia",
            "stateAb" : "GA",
            "zip" : "31901",
            "phone" : "(706) 324-1800",
            "hours" : [ {"days" : "Mon - Sun", "times" : "6am - 11pm"},
                        {"days" : "Breakfast", "times" : "until 11am"},
                        {"days" : "Fri - Sat", "times" : "Bar til 12am"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=800%20Front%20Ave%20Columbus,GA%2031904&zoom=17&key=YOUR_API_KEY"
            },
            {"city" : "Savannah",
            "street" : "17029 Abercorn Street",
            "state" : "Georgia",
            "stateAb" : "GA",
            "zip" : "31419",
            "phone" : "(912) 921-5712",
            "hours" : [ {"days" : "Sun - Thur", "times" : "11am - 10pm"},
                        {"days" : "Fri - Sat", "times" : "11am - 11pm"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=17029%20Abercorn%20Street%20Savannah,GA%2031419&zoom=17&key=YOUR_API_KEY"
            }
          ]
        },
        {
          "state" : "Iowa",
          "addresses" : [
            {"city" : "Dubuque",
            "street" : "1801 Greyhound Park Drive",
            "state" : "Iowa",
            "stateAb" : "IA",
            "zip" : "52001-2381",
            "phone" : "(563) 585-5233",
            "hours" : [ {"days" : "Sun - Thur", "times" : "11am - 10pm"},
                        {"days" : "Fri - Sat", "times" : "11am - 11pm"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=1801%20Greyhound%20Park%20Drive%20Dubuque,IA%2052001&zoom=17&key=YOUR_API_KEY"
            }
          ]
        },
        {
          "state" : "Minnesota",
          "addresses" : [
            {"city" : "Chanhassen",
            "street" : "530 Pond Promenade",
            "state" : "Minnesota",
            "stateAb" : "MN",
            "zip" : "55317",
            "phone" : "(952) 974-3939",
            "hours" : [ {"days" : "Sun - Mon", "times" : "11am - 11pm"},
                        {"days" : "Tues - Thurs", "times" : "11am - Midnight"},
                        {"days" : "Fri - Sat", "times" : "11am - 1am"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=Houlihans,Chanhassen,MN%2055317&zoom=17&key=YOUR_API_KEY"
            },
            {"city" : "Eagan",
            "street" : "1294 Promenade Pl",
            "state" : "Minnesota",
            "stateAb" : "MN",
            "zip" : "55121",
            "phone" : "(651) 452-1001",
            "hours" : [ {"days" : "Sun - Mon", "times" : "11am - 11pm"},
                        {"days" : "Tues - Thurs", "times" : "11am - Midnight"},
                        {"days" : "Fri - Sat", "times" : "11am - 1am"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=Houlihans,Eagan,MN%2055121&zoom=17&key=YOUR_API_KEY"
            },
            {"city" : "Richfield",
            "street" : "6601 Lyndale Ave S",
            "state" : "Minnesota",
            "stateAb" : "MN",
            "zip" : "55423",
            "phone" : "(612) 243-9150",
            "hours" : [ {"days" : "Sun - Mon", "times" : "11am - 11pm"},
                        {"days" : "Tues - Thurs", "times" : "11am - Midnight"},
                        {"days" : "Fri - Sat", "times" : "11am - 1am"} ],
            "url" : "//www.google.com/maps/embed/v1/place?q=Houlihans,Richfield,MN%2055423&zoom=17&key=YOUR_API_KEY"
            }
          ]
        }
      ]
    }

    dataFactory.getLocations = function() {
      return locations.locations;
    }

    dataFactory.getCurrentCity = function() {
      return currentLocation;
    }

    dataFactory.getCurrentLocation = function() {
      return currentLocation;
    }

    dataFactory.getUrl = function() {
      return currentLocation.url;
    }

    dataFactory.getHours = function() {
      return currentLocation.hours;
    }

    dataFactory.setCurrentCity = function(parentIndex, index) {
      console.log('Parent index is ' + parentIndex + " and index is " + index);
      currentLocation = locations.locations[parentIndex].addresses[index];
      console.log('Current Location ' + currentLocation.city);
    }


    // Finally, return the factory object
    return dataFactory;
  }
]);


/* -----SETUP ANGULAR CONTROLLERS----- */

// Initialize the home controller
appModule.controller('HomeController', ['$scope', '$location', 'dataFactory',
  function($scope, $location, dataFactory) {

    $scope.goToStore = function() {
      window.location =  "#/store";
    };

    $scope.locations = dataFactory.getLocations();

    $scope.setCurrentCity = function(parentIndex, index) {
      dataFactory.setCurrentCity(parentIndex, index);
    }

  }
]);

// Initialize the store controller
appModule.controller('StoreController', ['$scope', '$sce', 'dataFactory',
  function($scope, $sce, dataFactory) {

    $scope.currentLocation = dataFactory.getCurrentLocation();

    $scope.hours = dataFactory.getHours();

    $scope.url = $sce.trustAsResourceUrl(dataFactory.getUrl());

  }
]);


/*  -----SETUP ANGULAR ROUTING----- */

// Configure the routes available to the module
appModule.config(function($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/", { // Home page
    controller: 'HomeController',
    templateUrl: 'partials/home.html'
  })
  .when("/store/", { // Store information page
    controller: 'StoreController',
    templateUrl: 'partials/store.html'
  })
  .when("/change-location", { // change store
    controller: 'HomeController',
    templateUrl: 'partials/change-location.html'
  })
  .otherwise({redirectTo: "/"});
})
