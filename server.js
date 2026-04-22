const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const db = new sqlite3.Database('./eventique.db');

app.use(cors());
app.use(express.json());

db.serialize(() => {
    // Create Table
    db.run(`CREATE TABLE IF NOT EXISTS vendors (
        id INTEGER PRIMARY KEY,
        name TEXT, style TEXT, location TEXT, 
        phone TEXT, email TEXT, description TEXT, category TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS CUSTOMERS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
        )`);

    // Insert your exact data
    const vendors = [
        [1, 'Grace & Gold Events', 'luxury', 'Lagos', '08011234567', 'info@gracegold.ng', 'Premium luxury wedding planning...', 'wedding'],
        [2, 'Bloom & Co.', 'minimalist', 'Abuja', '08022345678', 'hello@bloomco.ng', 'Clean, modern wedding styling...', 'wedding'],
        [5, 'The Golden Arch', 'luxury', 'Abuja', '08055678901', 'bookings@goldenarch.ng', 'Opulent wedding design...', 'wedding'],
        [10, 'Pearl & Ivory', 'minimalist', 'Port Harcourt', '07011123456', 'pearl@ivory.ng', 'Understated wedding elegance...', 'wedding'],
        [4, 'Heritage Planners', 'traditional', 'Port Harcourt', '08044567890', 'heritage@planners.ng', 'Culturally rich ceremonies...', 'burial,wedding'],
        [3, 'Vibrant Touch NG', 'vibrant', 'Benin City', '08033456789', 'contact@vibranttouch.ng', 'Bold birthday event design...', 'birthday'],
        [7, 'Colour Carnival', 'vibrant', 'Ibadan', '08077890123', 'hello@colourcarnival.ng', 'Festive birthday decoration...', 'birthday'],
        [11, 'Festive Forge', 'vibrant', 'Abuja', '07022234567', 'forge@festive.ng', 'Creative event builders...', 'birthday'],
        [9, 'Executive Gatherings', 'luxury', 'Lagos', '08099012345', 'exec@gatherings.ng', 'Corporate event specialists...', 'corporate'],
        [13, 'Premier Corporate NG', 'luxury', 'Abuja', '07044456789', 'info@premiercorp.ng', 'End-to-end luxury management...', 'corporate'],
        [14, 'The Event Canvas', 'minimalist', 'Lagos', '07055567890', 'canvas@theeventcanvas.ng', 'Minimalist styling...', 'corporate'],
        [8, 'Ancestral Rites NG', 'traditional', 'Benin City', '08088901234', 'ancestral@rites.ng', 'Expert traditional protocols...', 'burial'],
        [15, 'Serene Farewell Events', 'minimalist', 'Lagos', '08113456789', 'serene@farewell.ng', 'Calm, respectful coordination...', 'burial'],
        [16, 'Final Honours NG', 'traditional', 'Abuja', '08124567890', 'info@finalhonours.ng', 'Dignified farewell ceremonies...', 'burial']
    ];

    db.get("SELECT count(*) as count FROM vendors", (err, row) => {
        if (row.count === 0) {
            const stmt = db.prepare("INSERT INTO vendors VALUES (?,?,?,?,?,?,?,?)");
            vendors.forEach(v => {stmt.run(v);
            });
            stmt.finalize(); 
        }
    });
});

app.get('/api/vendors', (req, res) => {
    db.all("SELECT * FROM vendors", [], (err, rows) => {
        res.json(rows);
    });
});
app.post('/api/register-customer',(req,res)=>{
    const { name, email, password}=req.body;
    const sql = "INSERT INTO customers (name, email, password) VALUES (?,?, ?)";
    db.run (sql,[name, email, password], function(err){
        if (err) {
            return
            res.status(500).json ({error: err.message });
        }
        res.json({ message:"Customer saved!" , id: this.lastID});
    });
});
app.listen(3000, () => console.log("Server running on http://localhost:3000"));