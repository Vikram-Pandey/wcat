//cat command
//node wcat.js [option] [filepath]
//1: node wcat.js filepath-> display content of a file
//2: node wcat.js filepath1 filepath2 -> display contents of all files
//3: node wcat.js -s filepath : this will remove spaces in between multiple lines
//-n -> gives numbering to all lines
//-b -> gives numbering to only lines with data.

//1) node wcat.js filepath=> display the contents of the file in a terminal
const fs=require("fs");
let inputArray=process.argv.slice(2); //returns command line arguments passed. It is sliced starting 2 to ignore node and wcat.js
//console.log(inputArray);

let optionsArr=[];

let filesArr=[];

//Added files path in file array

for(let i=0;i<inputArray.length;i++){
    let firstChar=inputArray[i].charAt(0);
    console.log(firstChar);
    if(firstChar=='-'){
        optionsArr.push(inputArray[i]);
    }
    else{
    filesArr.push(inputArray[i]);
    }
}

console.log(filesArr);

//Check if the file exist 

for(let j=0;j<filesArr.length;j++){
    //check if the file exist in the system
    let doesExist=fs.existsSync(filesArr[j]);

    if(!doesExist){
        console.log("File does not exist");
        return;
    }
}


//read the contents of the file


let content="";

for(let i=0;i<filesArr.length;i++){
    let filecontent=fs.readFileSync(filesArr[i]);

    content+=filecontent+"\n";
}

console.log(content);


//options: -n

//create a function to add numbering to file input

let contentArr=content.split("\n");

console.log(contentArr);



