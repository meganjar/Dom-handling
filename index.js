// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//4. 
topMenuEl.classList.add('flex-around');

//PART3/
//1.
//2.
//3.
//4.
// for (let menuLinks of menuLinks) {
//     let linkElement = document.createElement("a");
//     linkElement.setAttribute("href", menuLinks.href)
//     linkElement.textContent = (menuLinks.text);
//     topMenuEl.appendChild(linkElement);
// // 
// }
// console.log(topMenuEl);
// same loop using a traditional for vs for...of
for (let i = 0; i < menuLinks.length; i++) {
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", menuLinks[i].href)
    linkElement.textContent = (menuLinks[i].text);
    topMenuEl.appendChild(linkElement);
}



//PART3: Creating the submenu
//1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");
//console.log("subMenuEl Element: ", subMenuEl )
//2.
subMenuEl.style.height = "100%";

//3.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//4.
subMenuEl.classList.add('flex-around');

//setting position properties
//1.
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Adding Menu Interaction
//Select and cache the all of the <a> elements inside of 
// topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll("a");

/*2. Attach a delegated 'click' event listener to topMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.
The second line of code of the function should immediately return if the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working.*/
let submenuLinks = {};
topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (!event.target.matches("a")) {
        return;
    }

    // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
    const clickedLink = event.target;

    if (clickedLink.classList.contains("active")) {
        clickedLink.classList.remove("active")
        subMenuEl.style.top = "0";
    }

    else {
        topMenuLinks.forEach(link => {
            link.classList.remove("active")
    
            clickedLink.classList.add("active")
        })

        // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):

        // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
      
     
            if (clickedLink.text!=="about") {
                subMenuEl.style.top = "100%"; 
                
                return;
            } else {
                subMenuEl.style.top = "0";
                console.log(subMenuEl.style.top)}
        

       
        // Otherwise, set the CSS top property of subMenuEl to 0.
        // Hint: Caching the "link" object will come in handy for passing its subLinks array later.
    }
})




// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.

// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
function buildSubMenu(subLinks) {
// Clear the current contents of subMenuEl.
    subMenuEl.innerText = "" ;
subLinks.forEach(link => {
    let subLinkElement = document.createElement("a");
    subLinkElement.setAttribute("href", link.href);
    subLinkElement.textContent = link.text;
    subMenuEl.appendChild(subLinkElement);


})
    console.log(subMenuEl)
}
buildSubMenu()


// Create an <a> element.
// Add an href attribute to the <a>, with the value set by the href property of the "link" object.
// Set the element's content to the value of the text property of the "link" object.
// Append the new element to the subMenuEl

