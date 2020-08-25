# Store-Warehouse


<b>a. Install apps</b> <br>
First, you need to run mongodb client on your machine.
<br>
<ul>
  <li>npm install</li>
  <li>npm run build</li>
  <li>npm run dev</li>
</ul>

<b>b. Endpoint </b> <br>
Get all data store (GET) <i>http://localhost:3000/api/store</i>
<br>
Get all data warehouse (GET) : <i>http://localhost:3000/api/warehouse</i>
<br><br>
Get specific data store (GET) : <i>http://localhost:3000/api/store/:id</i>
<br>
Get specific data warehouse (GET) : <i>http://localhost:3000/api/warehouse/:id</i>
<br><br>
(body: x-www-form-urlencoded) <br>
Insert data Store + Auto generated data warehouse (POST) : <i>http://localhost:3000/api/store/</i> <br>
<br>
Insert data Warehouse (POST) : <i>http://localhost:3000/api/warehouse/</i>
<br><br>
Update data store (PUT) : <i>http://localhost:3000/api/store/:id</i>
<br>
Update data warehouse (PUT) : <i>http://localhost:3000/api/warehouse/:id</i>
<br><br>
Delete data store (DELETE) <i>http://localhost:3000/api/store/:id</i>
<br>
Delete data warehouse (DELETE) <i>http://localhost:3000/api/warehouse/:id</i>
