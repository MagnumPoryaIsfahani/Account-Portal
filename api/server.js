const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const app = express(),
    port = 3080;

users = {}
const path = './db.json'

const fs = require('fs');
const fsPromises = require('fs').promises;

app.use(express.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    fsPromises.readFile(path)
    .then(function(results){
        res.send(JSON.parse(results))
    })
    .catch(function(error){
        res.send("No database exists, create an account to create one")
    })

})

app.post('/api/register', (req, res) => {
    fsPromises.readFile(path)
    .then(function(results){
        results = JSON.parse(results)
        if(req.body.user in results){
            res.send("Username taken, try something else")
        }
        else{
            data = {
                password : req.body.password,
                },
            results[req.body.user] = data
            fsPromises.writeFile(path, JSON.stringify(results))
            res.send("Added user " + req.body.user);
        }
    })
    .catch(function(error){
        data = {
            [req.body.user] : {
                password : req.body.password,              
            }
        }
        fsPromises.writeFile(path, JSON.stringify(data))
        res.send("Added user " + req.body.user);
    });
});

app.post('/api/login', (req, res) => {
    fsPromises.readFile(path)
    .then(function(results){
        results = JSON.parse(results)
        if(req.body.user in results){
            if(results[req.body.user].password === req.body.password){
                res.json({
                    message : "You are logged in",
                    isLoggedIn : true,
                    username : req.body.user
                })
            }
            else{
                res.json({
                    message : "Incorrect password"
                })
            }
        }
        else{
            res.json({
                message : "User does not exist"
            })
        }
        
    })
    .catch(function(error){
        console.log(error)
        res.json({message: "No db exists"})
    });
});

app.post('/api/update', (req, res) => {
    fsPromises.readFile(path)
    .then(function(results){
        results = JSON.parse(results)
        results[req.body.user] = {
            password : req.body.data
        }
        fsPromises.writeFile(path, JSON.stringify(results))
        res.json({message: "Password updated"})
    })
})

app.post('/api/logOut', (req, res) => {
    res.json({
        message : "You have been logged out",
        isLoggedIn : false
    })
})

app.listen(port, () => {
    console.log(`Server listening on port: `, port);
});