const removeFromArray = function(list) {
    const args = Array.prototype.slice.call(arguments, 1);



    for (let i = 0; i < args.length; i++){
        let index = list.indexOf(args[i]);

        if (index >= 0 ){
            list.splice(index, 1);
        }
    }
  
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
