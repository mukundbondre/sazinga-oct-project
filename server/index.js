const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sazinga_oct_project",
    password: ""
});

//check api
app.get('/api', (req, res) => {
    res.send('Hello World');
});


//user data
app.get('/api/user', (req, res) => {
    const query = "SELECT * FROM `user`"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//user add
app.post('/api/user/add', (req, res) => {
    const { username, email, password, designation } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        else {
            const query = "INSERT INTO `user`(`username`, `email`, `password`, `designation`) VALUES (?,?,?,?)";
            db.query(query, [username, email, hash, designation], (err, result) => {
                if (err) throw err;
                res.send(result);
            });
        }
    });
});

//user authenticate
app.post('/api/user/authentication', (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT `username`, `password` FROM `user` WHERE `username`=?";
    db.query(query, [username], (err, result) => {
        if (err) throw err;
        else {
            console.log("check the user data ", result[0]);
            if (result[0]) {
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) throw err;
                    else {
                        bcrypt.compare(password, hash, (err, match) => {
                        // bcrypt.compare(password, result[0].password, (err, match) => {
                            if (err) throw err;
                            else {
                                if (match) {
                                    jwt.sign({ username, password }, 'abc', { expiresIn: '1h' }, (err, token) => {
                                        if (err) throw err;
                                        console.log('something is wrong:', token);
                                        res.json({ token });
                                    });
                                } else {
                                    res.send({ message: "password is wrong" });
                                }
                            }
                        });
                    }
                })
            } else {
                res.send({ message: "User not found" });
            }
        }
    });
});

//client data
app.get('/api/client', (req, res) => {
    const query = "SELECT * FROM `client`";
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//client add
app.post('/api/client/add', (req, res) => {
    const query = "INSERT INTO `client`(`name`) VALUES (?)";
    db.query(query, [req.body.name], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//client update
app.patch('/api/client/update/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const query = "UPDATE `client` SET `name`=? WHERE `id`=?";
    db.query(query, [name, id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//client view
app.get('/api/client/view/:id', (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM `client` WHERE id = ?";
    db.query(query, id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//client delete
app.delete('/api/client/delete/:id', (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM `client` WHERE `id` = ?";
    db.query(query, id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


//project data
app.get('/api/project', (req, res) => {
    const query = "SELECT * FROM `project`"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//project add
app.post('/api/project/add', (req, res) => {
    const query = "INSERT INTO `project`(`client_id`, `name`) VALUES (?,?)";
    db.query(query, [req.body.clientId, req.body.name], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//project update
app.patch('/api/project/update/:id', (req, res) => {
    const query = "UPDATE `project` SET `name`= ? WHERE `id`=?";
    db.query(query, [req.body.name, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//project view
app.get('/api/project/view/:id', (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM `project` WHERE id = ?";
    db.query(query, id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//project delete
app.delete('/api/project/delete/:id', (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM `project` WHERE `id` = ?";
    db.query(query, id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


//task data
app.get('/api/task', (req, res) => {
    const query = "SELECT * FROM `task`"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//task add
app.post('/api/task/add', (req, res) => {
    const query = "INSERT INTO `task`(`project_id`, `name`) VALUES (?,?)";
    db.query(query, [req.body.projectId, req.body.name], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//task update
app.patch('/api/task/update/:id', (req, res) => {
    const query = "UPDATE `task` SET `name`=? WHERE `id`=?";
    db.query(query, [req.body.name, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//task view
app.get('/api/task/view/:id', (req, res) => {
    const query = "SELECT * FROM `task` WHERE `id` = ?";
    db.query(query, req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//task delete
app.delete('/api/task/delete/:id', (req, res) => {
    const query = "DELETE FROM `task` WHERE `id` = ?";
    db.query(query, req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});