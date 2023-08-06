function Send() {
  console.log("hello")

  var name = document.getElementById("name").value;
  var email = document.getElementById("Email").value;
  var sub = document.getElementById("subject").value;

  var body = "name: " + name + "<br/> Email:" + email + "<br/> sub:" + subject;
  console.log(body);
  Email.send({
      SecureToken : "faade13e-004b-4c73-b828-063e3028ff04",
       To: 'officialsherkhan123@gmail.com',
      From: "officialsherkhan123@gmail.com",
       Subject: sub,
       Body: body
     }).then(
       message =>{
        if(message=='OK'){
          swal("Successfull", "Your Data successfully received", "success");
        }
        else{
          swal("Something Wrong", "please try again", "error");
        }
       }
     );
   }
