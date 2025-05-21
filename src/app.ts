import { AppDataSource } from "@config/database";
import app from "@server/server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

// Start app after DB connects
AppDataSource.initialize()
  .then(() => {
    console.log("🟢 Database connected successfully");

    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to database:", err);
});