// Expects the array to be sorted
//
// This algorithm uses more space than necessary,
// because it slices the array (copies), rather
// than narrowing the indicies down
function binary_search(arr, target) {
    if (arr.length < 1) return -1;

    var middle = ~~(arr.length / 2);
    var middle_value = arr[middle];

    if (middle_value > target) {
        return binary_search(arr.slice(0, middle), target);
    } else if (middle_value < target) {
        var v = binary_search(arr.slice(middle+1), target)
        if (v < 0) {
            return v;
        } else {
            return middle + 1 + v;
        }
    }

    return middle;
}

function binary_search_inplace(arr, target) {
    if (arr.length < 1) return -1;
    
    var start = 0;
    var end = arr.length -1;
    while (end - start > 0) {
        var middle = ~~((end - start) / 2);
        var middle_value = arr[middle];
        
        if (middle_value == target) {
            return middle;
        }
        if (middle_value < target) {
            start = middle + 1;
        } else { // (middle_value > target)
            end = middle - 1;
        }
    }
}
