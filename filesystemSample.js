const fs = require('fs');
//create a file
fs.writeFile('test.txt','this is a example file',(err)=>{
    if(err)
        console.log('errored');
    else
       console.log('file created successfully');
});