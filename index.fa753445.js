const o=document.querySelector(".btn"),e=document.querySelector(".user-list");o.addEventListener("click",(()=>{fetch("https://jsonplaceholder.typicode.com/users").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>function(o){const n=o.map((o=>`<li>\n          <p><b>Name</b>: ${o.name}</p>\n          <p><b>Email</b>: ${o.email}</p>\n          <p><b>Company</b>: ${o.company.name}</p>\n        </li>`)).join("");e.innerHTML=n}(o))).catch((o=>console.log(o)))}));const n=new URLSearchParams({_limit:5,_sort:"name"});console.log(n),console.log(n.toString());const t=`https://jsonplaceholder.typicode.com/users?${n}`;console.log(t);
//# sourceMappingURL=index.fa753445.js.map