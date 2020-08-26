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
<b>GET By warehouse_code and store_code</b> <br>
Get specific data store (GET) : <i>http://localhost:3000/api/warestore/:id</i>
<br>
Get specific data warehouse (GET) : <i>http://localhost:3000/api/warestore/:id</i>
<br><br>
(body: x-www-form-urlencoded) <br>
Insert data Store + Auto generated data warehouse using params <i>is_store:true</i>(POST) : <i>http://localhost:3000/api/warestore/</i>
<br>
Insert data Warehouse using params <i>is_store:false</i>(POST) : <i>http://localhost:3000/api/warestore/</i>
<br><br>

<b>Update by _ID</b><br>
Update data store (PUT) : <i>http://localhost:3000/api/warestore/:id</i>
<br>
Update data warehouse (PUT) : <i>http://localhost:3000/api/warestore/:id</i>
<br><br>
<b>Delete by _ID</b><br>
Delete data store (DELETE) <i>http://localhost:3000/api/warestore/:id</i>
<br>
Delete data warehouse (DELETE) <i>http://localhost:3000/api/warestore/:id</i>