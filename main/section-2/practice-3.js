'use strict';

function expandArray(collection){
    let result=[]
    collection.forEach((item)=>{
        if(item.includes('-')) {
            delAndPush(result, item,'-');
        }else if(item.includes(':')){
            delAndPush(result, item,':');
        }else if(item.includes('[')){
            delAndPush2(result, item);
        }else{
            result.push(item)
        }
    })
    return result
}

function pushKeyValue(collection,key,value){
    while(value>0){
        collection.push(key)
        value--;
    }
    return collection;
}
function delAndPush(collection,item,symbol){
    let key = item.split(symbol)[0]
    let value =parseInt(item.split(symbol)[1],10)
    return pushKeyValue(collection,key,value)
}

function delAndPush2(collection,item){
    let key = item.charAt(0)
    let value = parseInt(item.substring(2,item.length-1),10)
    return pushKeyValue(collection,key,value)
}

function countCollection(collection){
    let result =[];
    collection.forEach((item) =>{
        let finded = result.find((value) => value['name']== item)
        if (finded){
            finded.summary++;
        }else{
            result.push({name:item,summary:1})
        }
    })
    return result
}

module.exports = function countSameElements(collection) {
    let expanded = expandArray(collection)
    return countCollection(expanded)

}
