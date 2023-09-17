import sqlite3

conexion = sqlite3.connect("MABG.db")
cursor = conexion.cursor()

# Ejecutar la sentencia SQL para agregar la columna "lol" a la tabla "Users"
cursor.execute("ALTER TABLE Users ADD COLUMN username VARCHAR(50)")

# Confirmar la transacción y cerrar la conexión
conexion.commit()
conexion.close()
