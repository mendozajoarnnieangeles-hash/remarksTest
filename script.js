// mode select (copyMode / removeMode)
let mode = "copyMode"

// function to copy text to clipboard

function copyToClipboard(text) {

    navigator.clipboard.writeText(text);
    console.log(`copied: ${text}`);

};

// pre-added remarks array

let remarks_array = ["jesus", "angel", "cross", "mosque", "quran", "less than 45 degrees", "45 degrees", "more than 45 degrees", "exaggerated breast"];

// create dynamic buttons

function createButtons() {

    const BTNDIVID = document.getElementById("buttonsDiv")
    
    //clears the div
    BTNDIVID.innerHTML = "";

    // loop for array

    remarks_array.forEach(element => {
        
        let btn = document.createElement("button")
        btn.textContent = element
        BTNDIVID.appendChild(btn)


    });

    // assigning event listener for the whole div

    BTNDIVID.addEventListener("click", function(event) {

        if (event.target.tagName === "BUTTON" && mode === "copyMode") {

            copyToClipboard(event.target.textContent);

        } 

        else if (event.target.tagName === "BUTTON" && mode == "removeMode") {

            for (let i = 0; i < remarks_array.length; i++) {

                if (remarks_array[i] === event.target.textContent) {

                    remarks_array.splice(i, 1);

                    createButtons();
                    break;

                }

            }

        }

    })

}

createButtons()

// add and remove buttons

let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", removeRemark);

function removeRemark() {

    if (mode === "copyMode") {

        mode = "removeMode";
        removeBtn.textContent = "Done";

    }

    else if (mode === "removeMode") {

        mode = "copyMode";
        removeBtn.textContent = "Remove a remark";

    }

}

// for adding more remarks

let addRemarkInput = document.getElementById("addRemarkInput");

addRemarkInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addCustomRemark();

    }

})

function addCustomRemark() {

    let customRemark = addRemarkInput.value

    remarks_array.push(customRemark);
    addRemarkInput.value = "";
    createButtons()

}