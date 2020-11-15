function AjaxLoad (){
    this.http = new XMLHttpRequest();
}

AjaxLoad.prototype.get = function (url,callback){
    this.http.open ("GET",url,true)
    let shelf = this;
    this.http.onload = function (){
        if(shelf.http.status === 200) {
            callback(null, shelf.http.responseText)
        }else{
            callback("Erorr " + shelf.http.status)
        }
    
    }
 this.http.send();
}
AjaxLoad.prototype.post = function (url,data,callback){
    this.http.open ("POST",url,true)
    this.http.setRequestHeader('Content-type','application/json')
    let shelf = this;
    this.http.onload = function (){
        callback(null, shelf.http.responseText)
    
    }
 this.http.send(JSON.stringify(data));
}

AjaxLoad.prototype.put = function (url,data,callback){
    this.http.open ("PUT",url,true)
    this.http.setRequestHeader('Content-type','application/json')
    let shelf = this;
    this.http.onload = function (){
        callback(null, shelf.http.responseText)
    
    }
 this.http.send(JSON.stringify(data));
}
AjaxLoad.prototype.delete = function (url,callback){
    this.http.open ("DELETE",url,true)
    this.http.setRequestHeader('Content-type','application/json')
    let shelf = this;
    this.http.onload = function (){
        callback(null, "Post Deleted")
    
    }
 this.http.send();
}