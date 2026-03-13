/* * ARCHITECT EDUCATION - LOGIC CORE
 * Created by Architect 01 for RezinX
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("%c ARCHITECT 01 SYSTEM ACTIVE ", "color: #00d4ff; background: #000; font-weight: bold;");

    // 1. COMPLEX AUTO-TYPING EFFECT
    const headerTitle = document.querySelector('header p');
    const originalText = headerTitle.innerText;
    headerTitle.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            headerTitle.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // 2. CUSTOM TOAST NOTIFICATION ENGINE (Bukan Alert Sampah)
    const createToast = (message, type = 'info') => {
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `toast-box ${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">⚡</span>
                <span class="toast-msg">${message}</span>
            </div>
            <div class="toast-progress"></div>
        `;

        toastContainer.appendChild(toast);

        // Auto remove after 4s
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.5s forwards';
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    };

    // 3. INTERACTIVE TOOL EXECUTION SIMULATOR
    const toolButtons = document.querySelectorAll('.tool-card button');
    
    toolButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const toolName = this.parentElement.querySelector('h3').innerText;
            
            // Effect pas diklik
            createToast(`Initializing ${toolName}...`, 'warning');
            
            this.innerText = "EXECUTING...";
            this.disabled = true;

            // Simulate "Hacking" Process
            setTimeout(() => {
                createToast(`${toolName} successfully deployed!`, 'success');
                this.innerText = "COMPLETED";
                this.style.borderColor = "#00ff88";
                this.style.color = "#00ff88";
            }, 2500);
        });
    });

    // 4. MATRIX BACKGROUND EFFECT (Lightweight Canvas)
    const injectMatrix = () => {
        const canvas = document.createElement('canvas');
        canvas.id = 'matrix-bg';
        document.body.prepend(canvas);
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "0123456789ABCDEFREZINXARCHITECT";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00ff8822"; // Transparan dikit biar gak ganggu konten
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 35);
    };
    injectMatrix();
});
