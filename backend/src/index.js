import app from "./app";
import { sequelize } from "./config";

const PORT = 3000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos', error);
  }
};

startServer();