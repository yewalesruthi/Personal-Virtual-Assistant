let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="en-GB";
    window.speechSynthesis.speak(text_speak);
}
function wishme(){
let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning,I am your virtual assistant, How can I help you?")
}
    else if(hours>=12 && hours<18){
        speak("Good Afternoon,I am your virtual assistant, How can I help you?")
}
}
window.addEventListener ("load",()=>{
    wishme();
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition =new speechRecognition(); 
recognition.onresult=(event)=>{
let currentIndex=event.resultIndex;
let transcript=event.results[currentIndex][0].transcript;
content.innerText=transcript;
takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})
function takeCommand(message){
     btn.style.display="flex";
     voice.style.display="none";
    console.log(message);
    if(message.includes("hello")||message.includes("hi")){
       let text="hello, How can I help you?"
        speak(text); 
    }
    else if(message.includes("who are you")){
        let text="i am your virtual assistant"
        speak(text); 
    }else if(message.includes("open youtube")){
        window.open("https://www.youtube.com");
        let text="opening YouTube"
        speak(text); 
    }else if(message.includes("open google")){
        window.open("https://www.google.com");
        let text="opening Google"
        speak(text); 
    }else if(message.includes("open gmail")){
        window.open("https://www.gmail.com");
        let text="opening Gmail"
        speak(text); 
    }else if(message.includes("what is your name")){
        let text="My name is Vinnee"
        speak(text); 
    }else if(message.includes("open instagram")){
        window.open("https://www.instagram.com");
        let text="opening Instagram"
        speak(text); 
    }else if(message.includes("open facebook")){
        window.open("https://www.facebook.com");
        let text="opening Facebook"
        speak(text); 
    }else if(message.includes("open calculator")){
        window.open("calculator://");
    }else if(message.includes("time")){
    let time=new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"});
    speak(time);
    }else if(message.includes("date")){
    let date=new Date().toLocaleTimeString(undefined,{day:"numeric",month:"short"});
    speak(date);
    }
    else{
       let finalText="this is what i found on internet regarding" + message.replace("Vinnee","") || message.replace("Vini","");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("Vinnee")}`,"_blankk");
    
    }
}
