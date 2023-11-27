import constants
import queries
import json

from datetime import timedelta, datetime

import pyodbc
from flask import Flask, jsonify, request
global faculcyId, educationForm, groupId


app = Flask(__name__)

# Получаем от клиента Факультет и Форму обучения, которые потребуются для извлечения данных из SMSS
@app.route('/recieveGroups', methods=["POST"])
def getFaculcyId():
    faculcyId = request.json.get("facultyId")
    educationForm = request.json.get("educationForm")

    return jsonify({'message': 'Получен id факультета'}), 200





# Пользователь нажал кнопку, ему надо вернуть
@app.route('/buttonClicked', methods=["POST"])
def buttonClicked():
    faculcyId = request.json.get("facultyId")
    educationForm = request.json.get("educationForm")
    try:
        connectionString = f'DRIVER={{SQL Server}};' \
                           f'SERVER={constants.SERVER};' \
                           f'UID={constants.USERNAME};' \
                           f'PWD={constants.PASSWORD}'
        conn = pyodbc.connect(connectionString)
        print('Succesfull connected')
        cursor = conn.cursor()
        cursor.execute(queries.GET_GROUP_QUERY)
        result = cursor.fetchall()
        return jsonify(result)
    except pyodbc.Error as error:
        print(f'An error {error} occured')
    finally:
        cursor.close()
        conn.close()
        print("Connection closed")

@app.route('/groupName', methods=["GET"])
def getGroupId():
    return jsonify(groupId)

def data_from_db_to_client(cursor, query, *args):
    cursor.execute(query.format(*args))
    row_headers = [x[0] for x in cursor.description]  # this will extract row headers
    rv = cursor.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers, result)))
    return json.dumps(json_data, ensure_ascii=False, default=str)

@app.route('/')
def main():
    # faculcyId, formaTimeId, dayBegin, dayEnd, groupId = 222, 1, 23, 28, 224003249 #!
    now = datetime.now().date()
    currentMonday = now - timedelta(days=now.weekday())
    currentSunday = (currentMonday + timedelta(days=5)).strftime("%Y-%m-%d")
    currentMonday = currentMonday.strftime("%Y-%m-%d")

    connectionString = f'DRIVER={{SQL Server}};' \
                       f'SERVER={constants.SERVER};' \
                       f'UID={constants.USERNAME};' \
                       f'PWD={constants.PASSWORD}'
    conn = pyodbc.connect(connectionString)
    cursor = conn.cursor()
    cursor.execute(f"USE {constants.DATABASE}")
    result = data_from_db_to_client(cursor, queries.EXTRACT_DATA_QUERY, currentMonday, currentSunday, groupId)
    print('nice')
    return json.dumps(result)


if __name__== "__main__":
    app.run()