let sum = (a, b) => a + b;

let arr = [
    'mahta', 
    'mehrad', 
    'zohreh',
    'morteza'
]

let compileAndroidCode = () => {
    throw new ConfigError('you are using wrong JDK');
}

let foreach = (items, callback) => {
    for (let index = 0; index < items.length; index++)
    callback(items[index])
}

module.exports = {
    sum, 
    arr,
    compileAndroidCode,
    foreach
};