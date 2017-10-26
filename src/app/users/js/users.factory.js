const usersUtil = require('../../../../lib/users/users.util');

/* @ngInject */
function usersFactory ($firebaseArray) {
  function Factory () {
    this.$users = $firebaseArray(usersUtil.usersRef);
    this.addUser = (user) => {
      console.log('You cannot add users without using CLI.');
    };

    this.updateUser = (user) => {
      return this.$users.$save(user);
    }
  }

  return function () {
    return new Factory();
  }
}

module.exports = usersFactory