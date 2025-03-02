from flask import Flask, request
from flask_cors import CORS
import population_data as pop_data
import municipal_db as db
from constants import FRONTEND_HOSTS

app = Flask(__name__)
#TODO: CONFIGURE CORS CORRECTLY
CORS(app, origins=FRONTEND_HOSTS)
#CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/line/<line_number>/<measurement>", methods=["GET"])
def get_by_line_number(measurement, line_number):
    min_population = request.args.get('minPopulation')
    if(measurement == 'total'):
        return_object = db.get_total_data(line_number, min_population)
    elif(measurement == 'perCapita'):
        return_object = pop_data.get_data_by_category(line_number, min_population)
    else:
        print(measurement)
        print(category)
        assert()

    return return_object

@app.route("/api/get_categories")
def get_categories():
    categories = db.get_categories()
    return categories
