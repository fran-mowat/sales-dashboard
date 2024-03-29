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

let checkWindow = () => {
    if (window.innerWidth < 992 || document.body.clientWidth < 992) {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "grid"; //to allow for resizing of window
        document.body.removeEventListener("click", closeMenu);
    }
}

window.onresize = function() {checkWindow()}

let hamburger = document.getElementById("menu");
hamburger.addEventListener("click", openMenu);