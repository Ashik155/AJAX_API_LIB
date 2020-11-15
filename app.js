const fromlib = new AjaxLoad()
fromlib.get("https://jsonplaceholder.typicode.com/posts", function(err,post){
    if(err){
        console.log("DONE")
    }else{
        console.log("DONE")
    }
})

const data = {
    'title' : " Hey There, This is From Ashik",
    'body' : " Ashik is learning JavaScript"
}

fromlib.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }   
})
fromlib.get("https://jsonplaceholder.typicode.com/posts/1", function(err,post){
    if(err){
        console.log("err")
    }else{
        console.log(post)
    }
})
fromlib.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }   
})
fromlib.delete("https://jsonplaceholder.typicode.com/posts/2", function(err,post){
    if(err){
        console.log("DONE")
    }else{
        console.log(post)
    }
})