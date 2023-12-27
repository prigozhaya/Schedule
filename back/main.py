import constants
import queries
import json

from datetime import timedelta, datetime

import pyodbc
from flask import Flask, jsonify, request
from flask_cors import CORS
global faculcyId, educationForm, groupId


app = Flask(__name__)
CORS(app)


def data_from_db_to_client(cursor, query, *args):
    cursor.execute(query.format(*args))
    row_headers = [x[0] for x in cursor.description]  # this will extract row headers
    rv = cursor.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers, result)))
    return json.dumps(json_data, ensure_ascii=False, default=str)


#                                                    http://127.0.0.1:5000/buttonClicked?facultyId=222&educationForm=1      # УЭЭЭЭ
# Пользователь нажал кнопку, ему надо вернуть
@app.route('/buttonClicked', methods=["GET"])
def buttonClicked():
    faculcyId = request.args.get("facultyId")
    educationForm = request.args.get("educationForm")
    try:
        connectionString = f'DRIVER={{SQL Server}};' \
                           f'SERVER={constants.SERVER};' \
                           f'UID={constants.USERNAME};' \
                           f'PWD={constants.PASSWORD}'
        conn = pyodbc.connect(connectionString)
        print('Succesfull connected')
        cursor = conn.cursor()
        cursor.execute(f"USE {constants.DATABASE}")
        result = data_from_db_to_client(cursor, queries.GET_GROUP_QUERY, faculcyId, educationForm)
        return app.response_class(
                response=json.dumps(result),
                status=200,
                mimetype='application/json'
        )
    except pyodbc.Error as error:
        print(f'An error {error} occured')
    finally:
        cursor.close()
        conn.close()
        print("Connection closed")

#                                                                                               Выгрузка ФИО преподов
@app.route('/getTeacherNames')
def getTeacherNames():
    try:
        connectionString = f'DRIVER={{SQL Server}};' \
                           f'SERVER={constants.SERVER};' \
                           f'UID={constants.USERNAME};' \
                           f'PWD={constants.PASSWORD}'
        conn = pyodbc.connect(connectionString)
        print('Succesfull connected')
        cursor = conn.cursor()
        cursor.execute(f"USE {constants.DATABASE}")
        result = data_from_db_to_client(cursor, queries.GET_TEACHERS_NAME_QUERY)
        return json.dumps(result)
    except pyodbc.Error as error:
        print(f'An error {error} occured')
    finally:
        cursor.close()
        conn.close()
        print("Connection closed")

#                                                    http://127.0.0.1:5000/teachers?teacherId=1313&weekType=nextWeek      # УЭЭЭЭ
# 2023-12-18 2023-12-24
@app.route('/teachers', methods=["GET"])
def getTeachersSchedule():
    currentMonday, currentSunday = setWeek(request)
    teacherId = request.args.get("teacherId")
    try:
        connectionString = f'DRIVER={{SQL Server}};' \
                           f'SERVER={constants.SERVER};' \
                           f'UID={constants.USERNAME};' \
                           f'PWD={constants.PASSWORD}'
        conn = pyodbc.connect(connectionString)
        print('Succesfull connected')
        cursor = conn.cursor()
        cursor.execute(f"USE {constants.DATABASE}")
        result = data_from_db_to_client(cursor, queries.EXTRACT_DATA_FOR_TEACHERS_QUERY, currentMonday, currentSunday, teacherId)
        return json.dumps(result)
    except pyodbc.Error as error:
        print(f'An error {error} occured')
    finally:
        cursor.close()
        conn.close()
        print("Connection closed")

def setWeek(request):
    additionalTime = timedelta(days=0)
    try:
        weekType = request.args.get("weekType")
    except TypeError as error:
        print(f'An error {error} occured')
    if weekType == "currentWeek":
        additionalTime = timedelta(days=0)
    elif weekType == "nextWeek":
        additionalTime = timedelta(days=7)
    now = datetime.now().date()
    currentMonday = now - timedelta(days=now.weekday()) + additionalTime
    currentSunday = (currentMonday + timedelta(days=5)).strftime("%Y-%m-%d")
    currentMonday = currentMonday.strftime("%Y-%m-%d")
    return currentMonday, currentSunday


#                                           http://localhost:5000/?groupId=224003485&weekType=nextWeek    # УЭЭЭЭ
@app.route('/')
def main():
    # faculcyId, formaTimeId, dayBegin, dayEnd, groupId = 222, 1, 23, 28, 224003249 #!
    groupId = request.args.get("groupId")
    currentMonday, currentSunday = setWeek(request)
    print(currentMonday, currentSunday)

    connectionString = f'DRIVER={{SQL Server}};' \
                       f'SERVER={constants.SERVER};' \
                       f'UID={constants.USERNAME};' \
                       f'PWD={constants.PASSWORD}'
    conn = pyodbc.connect(connectionString)
    cursor = conn.cursor()
    cursor.execute(f"USE {constants.DATABASE}")
    result = data_from_db_to_client(cursor, queries.EXTRACT_DATA_QUERY, currentMonday, currentSunday, groupId)
    print('nice')
    return app.response_class(
        response=json.dumps(result),
        status=200,
        mimetype='application/json'
    )


if __name__== "__main__":
    app.run()