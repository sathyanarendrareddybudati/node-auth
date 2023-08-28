# RESTful API

This is a RESTful API example based on Node.js and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is an elegant solution to mongodb object modeling for node.js.


---

#### To start setting up the project (for this you need docker initialization otherwise you can follow below setting up project)

Step 1: Clone the repo

```bash
git clone https://github.com/sathyanarendrareddybudati/node-auth
```

Setp 2: cd into the cloned repo and run:

```bash
docker-compose up
```

---

#### To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/sathyanarendrareddybudati/node-auth
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URL=mongodb://localhost:27017
DB_NAME=bee_bros
ACCESS_TOKEN_SECRET=79de2de5d4367af243986c735f3c51e72e149ca3b7de98521cf0c44c8c57aeb7
REFRESH_TOKEN_SECRET=7b8134110b2ec7fcbe055eda7b1a62ac3fb8adfd11e1609b02ecc6900bab641c 
```

Step 4: Start the API by

```bash
npm start
```