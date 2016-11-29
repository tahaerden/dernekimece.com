var app = angular

.module("myApp",["pascalprecht.translate","ngCookies","ngSanitize"])
// .factory("$api",function($http,$location){
//   return function(endpoint,params){
//     return {
//       then : function(callback){
//         // if(endpoint !== 'IsTokenValid') $rootScope.$broadcast('bcApiCalled');
//         if(!params.token) params.token = localStorage.token;
//         $http.post(Config.ApiPath+endpoint,params)
//         .then(function(response){

//           if($location.url() !== "/login" && $location.url().substring(0, 14) !== "/resetPassword" && $location.url().substring(0, 19) !== "/activateReportUser" && $location.url().substring(0, 9) !== "/calendar" && $location.url().substring(0, 6) !== "/order" && response.data.messageCode === 155){
//             window.location = "#/login";
//             return false;
//           }
//         // console.log(Config.ApiPath+endpoint,params);
//         console.log(endpoint);
//         console.log(params);
//         console.log(response);
//         // console.table(response.data.dataList);
//         callback(response.data);
//       });
//       }
//     };
//   };
// })


.controller("global",function($scope,$translate,$rootScope,$sce){
  $scope.changeLanguage = function(langKey) {
    $translate.use(langKey);
    $rootScope.lang = langKey;
    $scope.currentLang = $translate.use() || $translate.storage().get($translate.storageKey()) || $translate.preferredLanguage();
  };
});


//Language Translate Config
app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'js/translations/locale-',
    suffix: '.json'
  })
  .preferredLanguage('tr')
  // .useLocalStorage()
  .useCookieStorage()
  .useSanitizeValueStrategy(null);
}]);