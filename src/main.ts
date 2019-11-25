import express from "express";
import config from "./config";

async function startServer() {
  const app = express();

  app.listen(config.PORT, (err: any) => {
    if (err) {
      console.log(err);
      process.exit(1);
      return;
    }

    console.log(`Server listening on port: ${config.PORT}`);
  });
}

startServer();
