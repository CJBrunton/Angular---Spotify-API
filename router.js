(function() {

  var app = angular.module("weasel", ["ngRoute"])

  app.config(function($routeProvider) { // can put our routing code in here routeProvidcer made availbale through ngRoute dependency

    $routeProvider
    .when("/Artist",{
        templateUrl: "Artist.html" ,
        controller: "ArtistController"
    })
    .when("/:Artist/:id",{
      templateUrl:"Albums.html",
      controller:"AlbumsController"
    })
    .when("/Artist/Album/:songid",{
      templateUrl: "Songs.html", 
      controller:"SongsController"
    })
    .otherwise({redirectTo:"/index"});


  });

}());
