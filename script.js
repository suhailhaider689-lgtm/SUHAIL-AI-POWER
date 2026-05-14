async function send(){
    let msg = document.getElementById("msg").value;

    const res = await fetch("/chat",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({message:msg})
    });

    const data = await res.json();

    document.getElementById("chat-box").innerHTML +=
    `<p><b>You:</b> ${msg}</p>
     <p><b>${data.reply}</b></p>`;
}
