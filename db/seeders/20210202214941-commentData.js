"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          comment: "I loved eating here!",
          userId: 1,
          restaurantId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "I hated eating here!",
          userId: 1,
          restaurantId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Great service!",
          userId: 1,
          restaurantId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
