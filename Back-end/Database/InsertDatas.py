import sqlite3

try:
    conexion = sqlite3.connect("MABG.db")
    cursor = conexion.cursor()

    #cursor.execute("INSERT INTO Roles(id,role)VALUES(2,'Owner');")
    #cursor.execute("INSERT INTO Roles(id,role)VALUES(3,'User');")
    #cursor.execute("INSERT INTO Roles(id,role)VALUES(1,'Developer');")

    #cursor.execute("INSERT INTO Users(id,name,picture,role_id)VALUES(1,'Eliezer','url',1);")
    #cursor.execute("INSERT INTO Users(id,name,picture,role_id)VALUES(2,'Merari','url',2);")
    #cursor.execute("INSERT INTO Users(id,name,picture,role_id)VALUES(3,'Cliente','url',3);")

    #cursor.execute("INSERT INTO Products(id,name,category,unitaryPrice,quantity,dateExpiry,discount,cost)VALUES (1,'Paracetamol','Analgesicos',50.5,10,'10/12/23',0,25)")
    #cursor.execute("INSERT INTO Products(id,name,category,unitaryPrice,quantity,dateExpiry,discount,cost)VALUES (2,'Doloneurobion','Analgesicos',20.5,10,'11/10/2032',0,15)")
    #cursor.execute("INSERT INTO Products(id,name,category,unitaryPrice,quantity,dateExpiry,discount,cost)VALUES (3,'Paracitol','Desparacitantes',40.8,10,'19/11/23',0,20)")


    
    conexion.commit()
    conexion.close()
    print("Finished correctly")
except sqlite3.Error as error:
    print("Error:", error)
