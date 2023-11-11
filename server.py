from flask import Flask
import prueba_clasificador_sentimientos

app = Flask(__name__)

#Members API Route
@app.route("/members")
def members():
    texto = "La compañía telefónica @Movistar me cobró una tarifa incorrecta. ¡Esto es inaceptable!"
    result = prueba_clasificador_sentimientos.procesar_tweet(texto)
    final = prueba_clasificador_sentimientos.imprimir_puntuacion(result)
    return {"detailForm":final}

if __name__ == "__main__":
    app.run(debug=True)
    
    
    