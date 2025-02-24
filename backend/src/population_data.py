import municipal_db as db

def get_data_by_category(category, min_population):
    match category:
        case 'fire':
            data = db.get_by_capita_data("fire", min_population)
        
        case 'governance':
            data = db.get_by_capita_data("governance", min_population)

        case 'pavedRoads':
            data = db.get_by_capita_data("roads - paved", min_population)
        
        case 'unpavedRoads':
            data = db.get_by_capita_data("roads - unpaved", min_population)

        case 'police':
            data = db.get_by_capita_data("Police", min_population)
        case _:
            Exception("ERROR - NOT IMPLEMENTED")
        
    return_data = [(x[0],int(x[1]/x[2]),x[3]) for x in data]

    return return_data