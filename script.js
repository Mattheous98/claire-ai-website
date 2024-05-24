document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScdIK1xG6LbBqtOWxCJyNE1-kg_vS9gkMuTw8Fv8hcsdvMrUQ/formResponse";
    const formParams = new URLSearchParams();
    formParams.append("entry.1286292080", firstName);
    formParams.append("entry.395746436", lastName);
    formParams.append("entry.1070257396", email);

    fetch(googleFormURL, {
        method: "POST",
        body: formParams,
        mode: "no-cors"
    }).then(() => {
        alert("Thank you for your submission!");
        e.target.reset();
    }).catch((error) => {
        console.error("Error:", error);
    });
});
