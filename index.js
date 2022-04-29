const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
var shoeData = require('./public/shoes.json')
const port = 3000



app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/Templates/products.html'))
})

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, './public/Templates/form.html'))
})


// Function to save data in JSON file
const savedata = (newShoeData) => {
  const finished = (error) => {
    if(error){
      console.error(error)
      return;
    }
  }

  const jsonData = JSON.stringify(newShoeData, null,2)
  fs.writeFile('./public/shoes.json',jsonData,finished)
}


app.post('/form', (req, res) => {
  shoeData.shoes.push(req.body);
  newShoeData = shoeData.shoes
  zzz = {"shoes" : newShoeData}
  res.sendFile(path.join(__dirname, 'public/Templates/fromsubmitted.html'))
  savedata(zzz)
  console.log(shoeData)
})

// For error 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public/Templates/pagenotfound.html'))
})
  

app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port 3000');
  });
  