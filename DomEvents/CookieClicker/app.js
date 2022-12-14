let cookieClick = document.querySelector("#cookieButton")
let cookieCounter = 0;
cookieClick.addEventListener("click", function ()
{
    cookieCounter++;
    let newCounter = document.querySelector("#counterCookie");
    newCounter.textContent = cookieCounter;
})

