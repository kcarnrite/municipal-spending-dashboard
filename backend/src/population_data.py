import pandas as pd
import csv
import total_data as dt

def get_dataframe():
    data = pd.read_csv('./data/PopulationAllMunicipalities.csv')
    data["MUNICIPALITY"] = data["MUNICIPALITY"].map(lambda x: x.split(',')[0].lower())
    return data


def get_municipal_population_data():
    population_data = get_dataframe()
    category_data = dt.get_dataframe()
    test_data = pd.merge(population_data, category_data, left_on="MUNICIPALITY", right_on='Municipality', how="inner")
    return test_data


def get_spending_by_population_df():
    dataframe = get_municipal_population_data()
    by_population = dataframe.apply(lambda x: round(int(x['Total expenses'])/x['Total Pop'], 2), axis=1)
    by_population = by_population.rename("Total spending by population")
    result = dataframe.join(by_population, how='inner')
    return result

def get_data_by_category(category):
    dataframe = get_spending_by_population_df()
    match category:
        case 'fire':
            line_data = dataframe[dataframe['Line'] == 410]
        
        case 'governance':
            line_data = dataframe[dataframe['Line'] == 240]

        case 'pavedRoads':
            line_data = dataframe[dataframe['Line'] == 611]
        
        case 'unpavedRoads':
            line_data = dataframe[dataframe['Line'] == 612]

        case 'police':
            line_data = dataframe[dataframe['Line'] == 420]
        
    return_data = line_data[['Municipality', 'Total spending by population', 'Tier']]
    print(return_data)

    return return_data.values.tolist()

