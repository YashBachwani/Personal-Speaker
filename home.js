function speak(){
    var text = document.getElementById("input").value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
