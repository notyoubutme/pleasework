   function myFunction(id) 
             {
               
               
                        var form = document.getElementById(id);
                        form.submit();
                         event.preventDefault();

                        var name = document.getElementById('name').value;
                        var pass =  document.getElementById('pass').value;
                       
                        loginrequest(name, pass)
                       //call a http request;
                      //  alert(name +" "+pass);
                       // document.getElementById('name').value = "check";
                
             }

             function loginrequest(log, pass){
                let reqbod = {
                        login: log,
                        password: pass
                }

                let JSONbody = JSON.stringify(reqbod)
                let req = new XMLHttpRequest()
                req.open("POST", "http://localhost:8080/signup")
                req.setRequestHeader("Content-Type", "application/json")
                req.send(JSONbody)

                req.onload = function() {
                        //alert('Loaded: ' + req.status + ' ' + req.response)
                        if(req.status){
                                document.location.href = "/diploma/homepage.html";
                        }
                }

                req.onerror = function() {
                                alert("Conection error" + req.error);
                            document.location.href = "/diploma/homepage.html";

                }

             }  