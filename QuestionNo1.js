let obj1 = { name: 'Person 1',age:5};
let obj2 = { age:5,name: 'Person 1'};

// obj1 == obj2
function compareObjects(obj1, obj2){
    const keys1= Object.keys(obj1).sort(); 
    const keys2 = Object.keys(obj2).sort();
    
    const stringifiedKeys1 = JSON.stringify(keys1); //"['age', 'name']"
    const stringifiedKeys2 = JSON.stringify(keys2); //"['age', 'name']"
    // str1 == str2
    if(stringifiedKeys1 == stringifiedKeys2){
        for(var key in obj1){ //takes the key
            if(obj1[key] != obj2[key]){ //true
                return 'Not Equal'
            }
        }
        return 'Equal'
    }else{
        return 'Not Equal'
    }
}

const compare = compareObjects(obj1, obj2);

console.log(compare);