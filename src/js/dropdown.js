const toggleDropdown = (element, arrow) => {
    element.classList.toggle("opacity-0");
    element.classList.toggle("invisible");
    arrow.classList.toggle("rotate-180");
};

const closeDropdown = (element, arrow) => {
    element.classList.add("opacity-0");
    element.classList.add("invisible");
    arrow.classList.remove("rotate-180");
};

const menuClasses = ["aboutMenu", "productsMenu", "contactMenu"];
const dropdownClasses = ["aboutDropdown", "productsDropdown", "contactDropdown"];
const arrowClasses = ["aboutMenuArrow", "productsMenuArrow", "contactMenuArrow"];

const dropdowns = dropdownClasses.map(className => document.getElementsByClassName(className)[0]);
const arrows = arrowClasses.map(className => document.getElementsByClassName(className)[0]);

menuClasses.forEach((menuClass, index) => {
    const menu = document.getElementsByClassName(menuClass)[0];
    const dropdown = dropdowns[index];
    const arrow = arrows[index];

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown(dropdown, arrow);
        
        dropdowns.forEach((item, i) => {
            if (i !== index) {
                closeDropdown(item, arrows[i]);
            }
        });
    });
});

document.documentElement.addEventListener("click", function () {
    dropdowns.forEach((dropdown, index) => {
        const arrow = arrows[index];
        if (!dropdown.classList.contains("opacity-0")) {
            toggleDropdown(dropdown, arrow);
        }
    });
});
