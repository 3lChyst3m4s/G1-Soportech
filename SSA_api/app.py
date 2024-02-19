from flask import Flask, request, jsonify
import config

import ClasificadorSentimientos as sentimental

app = Flask(__name__)

@app.route('/')
def index():
    return "API REST"

@app.route('/api', methods=['GET'])
def rocognize_face():
    in_text = request.args.get('text')
    if in_text:
        results = sentimental.procesar_tweet(in_text)
        return jsonify(
            fear = results[0],
            anger = results[1],
            anticipation = results[2],
            trust = results[3],
            surprise= results[4],
            positive = results[5],
            negative = results[6],
            sadness= results[7],
            disgust= results[8],
            joy= results[9]
        )
    else:
        return jsonify(error= "Parámetro faltante")


if __name__ == '__main__':
    app.config.from_object(config)
    app.run(host='0.0.0.0') 