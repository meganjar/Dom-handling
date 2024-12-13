// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

//2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property; Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.backgroundColor = 'var(--main-bg)';

//3. Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; 
// pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`; 

//4. Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

//PART 2:
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEl = document.querySelector("#top-menu")
//console.log(topMenuEl);
//2.
topMenuEl.style.height = "100%";

//3.
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//4. 
topMenuEl.classList.add('flex-around');

//PART3/
//1.
//2.
//3.
//4.
for (let i = 0; i < menuLinks.length; i++){
let linkElement = document.createElement("a");
linkElement.setAttribute("href", menuLinks[i].href)
linkElement.textContent = (menuLinks[i].text);
topMenuEl.appendChild(linkElement);
console.log(linkElement);
}

