(function() {
  var app = angular.module("weasel");

  app.controller("AlbumsController", function($scope,spotify,$routeParams, $location){

      var albumsFound = function(data) {

        $scope.albumMessage = "Albums found";
        $scope.albumsReturned = data.items;

      };

      var onError = function() {

        $scope.albumMessage = "No albumFound";
      };
      
      $scope.chosenArtist = $routeParams.Artist;

      spotify.getAlbums($routeParams.id).then(albumsFound, onError);
      
      
      $scope.songs = function(id){
    
          $location.path("/Artist/Album/" + id);
    
  };

  });
  
  
      
}());