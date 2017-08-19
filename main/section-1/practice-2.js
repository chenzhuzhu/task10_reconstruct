'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   return collectionA.filter((item)=>{
       return collectionB[0].includes(item)
   })
}
