module.exports = {
    split: function (str) {
        let arr = str.split('');
        let res;



        for(let i = 0; i < arr.length; i++){
                arr[i] = isNormalInteger(arr[i]) ? parseInt(arr[i]) : arr[i];
        }

        if (typeof (arr[1]) === 'string') {
            res = `${arr[0]} ${str.slice(1)}`;
        }
        else if (typeof (arr[2]) === 'string') {
            res = `${arr[0]}${arr[1]} ${str.slice(2)}`;
        }
        else if (typeof (arr[3]) === 'string') {
            res = `${arr[0]}${arr[1]}${arr[2]} ${str.slice(3)}`;
        }
        else{
            res = `${arr[0]}${arr[1]}${arr[2]}${arr[3]} ${str.slice(4)}`;
        }

        //this one is just a precaution
        return(res);
    }
};

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}