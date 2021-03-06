'use strict';

angular.module('dnApp')
  .directive('infoBox', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      transclude: true,
      templateUrl: 'components/info_directive/info-box.html',
      link: function(scope) {
        scope.close = function() {
          console.log('close');
          scope.hidden = true;
        };
      }
    };
  })

  .directive('boxBanner', function() {
    return {
      restrict: 'EAC',
      scope: {
        name: '@'
      },
      templateUrl: 'components/info_directive/title.html',
      link: function(scope) {
        scope.close = function() {
          console.log('close');
          scope.hidden = true;
        };
      }
    };
  });

  // .directive('line', function() {
  //   return {
  //     restrict: 'E',
  //     transclude: true,
  //     templateUrl: 'components/info_directive/line.html'
  //   }
  // })

  // .directive('heading', function() {
  //   return {
  //     restrict: 'E',
  //     transclude: true,
  //     templateUrl: 'components/info_directive/heading.html'
  //   };
  // })

  // .directive('row', function() {
  //   return {
  //     restrict: 'E',
  //     transclude: true,
  //     templateUrl: 'components/info_directive/row.html'
  //   };
  // });