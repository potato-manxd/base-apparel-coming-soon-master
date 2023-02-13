console.log(document)
document.querySelector("form").onsubmit = (e) => {
    if (document.querySelector("input").value.match(/\w+@\w+.\w+/) == null) {
        document.querySelector(".error").style.visibility = "visible"
        document.querySelector("h3").style.display = "block"
        document.querySelector("input").style.cssText = "border-color:hsl(0, 93%, 68%);"
    } else {
        document.querySelector(".error").style.visibility = "hidden"
        document.querySelector("h3").style.display = "none"
        document.querySelector("input").style.cssText = "border-color:hsl(0, 93%, 68%);"
        e.preventDefault()
    }
}