'use strict';

const db = require('../models');
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await db.Movie.bulkCreate([
      {
        name: 'Adult',
      },
      {
        name: 'Action',
      },
      {
        name: 'Animation',
      },
      {
        name: 'Romantic Sci-Fi',
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
