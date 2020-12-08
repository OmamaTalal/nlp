function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    
    if ( Client.checkUrl(formText) === true){
        console.log("::: Form Submitted :::")
    }
    fetch('http://localhost:8081/nlp', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json'},
          // convert body data type to string      
        body: JSON.stringify({url: formText}), 
    });
    
    let req = fetch('http://localhost:8081/data');
    try{
        req.json();
        console.log("form handler::", req);
        document.getElementById('agreement').innerHTML = 'Agreement: '+req.agreement;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: '+req.subjectivity;
        document.getElementById('confidence').innerHTML = 'Confidence: '+req.confidence;
        document.getElementById('irony').innerHTML = 'Irony: ' +req.irony; 
    }catch(error){
        console.log(error);
    }
   
   
}


export { handleSubmit }
