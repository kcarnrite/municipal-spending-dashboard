import municipal_db as db

def get_data_by_category(category):
    match category:
        case 'fire':
            data = db.get_by_capita_data("fire")
        
        case 'governance':
            data = db.get_by_capita_data("governance")

        case 'pavedRoads':
            data = db.get_by_capita_data("roads - paved")
        
        case 'unpavedRoads':
            data = db.get_by_capita_data("roads - unpaved")

        case 'police':
            data = db.get_by_capita_data("Police")
        case _:
            Exception("ERROR - NOT IMPLEMENTED")
        
    return_data = [(x[0],int(x[1]/x[2]),x[3]) for x in data]

    return return_data