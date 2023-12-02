from googletrans import Translator
import spacy
from spacytextblob.spacytextblob import SpacyTextBlob

def analizar_sentimiento(texto):
  # Inicializa el traductor
  translator = Translator()

  # Traduce el texto a inglés
  texto_en = translator.translate(texto, dest='en').text

  # Procesa el texto en inglés con Spacy y analiza el sentimiento
  nlp = spacy.load('en_core_web_sm')
  nlp.add_pipe('spacytextblob')
  doc = nlp(texto_en)

  # Imprime el sentimiento
  return doc._.polarity