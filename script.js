const input = document.getElementById("data");
const button = document.getElementById("btn");
const qrImg = document.getElementById("img");

function downloadImage(){
  var input = document.getElementById("data").value;
  var name = "aaabvbv"
  var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input
    fetch(url)
      .then(resp => resp.blob())
      .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          // the filename you want
          a.download = name;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('An error sorry'));
}

button.addEventListener("click", ()=>{
    let data = input.value;
    if(data.length>0){
        let qrsource="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data;

        qrImg.src=qrsource;
    }
})
