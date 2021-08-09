const dropdownItems = [
    {
        "item":"Profile",
        "link":"#"
    },
    {
        "item":"Notification",
        "link":"#"
    },
    {
        "item":"Bookmarks",
        "link":"#"
    },
    {
        "item":"Reviews",
        "link":"#"
    },
    {
        "item":"Network",
        "link":"#"
    },
    {
        "item":"Find friends",
        "link":"#"
    },
    {
        "item":"Settings",
        "link":"#"
    },
    {
        "item":"Logout",
        "link":"/"
    }
]

var dropdownContainer;

function userDropdown(){
    if(dropdownContainer === undefined){
        createDropdown()
    }
    dropdownContainer.classList.toggle("show");
}

function createDropdown(){    
    dropdownContainer = document.createElement("div");
    var targetDiv = document.getElementById("userDropdown");
    dropdownContainer.classList.add("dropdown-content")
    dropdownContainer.classList.add("dropdown-content-user")
    dropdownItems.forEach(item => {
        var newItem = document.createElement("a")
        newItem.innerHTML = item.item;
        newItem.href = item.link;
        dropdownContainer.appendChild(newItem);
    })
    targetDiv.appendChild(dropdownContainer);
}

export default userDropdown;