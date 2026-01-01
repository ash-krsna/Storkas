const db = require("../config/db");

exports.createShipment = (req, res) => {
  console.log("Incoming shipment:", req.body);

  const {
    parcelType,
    weight,
    pickupAddress,
    destinationAddress,
  } = req.body;

  // Safety validation
  if (!parcelType || !weight || !pickupAddress || !destinationAddress) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `
    INSERT INTO shipments 
    (parcel_type, weight, pickup_address, destination_address)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [parcelType, weight, pickupAddress, destinationAddress],
    (err, result) => {
      if (err) {
        console.error("🔥 MYSQL ERROR:", err);
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        message: "Shipment created",
        id: result.insertId,
      });
    }
  );
};
