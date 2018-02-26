(function(module) {

  var artistService = function() {
    return {
      name: undefined
    };
  };

  module.factory("artistService", artistService);

}(angular.module("weasel")));