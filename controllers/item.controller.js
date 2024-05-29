const { Items } = require("../models");

const getAllItems = async (req, res) => {
  const items = await Items.findAll();
  return res.json(items);
};

const createItem = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price) {
      return res.status(400).send({ message: "Name and price are required" });
    }
    await Items.create({ name, price, description });
    return res.status(201).send({
      message: "Create success",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateItem = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Id is required" });
    }
    await Items.update({ name, price, description }, { where: { id } });
    return res.status(204).send({
      message: "Update success",
    });
  } catch (err) {
    console.log("Error", err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Id is required" });
    }
    await Items.destroy({ where: { id } });
    return res.status(204).send({
      message: "Deleted success",
    });
  } catch (err) {
    console.log("Err", err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
