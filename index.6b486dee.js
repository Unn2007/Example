!function(){var n=document.querySelector(".btn"),o=document.querySelector(".user-list");n.addEventListener("click",(function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return function(n){var e=n.map((function(n){return"<li>\n          <p><b>Name</b>: ".concat(n.name,"</p>\n          <p><b>Email</b>: ").concat(n.email,"</p>\n          <p><b>Company</b>: ").concat(n.company.name,"</p>\n        </li>")})).join("");o.innerHTML=e}(n)})).catch((function(n){return console.log(n)}))}));var e=new URLSearchParams({_limit:5,_sort:"name"});console.log(e),console.log(e.toString());var t="https://jsonplaceholder.typicode.com/users?".concat(e);console.log(t)}();
//# sourceMappingURL=index.6b486dee.js.map