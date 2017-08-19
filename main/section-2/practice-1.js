'use strict';

module.exports = function countSameElements(collection) {
    let result =[];
    collection.forEach((item) =>{
        let finded = result.find((value) => value['key']== item)
        if (finded){
            finded.count++;
        }else{
            result.push({key:item,count:1})
        }
    })
    return result
}
