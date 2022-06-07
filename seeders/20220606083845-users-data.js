"use strict";

module.exports = {
  up: async (queryInterface) => {
    const newUsers = [
      {
        email: "kai@kai.com",
        password: "abc123",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "liam@liam.com",
        password: "123abc",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("users", newUsers);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
