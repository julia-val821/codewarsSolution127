https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

    function rotate(str){
        let arr = [];
        for(let i = 0; i < str.length; i++){
            str = str.slice(1) + str[0];
            arr.push(str);
        }
        return arr;
    }