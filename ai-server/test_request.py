# test_request.py
import requests

url = "http://127.0.0.1:5001/predict"
data = {
    "symptoms": ["fever", "cough"]
}

response = requests.post(url, json=data)
print("Prediction:", response.json())

