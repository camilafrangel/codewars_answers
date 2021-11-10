// function positiveSum(arr) {
//     var soma = 0;
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] > 0) {
//        soma += arr[i];
//      }
//     }
//    return soma;
//    }

//Uma solução melhor:
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }