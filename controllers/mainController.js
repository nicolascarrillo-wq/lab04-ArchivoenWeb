const mainController = {
  home: (req, res) => res.render("home", { title: "Inicio", page: "home" }),
  about: (req, res) => res.render("about", { title: "Acerca de", page: "about" }),
  services: (req, res) => res.render("services", { title: "Servicios", page: "services" }),

  contact: (req, res) =>
    res.render("contact", { title: "Contacto", page: "contact", enviado: false, datos: null }),

  postContact: (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).render("contact", {
        title: "Contacto",
        page: "contact",
        enviado: false,
        datos: null,
        error: "Todos los campos son obligatorios",
      });
    }

    console.log(`Nuevo contacto -> nombre: ${nombre} | email: ${email} | mensaje: ${mensaje}`);

    res.render("contact", {
      title: "Contacto",
      page: "contact",
      enviado: true,
      datos: { nombre, email, mensaje },
    });
  },
};

module.exports = mainController;