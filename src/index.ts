import express from "express";
import morgan from "morgan";
import contactRoutes from "./contacts"

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(morgan("dev"));

// Basic health check route
app.get("/health", (req, res) =>{
    res.send("API is healthy 🚀")
})

// Contact Routes
app.use("/api/v1/contacts", contactRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})






