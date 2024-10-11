document.getElementById('iconEffects').onclick = function () {
    let element = document.getElementById ("inputArea");
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
  recognition.lang = "en-GB";
  recognition.continuous = true;
  
  document.onclick = recognition.start();
  
  recognition.onresult = (event) => {
      for (const result of event.results){
      element.innerText = result[0].transcript;
  }
  }  
  }
  
  
  