window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    visProdukt();
}

function visProdukt() {
    // klon template
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
    // insætte data i klon

    // Append klon .alleretter
    document.querySelector(".alleretter").appendChild(klon);
}
