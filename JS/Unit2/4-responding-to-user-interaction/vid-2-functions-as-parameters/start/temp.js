function exec (func, arg){
    func(arg);
}

window.setTimeout ((something)=> {
    console.log(something);
},3000, "Hi there");