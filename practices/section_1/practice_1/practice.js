function collect_same_elements(collection_a, collection_b) {
    //在这里写入代码
    //console.log(collection_a[0]);
    var result = [];
    for(var i=0; i<collection_a.length; i++) {
        for(var j=0; j<collection_b.length; j++) {
            if(collection_a[i] == collection_b[j]) {
                //console.log(collection_a[i])
                result.push(collection_a[i]);
            }
        }
    }
    return result;
}

module.exports = collect_same_elements;
