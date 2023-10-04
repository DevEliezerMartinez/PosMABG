
import sqlite3
# Conecta a la base de datos
conexion = sqlite3.connect("MABG.db")
cursor = conexion.cursor()

# Ejecutar la consulta SQL para obtener la suma de los totales de ventas
#cursor.execute("SELECT SUM(total) FROM Sales")
username = "1"
       
cursor.execute("SELECT * FROM Users ")
# Recuperar el resultado de la consulta
resultado = cursor.fetchall()

# El resultado es una tupla con un solo valor que es la suma total
#suma_total_ventas = resultado[0]

# Imprimir la suma total de ventas
print("Result:",resultado )

# Cerrar la conexión a la base de datos
conexion.close()
