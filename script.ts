document.addEventListener("DOMContentLoaded" , ()=>{
    function validateform(){    
        //Add validation logic here
        //Return true if the form is valid.otherwise return false
    
        const form = document.getElementById("resumeform") as HTMLFormElement;
        if(!form.checkValidity){
         alert("Please fill all required fielde correctly.")
        return false;
 }
        return true;
    }
function generateResume(){
    const name = (document.getElementById("name") as HTMLInputElement). value;
    const father_name = (document.getElementById("father_name") as HTMLInputElement). value;
    const phone = (document.getElementById("phone_number") as HTMLInputElement). value;
    const email  = (document.getElementById("email") as HTMLInputElement). value;
    const address = (document.getElementById("Resedence address") as HTMLInputElement). value;
    const education = (document.getElementById("education") as HTMLTextAreaElement). value;
    const skills = (document.getElementById("skills") as HTMLInputElement). value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement). value;
    const picture = (document.getElementById("picture") as HTMLInputElement).files?. [0];

    //populate Resume//
    (document.getElementById("displayname") as HTMLElement).innerText = name;
    (document.getElementById("displayfather_name") as HTMLElement).innerText = father_name;
    (document.getElementById("displayphone_number") as HTMLElement).innerText = phone;
    (document.getElementById("displayemail") as HTMLElement).innerText = email;
    (document.getElementById("displayResedence address") as HTMLElement).innerText =address;
    (document.getElementById("displayeducation") as HTMLElement).innerText = education;
    (document.getElementById("displayskills") as HTMLElement).innerText = skills;
    (document.getElementById("displayexperience") as HTMLElement).innerText = experience;

    if(picture){
        const reader = new FileReader();
        reader.onload= function (e){
            (document.getElementById("displaypicture") as HTMLImageElement).src= e.target?.result as string;
            
        };
        reader.readAsDataURL(picture);


        
    }
};
    document.getElementById("resumeform")?.addEventListener("submit",function(event){
        event.preventDefault();
        if (validateform()){
            generateResume();
        }  
    });
    //generate resume//
    document.getElementById("picture")?.addEventListener("input", generateResume);
    document.getElementById("name")?.addEventListener("input", generateResume)
    document.getElementById("father_name")?.addEventListener("input", generateResume);
    document.getElementById("phone")?.addEventListener("input", generateResume);
    document.getElementById("email")?.addEventListener("input", generateResume);
    document.getElementById("Resedence address")?.addEventListener("input", generateResume);
    document.getElementById("education")?.addEventListener("input", generateResume);
    document.getElementById("skills")?.addEventListener("input", generateResume);
    document.getElementById("experience")?.addEventListener("input", generateResume);
} )  

    
       

    
     





