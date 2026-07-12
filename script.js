const form = document.getElementById("launchForm");
const success = document.getElementById("successMessage");

const submitBtn = form.querySelector("button");

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzHh1HqXu4h30MhzUuh8LMXj1VjstAGOEE9ZM7llYjHU5fzKqbh-gzaNAm7crv6y7OL/exec";

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitBtn.disabled = true;

    submitBtn.innerText = "등록 중...";

    const data = {

        name: document.getElementById("name").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        email: document.getElementById("email").value.trim()

    };

    try{

        const response = await fetch(SCRIPT_URL,{
            method:"POST",
            body:JSON.stringify(data)
        });

        const result = await response.json();

        if(result.success){

            form.reset();

            form.style.display="none";

            success.classList.remove("hidden");

        }

        else{

            alert("저장 실패");

        }

    }

    catch(err){

        console.log(err);

        alert("네트워크 오류");

    }

    submitBtn.disabled=false;

    submitBtn.innerText="출시 알림 신청하기";

});