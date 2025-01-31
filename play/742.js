// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Special Game 742 detected. Replacing page with embed.");

    // Remove all existing elements from the document
    document.body.innerHTML = "";

    // Create an iframe element for the full-screen embed
    const iframe = document.createElement("iframe");
    iframe.src = "https://nova-chat-0936ca00546b.herokuapp.com";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";

    // Append the iframe to the body
    document.body.appendChild(iframe);
});
