fetch('../html/navbar-footer.html')
      .then(response => response.text())
      .then(data => {
          const fullPath = window.location.pathname;
          const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1).split(".")[0];
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          doc.querySelectorAll(".left-list a").forEach((entry)=>{
            if(entry.textContent.toLowerCase() === "home"){
                entry.setAttribute("class","active");
            }else if(fileName === entry.textContent.toLowerCase()){
                doc.querySelector(".left-list a").removeAttribute("class");
                entry.setAttribute("class","active");
            }
          })
          document.getElementById('header').appendChild(doc.getElementById("upper-nav"));
          document.getElementById('header').appendChild(doc.getElementById("lower-nav"));
          document.getElementById('footer').appendChild(doc.getElementById("foot-row1"));
          document.getElementById('footer').appendChild(doc.getElementById("foot-row2"));
      })
      .catch((error)=>{console.log(error)});