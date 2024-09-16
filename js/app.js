/*let aside = document.querySelector("aside");
let posts = document.querySelector(".posts");

let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");

request.responseType = "json";

request.send();

request.onload = function () {
  if (this.status == 200 && this.readyState == 4) {
    let users = this.response;
    users.forEach((element) => {
      let userElement = document.createElement("div");
      userElement.setAttribute("user-id", element.id);
      userElement.classList.add("userElement");
      aside.append(userElement);

      let title = document.createElement("h4");
      userElement.append(title);
      title.textContent = element.name;

      let email = document.createElement("span");
      title.after(email);
      email.textContent = element.email;

      let overlay = document.createElement("div");
      userElement.append(overlay);
      overlay.classList.add("overlay");
    });
  }
};

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("overlay")) {
    posts.innerHTML = "";
    for (
      let i = 0;
      i < this.document.querySelectorAll(".userElement").length;
      i++
    ) {
      document.querySelectorAll(".userElement")[i].classList.remove("active");
    }
    e.target.parentElement.classList.add("active");

    let request = new XMLHttpRequest();

    request.open("GET", `https://jsonplaceholder.typicode.com/posts`);

    request.responseType = "json";

    request.send();

    request.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        let arr = [];
        let response = this.response;
        response.forEach((element) => {
          if (
            e.target.parentElement.getAttribute("user-id") == element.userId
          ) {
            arr.push(element);
          }
        });
        arr.forEach((e) => {
          let post = document.createElement("div");
          posts.append(post);
          post.classList.add("post");

          let title = document.createElement("h4");
          title.classList.add("title");
          post.append(title);
          title.textContent = e.title;

          let body = document.createElement("h4");
          body.classList.add("body");
          post.append(body);
          body.textContent = e.body;
        });
      }
    };
  }
});*/
let aside = document.querySelector("aside");
let posts = document.querySelector(".posts");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    let users = result;
    users.forEach((element) => {
      let userElement = document.createElement("div");
      userElement.setAttribute("user-id", element.id);
      userElement.classList.add("userElement");
      aside.append(userElement);

      let title = document.createElement("h4");
      userElement.append(title);
      title.textContent = element.name;

      let email = document.createElement("span");
      title.after(email);
      email.textContent = element.email;

      let overlay = document.createElement("div");
      userElement.append(overlay);
      overlay.classList.add("overlay");
    });
  }).then(() => {
    window.addEventListener("click", function (e) {
      if (e.target.classList.contains("overlay")) {
        posts.innerHTML = "";
        for (
          let i = 0;
          i < this.document.querySelectorAll(".userElement").length;
          i++
        ) {
          document.querySelectorAll(".userElement")[i].classList.remove("active");
        }
        e.target.parentElement.classList.add("active");
    
        let request = new XMLHttpRequest();
    
        request.open("GET", `https://jsonplaceholder.typicode.com/posts`);
    
        request.responseType = "json";
    
        request.send();
    
        request.onload = function () {
          if (this.readyState === 4 && this.status === 200) {
            let arr = [];
            let response = this.response;
            response.forEach((element) => {
              if (
                e.target.parentElement.getAttribute("user-id") == element.userId
              ) {
                arr.push(element);
              }
            });
            arr.forEach((e) => {
              let post = document.createElement("div");
              posts.append(post);
              post.classList.add("post");
    
              let title = document.createElement("h4");
              title.classList.add("title");
              post.append(title);
              title.textContent = e.title;
    
              let body = document.createElement("h4");
              body.classList.add("body");
              post.append(body);
              body.textContent = e.body;
            });
          }
        };
      }
    });
  })


