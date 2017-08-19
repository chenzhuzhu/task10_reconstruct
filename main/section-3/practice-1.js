'use strict';


module.exports = function createUpdatedCollection(collectionA, objectB) {

    collectionA.forEach((item)=>{
        if(objectB['value'].includes(item['key'])){
            item['count']--;
        }
    })

    return collectionA
}
