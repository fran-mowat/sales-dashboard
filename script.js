let openMenu = (e) => {
    console.log("open")
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "grid";

    e.stopPropagation();
    document.body.addEventListener("click", closeMenu);
}

let closeMenu = (e) => {
    e.stopPropagation();

    console.log("close")
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";

    document.body.removeEventListener("click", closeMenu);
}

let hamburger = document.getElementById("menu");
hamburger.addEventListener("click", openMenu);