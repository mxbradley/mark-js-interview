
//  1. Find Highest Frequency (findHighestFreq)
//
//  Goal: find the most frequent occurrence in an array
//
//  Input: an array (<inputArr>) i.e. [2, 4, 9, 4, 2, 32, 4, 5, 2, 1]
//
//  Output: most frequent occurrence i.e. '4' in the above example
//
//  Note: if there is no winner, return 'null'

export function findHighestFreq(inputArr) {

  /*<YOUR CODE HERE>*/
    let tracker = {};

    inputArr.forEach((element, index) => {
        if ( tracker.hasOwnProperty(element) ) {
            tracker[element].count++;
        } else {
            tracker[element] = { index: index, count: 1 };
        }
    });

    if ( Object.keys(tracker) === 0 ) { return null; }

    let record = 0;
    let recordElement = null;
    let instances = 0;

    // console.log( JSON.stringify(tracker) );

    for (let element in tracker) {
        // console.log(`Testing: ${tracker[element]} against record: ${record}`);

        if (tracker[element].count > record) {
            recordElement = tracker[element].index;
            record = tracker[element].count;
            instances = 1;
        } else if (tracker[element].count === record) {
            instances++;
        }
    }

    let result = (instances > 1 ? null : inputArr[recordElement]);

    return result;
}




//  2. Get Property Array (getPropArr)
//
//  Goal: return an array of values of a specific property from an array of objects
//
//  Input: an array of objects (<objects>), and a property string (<field>) i.e.
//
//    objects = [{id: 1, name: 'joe'}, {id: 2, name: 'tom'}, {id: 3, name: 'mike'}]
//
//    field   = 'name'
//
//  Output: an array of values i.e. ['joe', 'tom', 'mike'] in the above example
//
//  Note: if <objects> is undefined, return 'null'

export function getPropArr(objects, field) {

  /*<YOUR CODE HERE>*/
    // if ( objects == null || objects == "undefined" ) { return null; }
    if ( !objects ) { return null; }

    let results = Array();

    objects.forEach(element => {
        if ( element.hasOwnProperty(field) ) {
            results.push(element[field]);
        }
    });

    if (results.length === 0) { return null };

    return results;
}




//  3. Sort Object Array (sortObjArr):
//
//  Goal: sort an object array in a particular order based on field value
//
//  Input: an array of objects (<objects>), a property string (<field>), and an <order> i.e.
//
//    'asc'  = ascending:
//              A, B, C, D (strings / alphabetically)
//              1, 2, 3, 4 (numbers or counts / numerically)
//
//    'desc' = descending:
//              D, C, B, A
//              4, 3, 2, 1
//
//  Output: the initial array of <objects> sorted by <field> in the appropriate <order>
//
//    Reference './tests/mockUsers.js' for the user data structures
//
//  Note: should be able to sort objects based on the following fields:
//
//    firstName (string / alphabetically)
//    lastName (string / alphabetically)
//    email (string / alphabetically)
//    groups (count / numerically)
//    age (number / numerically)

export function sortObjArr(objects, field, order) {

  /*<YOUR CODE HERE>*/
    // console.log( JSON.stringify(objects[0][field]) );

    if ( !objects ) { return null; }

    objects.sort(function(a, b) {
        if (order === 'asc') {
            if (a[field] > b[field]) {
                return 1;
            } else if (a[field] < b[field]) {
                return -1;
            } else {
                return 0;
            }
        } else {
            if (a[field] < b[field]) {
                return 1;
            } else if (a[field] > b[field]) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    // console.log( JSON.stringify(objects[0][field]) );
    // console.log( "---------------------" );

    return objects;
}
