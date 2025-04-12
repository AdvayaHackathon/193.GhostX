# model.py
def predict_disease(symptoms):
    # Dummy logic for now
    if "fever" in symptoms and "cough" in symptoms:
        return "Flu"
    elif "headache" in symptoms:
        return "Migraine"
    else:
        return "Unknown - More tests required"
