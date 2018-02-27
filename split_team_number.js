module.exports = {
    split: function (str) {
        let arr = str.split('');
        let res;



        for(let i = 0; i < arr.length; i++){
                arr[i] = isNormalInteger(arr[i]) ? parseInt(arr[i]) : arr[i];
        }

        if (typeof (arr[1]) === 'string') {
            res = str.slice(0, 1);
        }
        else if (typeof (arr[2]) === 'string') {
            res = str.slice(0, 2);
        }
        else if (typeof (arr[3]) === 'string') {
            res = str.slice(0, 3);
        }
        else{
            res = str.slice(0, 4);
        }

        //this one is just a precaution
        return(res);
    }
};

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}