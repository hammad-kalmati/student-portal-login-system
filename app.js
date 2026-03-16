function showLogin() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("create-pass-section").style.display = "none";

    document.getElementById("login-page").style.color = "black";
    document.getElementById("login-page").style.backgroundColor = "white";

    document.getElementById("create-pass-page").style.color = "#737373";
    document.getElementById("create-pass-page").style.backgroundColor = "#F5F5F5";
}

function showCreate() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("create-pass-section").style.display = "block";

    document.getElementById("create-pass-page").style.color = "black";
    document.getElementById("create-pass-page").style.backgroundColor = "white";

    document.getElementById("login-page").style.color = "#737373";
    document.getElementById("login-page").style.backgroundColor = "#F5F5F5";
}


var details = [];

function handleSubmit() {
    var getCNIC = document.getElementById('cnic-input-2').value;
    var getPassword = document.getElementById('pass-input-2').value;
    var getDOB = document.getElementById('DOB-input').value;

    if (getCNIC === '' || getPassword === '' || getDOB === '') {
        alert('CNIC Password and Date of Birth is must required for submit !');
    } else {

        if (!isNaN(getCNIC) && getCNIC.length === 13) {

            if (getPassword.length < 7) {
                alert('Password must be at least 7 characters long !');
            } else {
                details.push({
                    CNIC: getCNIC,
                    DOB: getDOB,
                    PASS: getPassword
                });

                var getCNIC = document.getElementById('cnic-input-2').value = '';
                var getPassword = document.getElementById('pass-input-2').value = '';
                var getDOB = document.getElementById('DOB-input').value = '';


                console.log(details);
                alert("Data submitted successfully");
            }

        } else {
            alert("CNIC must contain exactly 13 numbers !");
        }
    }

}

function handleLogin() {
    var getCNIC = document.getElementById('cnic-input-1').value;
    var getPassword = document.getElementById('pass-input-1').value;

    var isLoginValid = false;

    if (getCNIC === '' || getPassword === '') {
        alert('CNIC and Password both required for login !');
    } else {

        for (var i = 0; i < details.length; i++) {
            if (getCNIC === details[i].CNIC && getPassword === details[i].PASS) {

                isLoginValid = true;
            }
        }

        if (isLoginValid) {
            alert('Login Succssesfull');

            afterLogin();

            var getCNIC = document.getElementById('cnic-input-1').value = '';
            var getPassword = document.getElementById('pass-input-1').value = '';
        } else {
            alert('Please enter valid credintials !');
        }
    }
}

function afterLogin() {
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('both-forms-section').style.display = 'none';

}