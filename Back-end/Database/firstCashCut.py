

import sqlite3

# Conecta a la base de datos
conexion = sqlite3.connect("MABG.db")
cursor = conexion.cursor()
sales_total = 700.0
sales_date = "2023-09-16"
last_amount = 500.0
last_date = "2023-09-15"



try:
    # Inicia una transacción
    conexion.execute("BEGIN")
    
    # Inserta la venta en la tabla "Sales"
    cursor.execute("INSERT INTO Cash_cuts (sales, date, lastAmount, lastDate) VALUES (?, ?, ?, ?)",
               (sales_total, sales_date, last_amount, last_date))    
   
    # Confirma la transacción
    conexion.execute("COMMIT")
    print("Corte de caja registrado correctamente")

except sqlite3.Error as error:
    # En caso de error, revierte la transacción
    conexion.execute("ROLLBACK")
    print("Error:", error)

finally:
    # Cierra la conexión a la base de datos
    conexion.commit()
    conexion.close()
