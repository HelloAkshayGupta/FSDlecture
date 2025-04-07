const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())
const database=[{id:1,name:'mohan'},
    {id:2,name:'deepak',age:20}
]

//Create(C)
app.post('/users',(req,res) =>{
    const newuser={
        id: database.length+1,
        name: req.body.name,
        age: req.body.age
    }
    database.push(newuser);
    res.status(201).json({
        message: 'user created',
        user: newuser
    })
})
//Read(R) --> read all

app.get('/users',(req,res) =>{
    res.json(database);
    });

//Read(R) --> read one
app.get('/users/:id', (req, res) => {
    const userid = parseInt(req.params.id)
    const user = database.find(u=> u.id == userid)
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({
            message: 'user not found'
        })
    }
})

//Update(U)
app.put('/users/:id',(req,res) =>{
    const userid = parseInt(req.params.id)
    const userIndex=database.findIndex(u=> u.id == userid)
    if(userIndex!=-1){
        database[userIndex]={...database[userIndex],...req.body}
        res.json(database[userIndex])
    }
    else{
        res.status(404).json({
            message: 'user not found'
        })
    }  
    
})

//Delete(D)
app.delete('/users/:id',(req,res) =>{
    const userid=parseInt(req.params.id);
    const userIndex=database.findIndex(u=> u.id == userid)
    if (userIndex != -1) {
        const deleteUser=database.splice(userIndex,1)
        res.json({
            message: 'user deleted',
            user: deleteUser
        })
    }
    else{
        res.status(404).json({
            message: 'user not found'
        })
    }
})


app.listen(port,() => {
    console.log(`app is run at ${port}`);
})
