angular.module('pnrApp.filter', [])

.filter('capitalize', function(){
  return function(input){
    return ((!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '').slice(0,-1);
  }
})

.filter('colorcaps', function(){
  return function(input){
    return ((!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '');
  }
});
