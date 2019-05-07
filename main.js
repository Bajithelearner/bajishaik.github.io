const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ['Android Developer', 'Web Developer', 'Voice Assistant Developer']
const typingDelayEachChar = 200; //200 milli second
const erasingDelayEachChar = 100;
const waitDelayEachWord = 2000;

let textArrayIndex = 0;
let charIndex =0;

function type()
{

    if(charIndex< textArray[textArrayIndex].length)
    {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
        charIndex++;
        setTimeout(type,typingDelayEachChar);
    }
    else{
        //next word
        cursorSpan.classList.remove('typing');
        setTimeout(erase,waitDelayEachWord)

    }
}

function erase()
    {
        if(charIndex>0)
        {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1)
            charIndex--;
            setTimeout(erase,erasingDelayEachChar);
        }
        else{
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type,typingDelayEachChar+1100)
        }    
    }

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(type,waitDelayEachWord+200);
})