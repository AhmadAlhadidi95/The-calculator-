let display = document.getElementById("display")

function appendToDisplay(input) {
    
    display.value += input
    
}

function calculator() {

    if (display.value) {
        
        try { // This is a perfect uses to the (try and catch), because There’s no condition to based on here
            display.value = eval(display.value)
        } catch (error) {
            display.value = `Error`
        }

    }
    
    
}

function clearDisplay() {

    display.value = ``

}

document.querySelector(".keys-and-more").appendChild(myInformation())

function myInformation(myInfo) {

    myInfo = document.createElement("div")
    myInfo.className = `my-info`

    let xLink = document.createElement("a")
    xLink.href = "https://twitter.com/AhmadAlhadidi95"
    xLink.target = "_blank"
    xLink.rel = "noopener noreferrer"
    xLink.title = "Visit my X"

    let xIcon = document.createElement("i")
    xIcon.className = `fa-brands fa-x-twitter`

    xLink.appendChild(xIcon)

    let myLogo = document.createElement("img")
    myLogo.src = `/My-sign.png`
    myLogo.alt = `My-sign`
    myLogo.title = `Ahmad Alhadidi`
    myLogo.style.width = `50px`

    let githubLink = document.createElement("a")
    githubLink.href = "https://github.com/AhmadAlhadidi95"
    githubLink.target = "_blank"
    githubLink.rel = "noopener noreferrer"
    githubLink.title = "Visit my Github"

    let githubIcon = document.createElement("i")
    githubIcon.className = `fa-brands fa-github`

    githubLink.appendChild(githubIcon)

    myInfo.append(xLink, myLogo, githubLink)

    return myInfo

}