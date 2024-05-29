const { Command } = require("commander");
const db = require("../models");
const bcrypt = require("bcrypt");
const program = new Command();

program
  .command("create-user <username> <password>")
  .description("Create a new user")
  .action(async (username, password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await db.User.create({ username, password: hashedPassword });
      console.log("User created successfully:", user.username);
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      await db.sequelize.close();
    }
  });

program.parse(process.argv);
