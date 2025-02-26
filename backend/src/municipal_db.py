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

def get_total_data(category, min_population):
    query = "SELECT name, total_expenses, m.tier FROM ExpenseData INNER JOIN Categories ON c_id = line_number INNER JOIN Municipalities m ON m_id = m.id WHERE category = %s AND population >= %s"
    data = execute_query(query, [category, min_population])
    return data

def get_by_capita_data(category, min_population):
    query = "SELECT name, total_expenses, m.population, m.tier FROM ExpenseData INNER JOIN Categories ON c_id = line_number INNER JOIN Municipalities m ON m_id = m.id WHERE category = %s AND population IS NOT NULL AND population >= %s"
    data = execute_query(query, [category, min_population])
    return data


def get_categories():
    query ="SELECT line_number, category FROM Categories"
    data = execute_query(query)
    return data