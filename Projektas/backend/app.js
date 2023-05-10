import express from "express";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";
import Client from "./models/client.model.js";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectMongoDB();

app.use(express.json());

// MongoDB routes
// GET | get all clients from MongoDB
app.get("/api/clients", async (req, res) => {
  try {
    const clients = await Client.find();

    res.json(clients);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error" });
  }
});

// GET | get single client from MongoDB
app.get("/api/clients/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    const client = await Client.findById(clientId);

    res.json(client);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error" });
  }
});

// POST | create single client in MongoDB

app.post("/api/clients", async (req, res) => {
  try {
    const newClient = req.body;

    const validatedNewClient = new Client(newClient);

    const savedData = await validatedNewClient.save();

    res.json(savedData);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error" });
  }
});
// PUT | update client by id

app.put("/api/clients/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    const updatedClientData = req.body;

    await Client.findByIdAndUpdate(clientId, updatedClientData);
    const updatedClient = await Client.findById(clientId);

    res.json(updatedClient);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error" });
  }
});

// DELETE | delete client by id

app.delete("/api/clients/:id", async (req, res) => {
  try {
    const clientId = req.params.id;

    await Client.findByIdAndDelete(clientId);

    res.json({ message: "Client deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error" });
  }
});

// Starting server
app.listen(PORT, () => console.log("Server is running on PORT: " + PORT));
