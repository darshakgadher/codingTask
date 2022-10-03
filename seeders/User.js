"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Test",
          email: "test@gmail.com",
          address: "For Testing demo",
          dob: "2001-07-13",
          gender: "male",
          phone_number: "9876543110",
          userType: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jon",
          email: "jon@gmail.com",
          address: "For Testing demo",
          dob: "2001-01-26",
          gender: "other",
          phone_number: "9876543110",
          userType: "enduser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Demo",
          email: "demo@gmail.com",
          address: "For Testing demo",
          dob: "1996-05-13",
          gender: "female",
          phone_number: "9876543110",
          userType: "enduser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rocky",
          email: "rocky@gmail.com",
          address: "For Testing demo",
          dob: "2001-07-13",
          gender: "female",
          phone_number: "9876543110",
          userType: "enduser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
