'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', //plain text
      firstName: 'sinhpam',
      lastName: 'van',
      address: 'USA',
      gender: '1',
      roleId: 'ROLE',
      postitionId: 'doctor',
      phonenumber: '0998863090',
      image: 'httplink',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Users', null, {});
  }
};