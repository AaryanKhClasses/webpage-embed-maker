// Script which runs of the "index.js" file

// Getting the value of the elements.
const title = document.getElementById("input_title").value.trim()
const url = document.getElementById("input_url").value.trim()
const image = document.getElementById("input_image").value.trim()
const type = document.getElementById("input_type").value.trim()
const desc = document.getElementById("input_desc").value.trim()

function getInputValues() { // After clicking the "Submit" button    
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
    // Makes the "Result" panel visible and shows the text
    document.getElementById("result").style.display = 'inline'
    document.getElementById("result_title").textContent = `<meta property = "og:title" content="${title}" />`
    document.getElementById("result_url").textContent = `<meta property = "og:url" content="${url}" />`
    document.getElementById("result_image").textContent = `<meta property = "og:image" content="${image}" />`
    document.getElementById("result_type").textContent = `<meta property = "og:type" content="${type}" />`
    document.getElementById("result_desc").textContent = `<meta property = "og:description" content="${desc}" />`  
}

// Previews the form.
let titleLabel, urlLabel, imageLabel, typeLabel, descLabel // Declares the variables.
document.getElementById("input_title").onkeyup = function() { // This will run when a letter has been typed in the "Title" input field.
    if(title !== "") { titleLabel = title } else { titleLabel = "Title" } // If the "input title" is blank, it will preview as "Title", else it will preview as the inputted value.
    document.getElementById("preview_title").value = titleLabel // Makes the preview "title" text same as the inputted "title" text.
}

document.getElementById("input_url").onkeyup = function() { // This will run when a letter has been typed in the "URL" input field.
    if(url !== "") { urlLabel = url } else { urlLabel = "URL" } // If the "input URL" is blank, it will preview as "URL", else it will preview as the inputted value.
    document.getElementById("preview_url").textContent = urlLabel // Makes the preview "URL" text same as the inputted "URL" text.
}

document.getElementById("input_image").onkeyup = function() { // This will run when a letter has been typed in the "Image" input field.
    if(image !== "") { imageLabel = image } else { imageLabel = "Image" } // If the "input image" is blank, it will preview as "Image", else it will preview as the inputted value.
    document.getElementById("preview_image").textContent = imageLabel // Makes the preview "image" text same as the inputted "image" text.
}

document.getElementById("input_type").onkeyup = function() { // This will run when a letter has been typed in the "type" input field.
    if(type !== "") { typeLabel = type } else { typeLabel = "Type" } // If the "input type" is blank, it will preview as "Type", else it will preview as the inputted value.
    document.getElementById("preview_type").textContent = typeLabel // Makes the preview "type" text same as the inputted "type" text.
}

document.getElementById("input_desc").onkeyup = function() { // This will run when a letter has been typed in the "description" input field.
    if(desc !== "") { descLabel = desc } else { descLabel = "Description" } // If the "input description" is blank, it will preview as "Description", else it will preview as the inputted value.
    document.getElementById("preview_desc").textContent = descLabel // Makes the preview "description" text same as the inputted "description" text.
}