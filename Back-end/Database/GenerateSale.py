import sqlite3

# Conecta a la base de datos
conexion = sqlite3.connect("MABG.db")
cursor = conexion.cursor()

venta = {
    "id_user": 2,
    "total": 220.0,
    "date": "2023-09-10",
    "items": [
        {
            "id_product": 3,
            "quantity": 5,
            "unitaryPrice": 40.8,
            "productName": "Paracitol",
            "import": 200.0
        }
    ]
}


try:
    # Inicia una transacción
    conexion.execute("BEGIN")

    # Inserta la venta en la tabla "Sales"
    cursor.execute("INSERT INTO Sales (total, date, id_user) VALUES (?, ?, ?)",
                   (venta["total"], venta["date"], venta["id_user"]))
    venta_id = cursor.lastrowid  # Obtiene el ID de la venta recién insertada

    # Inserta los detalles de la venta en la tabla "Sales_details"
    for item in venta["items"]:
        cursor.execute("INSERT INTO Sales_details (id_sale, id_product, quantity, productName, unitaryPrice, import) VALUES (?, ?, ?, ?, ?, ?)",
                       (venta_id, item["id_product"], item["quantity"], item["productName"], item["unitaryPrice"], item["import"]))

    # Confirma la transacción
    conexion.execute("COMMIT")
    print("Venta registrada correctamente")

except sqlite3.Error as error:
    # En caso de error, revierte la transacción
    conexion.execute("ROLLBACK")
    print("Error:", error)

finally:
    # Cierra la conexión a la base de datos
    conexion.close()
