import municipal_db as db
    

def get_data_by_category(category, min_population):
    match category:
        case 'fire':
            return_data = db.get_total_data("Fire", min_population)
            return return_data
        case 'governance':
            return_data = db.get_total_data("Governance", min_population)

        case 'pavedRoads':
            return_data = db.get_total_data("Roads - paved", min_population)
        
        case 'unpavedRoads':
            return_data = db.get_total_data("Roads - unpaved", min_population)

        case 'police':
            return_data = db.get_total_data("Police", min_population)
        case _:
            Exception("NOT IMPLEMENTED")
        
    return return_data