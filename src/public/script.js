// Script which runs of the "index.js" file
function getInputValues() { // After clicking the "Submit" button    
    // Getting the value of the elements.
    const title = document.getElementById("input_title").value.trim()
    const url = document.getElementById("input_url").value.trim()
    const image = document.getElementById("input_image").value.trim()
    const type = document.getElementById("input_type").value.trim()
    const desc = document.getElementById("input_desc").value.trim()

    // Errors
    if(title === "" || url === "" || image === "" || type === "" || desc === "") { // If any of the input fields are blank, this will get executed.
        title == url == image == type == desc == "" // This will make all the input fields blank again.
        return alert("Please fill all the inputs to proceed.") // This will open a pop-up saying the following
    }

    let embedTypes = ["blog", "website", "article"] // Types of "Type" which can be accepted.
    if(!embedTypes.includes(type)) { // If The inputted "Type" value doesnt matches any of the above strings, this will get executed.
        title == url == image == type == desc == "" // This will make all the input fields blank again.
        return alert("Embed Types can only be \"blog\", \"website\" or \"wrticle\" ") // This will open a pop-up saying the following string.
    }

    // if(!url.startsWith("http://") || !url.startsWith("https://")) { // If the "url" value doesnt start with either "http://" or "https://", this will executed. This is important to avoid problems at submission.
    //     title == url == image == type == desc == "" // This will make all the input fields blank again.
    //     return alert("The URL you had inputted is invalid.") // This will open a pop-up saying the following.
    // }

    // if(!image.startsWith("http://") || !image.startsWith("https://")) { // If the "image" value doesnt start with either "http://" or "https://", this will executed. This is important to avoid problems at submission.
    //     title == url == image == type == desc == "" // This will make all the input fields blank again.
    //     return alert("The Image URL you had inputted is invalid.") // This will open a pop-up saying the following.
    // }

    // After fixing all the errors, the final product:
    document.getElementById("result").style.display = 'inline'
    document.getElementById("result_title").textContent = `<meta property = "og:title" content="${title}" />`
    document.getElementById("result_url").textContent = `<meta property = "og:url" content="${url}" />`
    document.getElementById("result_image").textContent = `<meta property = "og:image" content="${image}" />`
    document.getElementById("result_type").textContent = `<meta property = "og:type" content="${type}" />`
    document.getElementById("result_desc").textContent = `<meta property = "og:description" content="${desc}" />`
}