from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'Index Page'


@app.route('/login', methods=['POST'])
def login():

    print("peticion de login")

    conn = sqlite3.connect('../Back-end/Database/MABG.db')
    cursor = conn.cursor()

    try:
        data = request.get_json()
        username = data['usuario']
        password = data['password']

        cursor.execute("SELECT * FROM Users WHERE username=?", (username,))
        user = cursor.fetchone()

        if not user:
            print("no user ")
            return jsonify({'mensaje': 'No existe ese usuario'}), 404

        user_data = {'name': user[1], 'pictureUrl': user[2],
                     'role': user[3], 'username': user[5]}

        if user[4] == password:
            return jsonify({'user_data': user_data,  'mensaje': 'Inicio de sesion correctamente'}, 200)

        return jsonify({'mensaje': 'Inicio de sesion fallido'}), 401

    except sqlite3.Error as e:

        return jsonify({'error': str(e)}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()


if __name__ == '__main__':
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    # cors = CORS(app, resources={r"/login": {"origins": "http://localhost:5173"}})
    app.run(debug=True)
