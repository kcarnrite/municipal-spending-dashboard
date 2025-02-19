import municipal_db as db
    

def get_data_by_category(category):
    match category:
        case 'fire':
            return_data = db.get_total_data("Fire")
            return return_data
        case 'governance':
            return_data = db.get_total_data("Governance")

        case 'pavedRoads':
            return_data = db.get_total_data("Roads - paved")
        
        case 'unpavedRoads':
            return_data = db.get_total_data("Roads - unpaved")

        case 'police':
            return_data = db.get_total_data("Police")
        case _:
            Exception("NOT IMPLEMENTED")
        
    return return_data