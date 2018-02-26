(function() {

  var app = angular.module("weasel");

  var ArtistController = function($scope, $http, $location, spotify, artistService) {

    $scope.getAlbum = function(id, artist) {
      $location.path("/" + artist + "/" + id);
    };

    $scope.artistsReturned = artistService.name;
  };
  app.controller("ArtistController", ArtistController);

}());