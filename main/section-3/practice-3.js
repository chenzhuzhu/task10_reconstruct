'use strict';

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
    return collection
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
