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
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    let isLightTheme = false;

    themeToggleIcon.addEventListener('click', function() {
        if (isLightTheme) {
            document.body.style.backgroundColor = '#2e3440';
            document.querySelectorAll('.navbar-link').forEach(link => link.style.color = '#eceff4');
            document.querySelectorAll('.heading, .subheading, .typewriter').forEach(text => text.style.color = '#eceff4');
            document.querySelector('.navbar-container').style.backgroundColor = 'rgba(216, 222, 233, 0.096)';
            themeToggleIcon.style.backgroundColor = 'rgba(216, 222, 233, 0.096)';
            themeToggleIcon.classList.remove('fa-moon');
            themeToggleIcon.classList.add('fa-sun');
            themeToggleIcon.style.color = '#eceff4';
        } else {
            document.body.style.backgroundColor = '#eceff4';
            document.querySelectorAll('.navbar-link').forEach(link => link.style.color = '#2e3440');
            document.querySelectorAll('.heading, .subheading, .typewriter').forEach(text => text.style.color = '#2e3440');
            document.querySelector('.navbar-container').style.backgroundColor = '#d8dee9';
            themeToggleIcon.style.backgroundColor = '#d8dee9';
            themeToggleIcon.classList.remove('fa-sun');
            themeToggleIcon.classList.add('fa-moon');
            themeToggleIcon.style.color = '#2e3440';
        }

        isLightTheme = !isLightTheme;
    });

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