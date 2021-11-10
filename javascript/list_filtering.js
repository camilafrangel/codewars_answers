function filter_list(l) {
    return l.filter((num) => {
       return typeof num !== 'string'
     })
   }