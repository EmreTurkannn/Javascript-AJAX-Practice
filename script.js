class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    get(url, callback) {
        this.xhr.open("GET", url);
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Hata alindi", null);
            }
        };
        this.xhr.send();
    }
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON Verisi göndereceğiz.

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Hata alındı", null);
            }
        }


        this.xhr.send(JSON.stringify(data)); //JSONA GİDECEK DATA STRİNG OLMALI.
    }
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // VERİYİ JSON OLARAK GÖNDERECEĞİMİZİ SEÇİYORUZ.
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Put Req Hata alındı", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url, callback) {
        this.xhr.open("DELETE", url);
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, "veri silme işlemi başarılı.");
            }
            else {
                callback("DELETE Hata alindi", null);
            }
        };
        this.xhr.send();

    }
}


const req = new Request();
req.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});


req.post("https://jsonplaceholder.typicode.com/albums", { userId: 3, title: "Thriller" }, function (err, response) {

    if (err === null) {
        console.log(response);
    }

    else {
        console.log(err);
    }
});

req.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 143, title: "Emre Turkan" }, function (err, response) {
    if (err===null){
        console.log(response);
    }
    else{
        console.log(err);
    }

});

req.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
  if(err===null){
      console.log("veri silme başarılı");
  } 
  else{
      console.log(err);
  }     
})
