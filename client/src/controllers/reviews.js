(function() {

  angular.module('work')
    .controller('ReviewController', ['$rootScope', 'authService', 'userdata', '$state', '$window', 'companydata', '$http', '$sce', function($rootScope, authService, userdata, $state, $window, companydata, $http, $sce) {


      var vm = this;
      //grabs the name of the current company
      vm.company = $window.localStorage.company;
      vm.reviews = vm.reviews || "Be the first to review";
      vm.authors;
      vm.rating;
      vm.trustAsHtml = $sce.trustAsHtml;
      vm.writeAReview = companydata.signInOrWrite;

      $http.post('api/reviews', {companyName: vm.company})
        .then(function(res) {
          console.log(res.data.reviews);
          vm.reviews = res.data.reviews;

        })
    }]);

})();
