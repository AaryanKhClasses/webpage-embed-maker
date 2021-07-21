// Script which runs of the "index.js" file

// Getting the value of the elements.
const title = document.getElementById("input_title").value.trim()
const url = document.getElementById("input_url").value.trim()
const image = document.getElementById("input_image").value.trim()
const type = document.getElementById("input_type").value.trim()
const desc = document.getElementById("input_desc").value.trim()

function getInputValues() { // After clicking the "Submit" button    
    // Errors
    // let embedTypes = ["blog", "website", "article"] // Types of "Type" which can be accepted.
    // if(!embedTypes.includes(type)) { // If The inputted "Type" value doesnt matches any of the above strings, this will get executed.
    //     title == url == image == type == desc == "" // This will make all the input fields blank again.
    //     return alert("Embed Types can only be \"blog\", \"website\" or \"article\" ") // This will open a pop-up saying the following string.
    // }

    // After fixing all the errors, the final product:
    // Makes the "Result" panel visible and shows the text
    document.getElementById("result").style.display = 'inline'
    document.getElementById("result_title").textContent = `<meta property = "og:title" content="${title}" />`
    document.getElementById("result_url").textContent = `<meta property = "og:url" content="${url}" />`
    document.getElementById("result_image").textContent = `<meta property = "og:image" content="${image}" />`
    document.getElementById("result_type").textContent = `<meta property = "og:type" content="${type}" />`
    document.getElementById("result_desc").textContent = `<meta property = "og:description" content="${desc}" />`  
}