function showDropdown(){
    document.getElementById("dropdown-products").classList.add("show")
}
window.onclick = function(event){
    const searchBox = document.getElementById("searchBox")
    if(searchBox != event.target){
        document.getElementById("dropdown-products").classList.remove("show");
    }

}

export default showDropdown;