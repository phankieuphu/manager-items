const { Command } = require("commander");
const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const program = new Command();

program
  .command("create-user <email> <password>")
  .description("Create a new user")
  .action(async (email, password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await Users.create({ email, password: hashedPassword });
      console.log("User created successfully:", user.username);
      return;
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
    return;
  });

program.parse(process.argv);
