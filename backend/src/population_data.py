import municipal_db as db

def get_data_by_category(category, year, min_population):
    
    data = db.get_by_capita_data(category, year, min_population)
        
    return_data = [(x[0],int(x[1]/x[2]),x[3]) for x in data]

    return return_data