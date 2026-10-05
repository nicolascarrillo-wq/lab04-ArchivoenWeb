require("dotenv").config(); // Carga las variables del archivo .env

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

app.use((req, res) => {
    res.status(404).render("404", { title: "Pagina no encontrada" });
});

// Toma el puerto desde process.env.PORT (que lee de .env o de Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));