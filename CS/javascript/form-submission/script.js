document.addEventListener ("DOMContentLoaded", () => {
     const form = document.getElementById("userInfo")
     form.addEventListener ('submit', function (event) ){
          event.preventDefault)
          name = document.getElementById("userInfo")
          email = document.getElementById("email")
          message = document.getElementById("message")
          if (name && email && message) {
               alert( Form submitted successfully!\name: S{name)\nEmail: S{email)\nMessage: S{message)');
          }
          else{
          }
