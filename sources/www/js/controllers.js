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
        var x=document.getElementById("app");
        function getLocation(){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition,showError);
            }
            else{
                x.innerHTML="Geolocation is not supported by this browser.";
            }
        }

        function showError(error){
            switch(error.code){
                case error.PERMISSION_DENIED:
                    x.innerHTML="User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML="Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML="The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML="An unknown error occurred."
                    break;
            }
        }

        function displayLocation(latitude,longitude){
            var geocoder;
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(latitude, longitude);

            geocoder.geocode(
                {'latLng': latlng},
                function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            var add= results[0].formatted_address ;
                            var  value=add.split(",");

                            var count=value.length;
                            var country=value[count-1];
                            var state=value[count-2];
                            var city=value[count-3];
                            console.log(x.innerHTML = "city name is: " + state);
                        }
                        else  {
                            console.log(x.innerHTML = "address not found");
                        }
                    }
                    else {
                        console.log(x.innerHTML = "Geocoder failed due to: " + status);
                    }
                }
            );
        }

            var onSuccess = function(position) {
                var lat= position.coords.latitude;
                var long = position.coords.longitude;
                console.log('lat'+lat);
                displayLocation(lat,long);
            };

            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            $scope.settings = {
                enableFriends: true
            };

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

