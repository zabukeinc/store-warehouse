# Store-Warehouse


<b>a. Install apps</b> <br>
First, you need to run MYSQLclient on your machine.
<br>
<ul>
  <li>npm install</li>
  <li>npm run build</li>
  <li>npx sequelize-cli db:create</li>
  <li>npm run dev</li>
</ul>

<b>b. Endpoint </b> <br>
Get all data store (GET) <i>http://localhost:3000/api/warestore/store</i>
<br>
Get all data warehouse (GET) : <i>http://localhost:3000/api/warestore/warehouse</i>
<br><br>
<b>GET By warehouse_code</b> <br>
Get specific data store or warehouse (GET) : <i>http://localhost:3000/api/warestore/:id</i>
<br><br>
<b>POST Data</b>
<br>
example input from postman <br>
<i>
{
    "branch_id":79,
    "warehouse_code":"Alone",
    "location_name":"Cimahi",
    "address":"Gunung Batu",
    "phone":"083123",
    "status:true,
    "is_store":false"
}
</i>

<br>
Insert data Store + Auto generated data warehouse using params <i>is_store:true</i>(POST) : <i>http://localhost:3000/api/warestore/</i>
<br>
Insert data Warehouse using params <i>is_store:false</i>(POST) : <i>http://localhost:3000/api/warestore/</i>
<br><br>

<b>Update by id(PK)</b><br>
Update data store (PUT) : <i>http://localhost:3000/api/warestore/:id</i>
<br>
Update data warehouse (PUT) : <i>http://localhost:3000/api/warestore/:id</i>
<br><br>
<b>Delete by id(PK)</b><br>
Delete data store (DELETE) <i>http://localhost:3000/api/warestore/:id</i>
<br>
Delete data warehouse (DELETE) <i>http://localhost:3000/api/warestore/:id</i>
