import sqlite3
conexion = sqlite3.connect("MABG.db")
cursor = conexion.cursor()

# Create table "Roles  ✅"
cursor.execute("CREATE TABLE IF NOT EXISTS Roles( id INTEGER PRIMARY KEY, role VARCHAR(50)  )")

# Create table "Users  ✅"
cursor.execute('''CREATE TABLE IF NOT EXISTS Users (
                    id INTEGER PRIMARY KEY,
                    name VARCHAR(50),
                    picture TEXT,
                    role_id INTEGER,
                    FOREIGN KEY (role_id) REFERENCES Roles(id)
                  )''')

# Create table "Products ✅ "
cursor.execute('''CREATE TABLE IF NOT EXISTS Products (
                    id INTEGER PRIMARY KEY,
                    name VARCHAR(50),
                    category VARCHAR(50),
                    unitaryPrice REAL,
                    quantity INTEGER,
                    dateExpiry DATE,
                    discount INTEGER,
                    cost REAL
                  )''')
# Create table "Sales_details✅"
cursor.execute('''CREATE TABLE IF NOT EXISTS Sales_details (
                    id INTEGER PRIMARY KEY,
                    id_sale INTEGER,
                    id_product INTEGER,
                    quantity INTEGER,
                    productName VARCHAR(50),
                    unitaryPrice,REAL,
                    import REAL,
                    FOREIGN KEY (id_product) REFERENCES Products(id)
                    
                  )''')


# Create table "Sales✅"
cursor.execute('''CREATE TABLE IF NOT EXISTS Sales (
                    id INTEGER PRIMARY KEY,
                    total REAL,
                    date DATE,
                    id_user INTEGER,
                    FOREIGN KEY (id) REFERENCES Products(id_sale)
                  )''')


# Create table "Cash cuts"
cursor.execute('''CREATE TABLE IF NOT EXISTS Cash_cuts (
                    id INTEGER PRIMARY KEY,
                    sales REAL,
                    date DATE,
                    lastAmount REAL,
                    lastDate DATE
                  )''')

conexion.commit()
conexion.close()





print ("finished")