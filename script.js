document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "Привет", 
        "こんにちは", "안녕하세요", "你好", "Hej", "Merhaba", "Salam", 
        "Shalom", "नमस्ते", "สวัสดี", "xin chào", "გამარჯობა", "Sveiki", 
        "Ahoj", "Hei", "Zdravo", "Прывітанне", "Selam", "Tere", 
        "Cześć", "Szia", "Γειά σου", "Bună", "नमस्कार", "Sawubona", 
        "Kamusta", "Jambo", "Salam", "שלום", "Marhaba", "สวัสดี", 
        "안녕하세요", "今日は", "你好", "God dag", "Hei", "Hallo", 
        "Bok", "Labdien", "Labas", "Zdravstiky", "Aloha", "Sveiki", 
        "Hallo", "Hei"
    ];
    const typewriter = document.getElementById('typewriter');
    let phrase = 'Hello';
    let typing = true; // State to control typing or untyping

    function typePhrase() {
        let i = typing ? 0 : phrase.length;
        typewriter.textContent = '';
        typewriter.style.maxWidth = "0";

        function updateText() {
            if (typing) {
                if (i < phrase.length) {
                    typewriter.textContent += phrase.charAt(i);
                    typewriter.style.maxWidth = `${(i + 1) * 10}%`;
                    i++;
                    setTimeout(updateText, 200);
                } else {
                    setTimeout(() => {
                        typing = false; // Switch to untyping
                        updateText();
                    }, 400); // Wait before disappearing
                }
            } else {
                if (i > 0) {
                    typewriter.textContent = typewriter.textContent.substring(0, i - 1);
                    typewriter.style.maxWidth = `${i * 10}%`;
                    i--;
                    setTimeout(updateText, 200);
                } else {
                    phrase = phrases[Math.floor(Math.random() * phrases.length)];
                    setTimeout(() => {
                        typing = true;
                        typePhrase();
                    }, 400);
                }
            }
        }

        updateText();
    }

    typePhrase();
});