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
    const email = (document.getElementById("phone no") as HTMLInputElement). value;
    const phone = (document.getElementById("email") as HTMLInputElement). value;
    const address = (document.getElementById("resedence address") as HTMLInputElement). value;
    const education = (document.getElementById("education") as HTMLTextAreaElement). value;
    const skills = (document.getElementById("skills") as HTMLInputElement). value;
    const experience = (document.getElementById("work experience") as HTMLTextAreaElement). value;
    const picture = (document.getElementById("picture") as HTMLInputElement).files?. [0];

    //populate Resume//
    (document.getElementById("displayName") as HTMLElement).innerText = name;
    (document.getElementById("displayPhoneNo") as HTMLElement).innerText = phone;
    (document.getElementById("displayEmail") as HTMLElement).innerText = email;
    (document.getElementById("displayResedence Address") as HTMLElement).innerText =address;
    (document.getElementById("displayEducation") as HTMLElement).innerText = education;
    (document.getElementById("displaySkills") as HTMLElement).innerText = skills;
    (document.getElementById("displayExperience") as HTMLElement).innerText = experience;

    if(picture){
        const reader = new FileReader();
        reader.onload= function (e){
            (document.getElementById("displayPicture") as HTMLImageElement).src= e.target?.result as string;
            
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
    document.getElementById("name")?.addEventListener("input", generateResume);
    document.getElementById("phone no")?.addEventListener("input", generateResume);
    document.getElementById("email")?.addEventListener("input", generateResume);
    document.getElementById("resedence address")?.addEventListener("input", generateResume);
    document.getElementById("work education")?.addEventListener("input", generateResume);
    document.getElementById("skills")?.addEventListener("input", generateResume);
    document.getElementById("experience")?.addEventListener("input", generateResume);
} )  

    
       

    
     





