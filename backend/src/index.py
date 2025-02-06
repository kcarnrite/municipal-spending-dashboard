from flask import Flask
from flask_cors import CORS
import total_data as tot_data
import population_data as pop_data

app = Flask(__name__)
#TODO: CONFIGURE CORS CORRECTLY
#CORS(app, resources={'*': {'origins': 'localhost:5173'}})
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/category/<category>/<measurement>", methods=["GET"])
def get_by_category(category, measurement):
    if(measurement == 'total'):
        return_object = tot_data.get_data_by_line(category)
    elif(measurement == 'perCapita'):
        return_object = pop_data.get_data_by_category(category)
    else:
        print(measurement)
        print(category)
        assert()

    return return_object