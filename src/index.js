const app = require("./app");

const startServer = async (app) => {
  const port = process.env.PORT || 7000;
  app
    .listen(port, () => {
      console.log(`
    ################################################
    🚀  Server listening on port: ${port} 🚀
    ################################################`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
};

startServer(app);
