let openMenu = (e) => {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "grid";

    e.stopPropagation();
    document.body.addEventListener("click", closeMenu);
}

let closeMenu = (e) => {
    e.stopPropagation();

    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";

    document.body.removeEventListener("click", closeMenu);
}

let hamburger = document.getElementById("menu");
hamburger.addEventListener("click", openMenu);