from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import base64


app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'Index Page'


@app.route('/deleteUser', methods=['DELETE'])
def delete_user():
    print("Petición DELETE")

    try:
        data = request.get_json()
        username = data['username']

        conn = sqlite3.connect('../Back-end/Database/MABG.db')
        cursor = conn.cursor()

        # Verifica si el usuario existe antes de eliminarlo
        cursor.execute("SELECT * FROM Users WHERE username=?", (username,))
        user = cursor.fetchone()

        if user:
            cursor.execute("DELETE FROM Users WHERE username=?", (username,))
            conn.commit()  # Guarda los cambios en la base de datos
            conn.close()
            return jsonify({"status": "Elemento eliminado"})
        else:
            conn.close()
            return jsonify({"error": "Usuario no encontrado"}), 404

    except sqlite3.Error as e:
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/users')
def users():
    print("peticion de users")
    conn = sqlite3.connect('../Back-end/Database/MABG.db')
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT username, role_id, picture FROM Users")
        users = cursor.fetchall()

        roles = ["Administrador" if user[1] <=
                 2 else "Usuario" for user in users]

        user_info = []

        for user, role in zip(users, roles):
            username, _, picture_path = user

            if user[2] is None:
                picture_path = "/home/eliezercode/Documents/VSC/Proyecto MABG/Back-end/pictures/user/user.png"

            with open(picture_path, "rb") as image_file:
                picture_base64 = base64.b64encode(
                    image_file.read()).decode("utf-8")

            user_info.append({
                "username": username,
                "role": role,
                "picture": picture_base64
            })


        return jsonify({"data": user_info})

    except sqlite3.Error as e:
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    finally:
        conn.close()


@app.route('/login', methods=['POST'])
def login():

    print("peticion de login")

    conn = sqlite3.connect('../Back-end/Database/MABG.db')
    cursor = conn.cursor()

    try:
        print("peticion de login")
        data = request.get_json()
        username = data['usuario']
        password = data['password']

        

        cursor.execute("SELECT * FROM Users WHERE username=?", (username,))
        user = cursor.fetchone()

        if not user:
          
            return jsonify({'mensaje': 'No existe ese usuario'}), 404

        rol = "Administrador" if user[3] <= 2 else "Usuario"

        print("imagen:",user[2])
        if  user[2] is None:
                image_binary = "/home/eliezercode/Documents/VSC/Proyecto MABG/Back-end/pictures/user/user.png"
                with open(image_binary, "rb") as image_file:
                    image_binary = base64.b64encode(
                        image_file.read()).decode("utf-8")
                    
                

        else:
            with open(user[2], "rb") as image_file:
                image_binary = base64.b64encode(
                    image_file.read()).decode("utf-8")


        
            
        user_data = {'name': user[1], 'pictureUrl': image_binary,
                     'role': rol, 'username': user[5]}
        
        

        if user[4] == password:
            return jsonify({'user_data': user_data,  'mensaje': 'Inicio de sesion correctamente'}, 200)

        return jsonify({'mensaje': 'Inicio de sesion fallido'}), 401

    except sqlite3.Error as e:
        print("sqlite: ", e)
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        print("exeption: ", e)
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()


@app.route('/addUsers', methods=['POST'])
def addUsers():

    print("peticion de addUsers")

    conn = sqlite3.connect('../Back-end/Database/MABG.db')
    cursor = conn.cursor()

    try:
        data = request.get_json()
        name = data['usuario']
        username = data['username']
        password = data['password']
        rol = data['rol']

        print("data: ", name, username, password, rol)

        cursor.execute("INSERT INTO Users(name, role_id, password, username) VALUES (?, ?, ?, ?)",
                       (name, rol, password, username))
        conn.commit()
        conn.close()
        print("Finished correctly")
        return jsonify({'mensaje': 'Registro de usuario correcto'}, 200)

    except sqlite3.Error as e:
        print("error", e)
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
