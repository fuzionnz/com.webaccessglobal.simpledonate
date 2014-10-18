(function(angular, $, _) {

  var resourceUrl = CRM.resourceUrls['com.webaccessglobal.quickdonate'];
  var quickDonation = angular.module('quickdonate', ['ngRoute']);

  quickDonation.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/donation', {
        templateUrl: resourceUrl + '/partials/quickdonate.html',
        controller: 'QuickDonationCtrl'
      });
    }
  ]);

    quickDonation.controller('QuickDonationCtrl', function($scope) {
      //manually binds Parsley--Validation Library to this form.
      $('#quickDonationForm').parsley();
      $scope.formInfo = {}; //property is set to bind input value
    });
})(angular, CRM.$, CRM._);