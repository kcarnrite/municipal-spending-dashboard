import csv
import pandas as pd

'''
with open("./data/VIEWFIR2023-40/VIEWFIR2023-40-data.csv", "r") as csv_file:
    reader = csv.reader(csv_file, delimiter=',')
    i = 0
    for row in reader:
        i = i +1
        j=0
        for idx, element in enumerate(row):
            row[idx] = element.replace(',', '')

        print(row)
        if(i == 3):
            exit()
'''
# TODO: REPLACE
def get_dataframe():
    data = pd.read_csv("./data/VIEWFIR2023-40-data.csv")
    data = data.fillna(0)
    column_mapping = {
        "40 xxxx 01": "Salaries, wages, and employee benefits",
        "40 xxxx 02": "Interest on Long term debt",
        "40 xxxx 03": "Materials",
        "40 xxxx 04": "Contracted services",
        "40 xxxx 05": "Rents and financial expenses",
        "40 xxxx 06": "External transfers",
        "40 xxxx 07": "Total Expenses before adjustments",
        "40 xxxx 11": "Total expenses",
        "40 xxxx 12": "Inter-functional adjustments",
        "40 xxxx 13": "Allocation of program support",
    }
    data.rename(columns=column_mapping, inplace=True)
    data.drop(['Year', 'Asmt Code', 'MAH Code'], axis=1, inplace=True)
    data.replace(',', '', inplace=True, regex=True)
    return data

def get_governance_data():
    dataframe = get_dataframe()
    governance_data = dataframe[dataframe['Line'] == 240]
    return_data = governance_data[['Municipality', 'Total expenses']]
    return return_data.values.tolist()
    