angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})



    .controller('GeolocationCtrl', ['$scope', '$ionicPlatform', '$location','Towns', function($scope, $ionicPlatform,$location,Towns) {
      $scope.towns=Towns.all();

            /*let getAddress =function (latitude, longitude) {
                console.log('get adresse');
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    let method = 'GET';
                    let url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
                    let async = true;

                    request.open(method, url, async);
                    request.onreadystatechange = function () {
                        if (request.readyState == 4) {
                            if (request.status == 200) {
                                let data = JSON.parse(request.responseText);
                                let address = data.results[0];
                                console.log('adresse'+adress);
                                resolve(address);
                            }
                            else {
                                reject(request.status);
                            }
                        }
                    };
                    request.send();
                });
            };
            let onSuccess = function(position) {
                let lat= position.coords.latitude;
                let long = position.coords.longitude;
                console.log('lat'+lat);
                getAddress(lat, long);
            };*/

            // onError Callback receives a PositionError object
            //
            /*function onError(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            $scope.settings = {
                enableFriends: true
            };*/

            /*$scope.selectPeopleInTown = function (town) {
                $scope.peopleInTown=[];
                $scope.peoples.forEach(function (item) {
                    if (item.ville==town){
                        $scope.peopleInTown.push(item);
                    }
                });
                console.log($scope.peopleInTown);
                $location.path('templates/list-in-city.html');

            };*/
    }])
    
    .controller('GeolocationDetailCtrl',function ($scope, $stateParams, Peoples) {

        $scope.peoples = Peoples.get($stateParams.townName);
        console.log($scope.peoples);
    })


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

  .controller('InvitationCtrl', ['$scope', 'PhoneContactsFactory', '$ionicPlatform', function($scope, PhoneContactsFactory, $ionicPlatform) {

    $ionicPlatform.ready(function() {
      $scope.findContact = function()
      {
        PhoneContactsFactory.find().then(function(contacts)
        {
          $arr = [];
          for (var i = 0; i < contacts.length; i++)
          {
            $arr.push({name: contacts[i].name.formatted})
          }
          $scope.contacts = $arr;
        });
      };
      $scope.findContact();

    });
  }]);

