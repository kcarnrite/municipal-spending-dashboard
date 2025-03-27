import mysql.connector as db
import constants as keys

def get_connection():
    connection = db.connect(user=keys.DB_USER, password=keys.DB_PASSWORD,host="localhost", port=keys.DB_PORT)
    return connection

def execute_query(query, parameters=[]):
    connection = get_connection()
    cursor = connection.cursor()
    connection.database = "MunicipalDashboard"
    cursor.execute(query, parameters)
    data = cursor.fetchall()
    cursor.close()
    connection.close()
    return data

def get_total_data(line_number, year, min_population):
    query = "SELECT name, total_expenses, m.tier FROM ExpenseData INNER JOIN Categories ON c_id = line_number INNER JOIN Municipalities m ON m_id = m.id WHERE line_number = %s AND year = %s AND population >= %s"
    data = execute_query(query, [line_number, year, min_population])
    return data

def get_by_capita_data(line_number, year, min_population):
    query = "SELECT name, total_expenses, m.population, m.tier FROM ExpenseData INNER JOIN Categories ON c_id = line_number INNER JOIN Municipalities m ON m_id = m.id WHERE line_number = %s AND year = %s AND population IS NOT NULL AND population > %s"
    data = execute_query(query, [line_number, year, min_population])
    return data

def get_by_percentage_data(line_number, year, min_population):
    # NEED TO ALSO JOIN ON Municipalities table to filter out low pop places
    query = "SELECT t3.name, (t1.total_expenses / t2.total_expenses), t3.tier FROM ExpenseData AS t1 " \
    "INNER JOIN ExpenseData AS t2 ON t1.m_id = t2.m_id AND t1.year = t2.year " \
    "INNER JOIN Municipalities AS t3 ON t1.m_id = t3.id " \
    "WHERE t1.c_id=%s AND t2.c_id=9910 AND t1.year=%s AND t3.population>%s "
    data = execute_query(query, [line_number, year, min_population])
    return data


def get_categories(line_start=0, line_end=10000):
    query ="SELECT line_number, category FROM Categories WHERE line_number BETWEEN %s AND %s"
    data = execute_query(query, [line_start, line_end])
    return data

def get_years():
    query = "SELECT year FROM ExpenseData GROUP BY year"
    data = execute_query(query,[])
    return data