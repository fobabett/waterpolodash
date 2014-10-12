// create your project file to "whatever.js" for example cholo.js
// put this code in here!
 
module.exports = {
  // compact: function(){},
  // difference: function(){},
  //etc...
  
  // ARRAYS
  // _.compact: creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are all falsey.
  compact: function(array){
    for(var i =0; i<array.length; i++){
      if((array[i] === 0) || (array[i] === false) || (array[i] === '') || (array[i] === undefined) || (array[i] === NaN)){
        array.splice(i);
        return array;
      } 
    }
  },
  //_.difference: Creates an array excluding all values of the provided arrays using strict equality for comparisons, i.e. ===.
  difference: function(){

  },
  // _.findIndex: This method is like _.find except that it returns the index of the first element that passes the callback check, instead of the element itself.
  findIndex: function(){

  },
  // _.findLastIndex: this method is like _.findIndex except that it iterates over elements of a collection from right to left.
  findLastIndex: function(){

  },
  // _.indexOf: Gets the index at which the first occurrence of value is found using strict equality for comparisons, i.e. ===. If the array is already sorted providing true for fromIndex will run a faster binary search.
  indexOf: function(){

  },
   // _.initial: Gets all but the last element or last n elements of an array.
    initial: function(array){
     array.pop();
     return array;
   },
  // _.last: gets the last element or n elements of an array.
  last: function(array){
    return array[array.length-1];
  },
  // _.rest: gets all but the first element or first elements of an array.
  rest: function(array){
    array.shift();
    return array;
  },

}


 
