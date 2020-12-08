async function checkUrl(input) {
   
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    
    console.log("::: Running checkUrl :::", input);
    
    if(!regex.test(input)) {
        alert("URL not valid, please enter a valid URL");
        console.log(" ERROR :: URL :: please enter a valid URL");
        return false;
    }else{
        console.log("Valid URL ..");
        return true;
    }
}

export { checkUrl }
