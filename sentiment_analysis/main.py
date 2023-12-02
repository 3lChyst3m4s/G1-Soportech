from bd import leer_comentario, actualizar_sentimiento
from sentiment import analizar_sentimiento as asen2

def startAnalyze(requestId):
    # Leer comentario
    comentario = leer_comentario(requestId)

    # Analizar sentimiento
    sentimiento = asen2(comentario)

    # Actualizar sentimiento
    actualizar_sentimiento(requestId, sentimiento)

if __name__ == "__main__":
    import sys
    # Obtener el argumento pasado desde el comando
    requestId = sys.argv[1]
    startAnalyze(requestId)
