function getData(){
    console.log("fetching data...", Math.random())
}

const debounce = function ( ){
    let timer;
return function(){
    // let context= this;
    // args = arguments;
    clearTimeout(timer)
  
    timer= setTimeout(()=>{
        getData()
    }, 300)
  
}
  
}

const betterFunction= debounce()


