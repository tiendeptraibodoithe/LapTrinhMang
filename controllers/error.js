exports.get404 = (req, res, next) => {
  const path = req.path;
  res.status(404).render("404", { path: "/404", pageTitle: "Page Not Found" });
};
