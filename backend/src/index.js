import app from "./app";
import { sequelize, connect } from "./database";
import { server } from "./config";

const PORT = server.port;

const startServer = async () => {
  try {
    await connect();
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada');
    
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos', error);
  }
};

startServer();