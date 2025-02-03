from flask import Flask
from flask_cors import CORS
import data

app = Flask(__name__)
#TODO: CONFIGURE CORS CORRECTLY
#CORS(app, resources={'*': {'origins': 'localhost:5173'}})
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/category/<category>", methods=["GET"])
def get_by_category(category):
    return_object = data.get_data_by_line(category)
    return return_object