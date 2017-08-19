'use strict';


module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.forEach((item)=>{
        if(objectB['value'].includes(item['key'])){
            item['count']=item['count']-Math.floor(item['count']/3);
        }
    })
    return collectionA
}
