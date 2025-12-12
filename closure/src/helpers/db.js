//imports
import Database from 'better-sqlite3';


// 2. crear db
const db = new Database('src/db/Carrito.db');
db.pragma('journal_mode = WAL');

//"server:start": "node src/helpers/db.js" en package.json

// 3. Crear tablas

// Tabla usuario
db.exec(`
    CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    );
`);

// Tabla producto
db.exec(`
    CREATE TABLE IF NOT EXISTS producto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        precio REAL NOT NULL
    );
`);

// Tabla carrito
db.exec(`
    CREATE TABLE IF NOT EXISTS carrito (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER NOT NULL,
        producto_id INTEGER NOT NULL,
        cantidad INTEGER NOT NULL DEFAULT 1,
        FOREIGN KEY (usuario_id) REFERENCES usuario(id),
        FOREIGN KEY (producto_id) REFERENCES producto(id)
    );
`);
