'use strict';
function expandArray(collection){
    collection.forEach((item,index)=>{
        if(item.includes('-')) {
            collection.splice(index, 1);
            delAndPush(collection, item,'-');
        }
        })
    return collection
}

function delAndPush(collection,item,symbol){
    let key = item.split(symbol)[0]
    let value =parseInt(item.split(symbol)[1],10)

    while(value>0){
        collection.push(key)
        value--;
    }
    return collection;
}

function countCollection(collection){
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

module.exports = function countSameElements(collection) {
    let expanded = expandArray(collection)
    return countCollection(expanded)
}
