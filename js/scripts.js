$(document).ready(function() {
    $("#demo-jquery-button").click(function() {
        $("#demo-paragraph").css("background-color", "red");
        alert($("#demo-paragraph").html());
        setTimeout(function() {
            $("#demo-paragraph").hide();    
            $("#demo-paragraph").fadeIn(5000);
        }, 3000);
    });

    $("#demo-ajax-button").click(function() {
        $.ajax("data.json", {
            method: "GET",
        }).done(function(data) {
            $("#demo-paragraph").html(JSON.stringify(data));
        });
    });
});




// // console.log('Here is my first JS');

// // console.log(document);
// // console.dir(document);

// // Get element
// // const demoParagraph1 = document.getElementById('demo-paragraph');
// // console.log(demoParagraph1);

// // const demoParagraph2 = document.querySelector("#demo-paragraph");
// // console.log(demoParagraph2);


// // Live vs Static
// const liCollectionStatic = document.querySelectorAll('.script-lang');
// console.log('querySelectorAll(\'.script-lang\')', liCollectionStatic.length);

// const liCollectionLive = document.getElementsByClassName('script-lang');
// console.log('getElementsByClassName(\'script-lang\')', liCollectionLive.length);

// // Create element with content
// const newHeader = document.createElement("h1");
// const newHeaderContent = document.createTextNode("A new header");
// newHeader.appendChild(newHeaderContent);

// document.getElementById("new-header-container").appendChild(newHeader);
// // Create element with HTML
// const newParagraph = document.createElement("p");
// newParagraph.innerHTML = "<strong>Great</strong> job!";
// document.getElementById("new-paragraph-container").appendChild(newParagraph);
// // Update element
// document.getElementById("new-paragraph-container").innerText = "Hello world";

// // Remove the element
// const removeElement = document.getElementById("demo-paragraph");
// const removeElementParent = removeElement.parentNode;
// removeElementParent.removeChild(removeElement);

// document.getElementById('demo-button').onclick = function() {alert("hello world")};

// function whereIsTheEventNow() {
//     const event = arguments[0];
//     console.log(event.target.innerText);
//     alert(`Where is the event: ${event.target.innerText}`);
//     event.preventDefault();
// }

// const jsLink = document.getElementById('js-link');
// jsLink.addEventListener('click', whereIsTheEventNow);

// const googleList = document.getElementById('google-ul');
// // googleList.addEventListener('click', whereIsTheEventNow);