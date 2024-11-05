document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    function validateform() {
        //Add validation logic here
        //Return true if the form is valid.otherwise return false
        var form = document.getElementById("resumeform");
        if (!form.checkValidity) {
            alert("Please fill all required fielde correctly.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var email = document.getElementById("phone no").value;
        var phone = document.getElementById("email").value;
        var address = document.getElementById("resedence address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var experience = document.getElementById("work experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        //populate Resume//
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayPhoneNo").innerText = phone;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayResedence Address").innerText = address;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
    }
    ;
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateform()) {
            generateResume();
        }
    });
    //generate resume//
    (_b = document.getElementById("picture")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("name")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    (_d = document.getElementById("phone no")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("email")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("resedence address")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("work education")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("skills")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    (_j = document.getElementById("experience")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateResume);
});
