import mysql.connector

# Configuración de la conexión
config = {
  'user': 'root',
  'password': '1234',
  'host': 'localhost',
  'database': 'test',
}

def leer_comentario(id):
  # Conexión a la base de datos
  cnx = mysql.connector.connect(**config)
  cursor = cnx.cursor()

  # Consulta
  query = "SELECT * FROM requests WHERE requestId = %s"
  cursor.execute(query, (id,))

  # Resultado
  result = cursor.fetchone()

  # Cierre de la conexión
  cursor.close()
  cnx.close()

  # Retorno de la función
  if result is None:
    return 0
  else:
    return result[12]

def actualizar_sentimiento(id, sentimiento):
  # Conexión a la base de datos
  cnx = mysql.connector.connect(**config)
  cursor = cnx.cursor()

  # Consulta
  query = "UPDATE forms SET sentimentValue = %s WHERE requestId = %s"
  cursor.execute(query, (sentimiento, id))

  # Cierre de la conexión
  cnx.commit()
  cursor.close()
  cnx.close()