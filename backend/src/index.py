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

@app.route("/api/line/<line_number>/<year>/<measurement>", methods=["GET"])
def get_by_line_number(measurement, year, line_number):
    min_population = request.args.get('minPopulation')
    if(measurement == 'total'):
        return_object = db.get_total_data(line_number, year, min_population)
    elif(measurement == 'perCapita'):
        return_object = pop_data.get_data_by_category(line_number, year, min_population)
    elif(measurement == 'percentage'):
        return_object = db.get_by_percentage_data(line_number, year, min_population)
    else:
        print(measurement)
        assert()

    return return_object

@app.route("/api/get_categories")
def get_categories():
    categories = {
        'General Government': db.get_categories(240,299),
        'Protection Services': db.get_categories(410,499),
        'Transportation Services': db.get_categories(611,699),
        'Environmental Services': db.get_categories(811,899),
        'Health Services': db.get_categories(1010,1099),
        'Social and Family Services': db.get_categories(1210,1499),
        'Recreation and Cultural Services': db.get_categories(1610, 1699),
        'Planning and Development': db.get_categories(1810,1899),
        'Other': db.get_categories(1910,1910),
        'Total': db.get_categories(9910,9910)}
    return categories

@app.route("/api/get_years")
def get_available_years():
    data = db.get_years()
    return data

