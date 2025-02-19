import mysql.connector as db
import constants as keys

def get_connection():
    connection = db.connect(user=keys.DB_USER, password=keys.DB_PASSWORD,host="localhost", port=keys.DB_PORT)
    return connection

def get_data(query, parameters=[]):
    connection = get_connection()
    cursor = connection.cursor()
    connection.database = "MunicipalDashboard"
    cursor.execute(query, parameters)
    data = cursor.fetchall()
    cursor.close()
    connection.close()
    return data

def get_total_data(category):
    query = "SELECT name, total_expenses, m.tier FROM ExpenseData INNER JOIN Categories ON c_id = line_number INNER JOIN Municipalities m ON m_id = m.id WHERE category = %s"
    data = get_data(query, [category])
    return data

def get_by_capita_data(category):
    query = "SELECT name, total_expenses, m.population, m.tier FROM ExpenseData INNER JOIN Categories ON c_id = line_number INNER JOIN Municipalities m ON m_id = m.id WHERE category = %s AND population IS NOT NULL"
    data = get_data(query, [category])
    return data

