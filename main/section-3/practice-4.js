'use strict';

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

function expandArray(collection){
    let result=[]
    collection.forEach((item)=>{
        if(item.includes('-')) {
            delAndPush(result, item,'-');
        }else{
            result.push(item)
        }
    })
    return result
}

function summarize(collection) {
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

function discount(collection, collectionCompare) {
    collection.forEach((item)=>{
        if(collectionCompare.includes(item['key'])){
            item['count']=item['count']-Math.floor(item['count']/3);
        }
    })
    return collection;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let expandedArray = expandArray(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
