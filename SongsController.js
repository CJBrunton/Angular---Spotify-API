(function() {
  var app = angular.module("weasel");

  var SongsController = function($scope, spotify, $routeParams, $http) {

    var songsFound = function(data) {

      $scope.songsReturned = data.tracks.items;
    };

    var onError = function() {
      alert("no songs");
    };


    var songsPlaid = function(data) {
      $scope.playing; 
      $scope.paused;
      data.preview_url;
      $scope.audio = document.createElement('audio');
      $scope.audio.src = data.preview_url;
      $scope.audio.play();
    };

    var songsPaused = function(data){
      $scope.audio.pause();
    };

    $scope.playSong = function(id) {

      spotify.playSongs(id).then(songsPlaid, onError);


    };
    
    
     $scope.pauseSong = function(id) {

      spotify.pauseSongs(id).then(songsPaused, onError);


    };

    spotify.getSongs($routeParams.songid).then(songsFound, onError);

  };
  app.controller("SongsController", SongsController);
}());