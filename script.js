function speak(){
    var text = "Welcome to world of AI, Hello, I am your personal Speaker Write anything in the box i will convert into words for you";
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
