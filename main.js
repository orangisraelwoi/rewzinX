document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING EFFECT
    const textEl = document.getElementById('typing-text');
    const content = textEl.innerText;
    textEl.innerText = '';
    let i = 0;
    function typing() {
        if (i < content.length) {
            textEl.innerText += content.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }
    typing();

    // 2. PREMIUM REDIRECT SYSTEM
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.onclick = function() {
            const url = this.getAttribute('data-url');
            if(url) {
                // Notif dikit biar keren
                this.innerText = "REDIRECTING...";
                setTimeout(() => {
                    window.open(url, '_blank');
                    this.innerText = "LEARN MORE";
                }, 800);
            }
        };
    });

    // 3. MATRIX ENGINE
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const drops = Array(Math.floor(canvas.width/20)).fill(1);
    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#00d4ff";
        ctx.font = "15px monospace";
        drops.forEach((y, i) => {
            const char = String.fromCharCode(Math.random() * 128);
            ctx.fillText(char, i * 20, y * 20);
            if(y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(draw, 40);
});

