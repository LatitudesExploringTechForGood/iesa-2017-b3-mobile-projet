angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}).factory('Towns', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var towns = [
        {name:'Paris',lat:'41',lon:'54'},
        {name:'Marseille',lat:'32',lon:'45'},
        {name:'Lille',lat:'-34',lon:'09'}
        ];

    return {
        all: function() {
            return towns;
        }
    };
}).factory('Peoples', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var peoples = [{
        id: 0,
        name: 'Ben Sparrow',
        town: 'Paris',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        town: 'Paris',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        town: 'Marseille',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        town: 'Lille',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        town: 'Marseille',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return peoples;
        },
        get: function(townName) {
          var peoplesTab=[];
            peoples.forEach(function (item) {
                if(item.town==townName){
                  peoplesTab.push(item);
                }
            });
            return peoplesTab;
        }
    };
});
