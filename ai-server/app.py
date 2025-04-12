# app.py
from flask import Flask, request, jsonify
from model import predict_disease

app = Flask(__name__)

@app.route('/')
def home():
    return "AI Diagnosis API is live!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    symptoms = data.get("symptoms", [])
    diagnosis = predict_disease(symptoms)
    return jsonify({"diagnosis": diagnosis})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
