// Code goes here
(function () {
  var app = angular.module("weasel");
  
  var SearchController = function($scope, $http,$location, spotify, artistService){
    $scope.message = "Search The Weasel to find an Artist or a Band";
     
   var artistsFound = function (data) {
     
      artistService.name = data.artists.items;
      $location.path("/Artist/");
  };
  
  var onError = function () {
    $scope.Artistmessage = "No artist found";
  };
  
  
  $scope.search = function(){
    spotify.getArtists($scope.artist).then(artistsFound, onError);
    
    
  };
  
  
  $scope.Artistmessage = "";
  $scope.artist = "bloc party";
  };
  
  
  
  
  
   app.controller("SearchController",SearchController);
}());
