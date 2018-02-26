(function(){
  var spotify = function($http){
  
  
  var getArtists = function(artist){
  return $http.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist")
  .then(function(response){ return  response.data });
  };
  
   
  
  var getAlbums = function(id){
    
   return  $http.get("https://api.spotify.com/v1/artists/" + id + "/albums?market=GB")
   .then(function(response){ return  response.data });
  };
  
  
  var getSongs = function(id){
    return $http.get("https://api.spotify.com/v1/albums/" + id)
    .then(function(response){return response.data});
  };
  
  
  var playSongs = function(id){
    return $http.get("https://api.spotify.com/v1/tracks/" + id)
    .then(function(response){return response.data});
  };
  
  var pauseSongs = function(id){
    return $http.get("https://api.spotify.com/v1/tracks/" + id)
    .then(function(response){return response.data});
  };
  
  return{
    getArtists:getArtists,
    getAlbums:getAlbums, 
    getSongs:getSongs,
    playSongs:playSongs,
    pauseSongs:pauseSongs
  };
  
  };
   var module = angular.module("weasel");
    module.factory("spotify", spotify);
}());


