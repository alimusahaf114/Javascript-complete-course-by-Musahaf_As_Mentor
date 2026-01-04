let age = 12;
let marks = 95
let hasDocuments = true

if(marks >= 80){
    if(age >= 18){
        if(hasDocuments){
            console.log("Admission Confirmed");
            
        } else {
            console.log("Documents required");
            
        }
    }else {
        console.log("Not suitable");
        
    }
} else if(marks >= 60){
    console.log("Waiting List");
    
} else {
    console.log("Not Eligible");
    
}