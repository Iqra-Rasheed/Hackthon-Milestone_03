document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
        var father_name = document.getElementById("father_name").value;
        var phone = document.getElementById("phone_number").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("Resedence address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        //populate Resume//
        document.getElementById("displayname").innerText = name;
        document.getElementById("displayfather_name").innerText = father_name;
        document.getElementById("displayphone_number").innerText = phone;
        document.getElementById("displayemail").innerText = email;
        document.getElementById("displayResedence address").innerText = address;
        document.getElementById("displayeducation").innerText = education;
        document.getElementById("displayskills").innerText = skills;
        document.getElementById("displayexperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displaypicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
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
    (_d = document.getElementById("father_name")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("phone")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("email")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("Resedence address")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("education")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    (_j = document.getElementById("skills")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateResume);
    (_k = document.getElementById("experience")) === null || _k === void 0 ? void 0 : _k.addEventListener("input", generateResume);
});
