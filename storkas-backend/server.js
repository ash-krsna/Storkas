const express = require("express");
const cors = require("cors");
require("dotenv").config();

// DB connection (runs immediately)
require("./config/db");

const shipmentRoutes = require("./routes/shipment.routes");

const app = express();

/* ================== MIDDLEWARE ================== */

// 🔥 MUST be before routes
app.use(cors());
app.use(express.json()); // parses JSON body

// Debug middleware (TEMP – helps us see incoming body)
app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  console.log("📦 Body:", req.body);
  next();
});

/* ================== ROUTES ================== */

app.use("/api/shipments", shipmentRoutes);

/* ================== SERVER ================== */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
