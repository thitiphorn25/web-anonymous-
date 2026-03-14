// 1. ระบบสลับหน้าแบบ Smooth (Tab Navigation)
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.style.opacity = '0';
        setTimeout(() => {
            p.classList.remove('active');
            if (p.id === pageId + '-page') {
                p.classList.add('active');
                setTimeout(() => p.style.opacity = '1', 50);
            }
        }, 300);
    });
}

// 2. ลูกเล่นตอนกดส่ง (Submit Animation)
const feedbackForm = document.querySelector('#user-page form');
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    // เปลี่ยนสถานะปุ่ม (Loading State)
    btn.innerText = "กำลังเข้ารหัสข้อมูล... 🔒";
    btn.disabled = true;
    btn.style.backgroundColor = "#ccc";

    setTimeout(() => {
        // จำลองการส่งสำเร็จ
        alert("ส่งข้อมูลแบบนิรนามเรียบร้อยแล้ว! ข้อมูลของคุณปลอดภัย");
        
        // Reset ฟอร์ม
        this.reset();
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.backgroundColor = "var(--primary-blue)";
        
        // เพิ่มลูกเล่น 'พลุฉลอง' (ถ้าต้องการใช้ Library ภายนอกอย่าง Canvas-confetti)
        console.log("Feedback Sent Successfully!");
    }, 1500);
});

// 3. ระบบพิมพ์ข้อความแบบ Real-time (Character Counter)
const textarea = document.querySelector('textarea');
const charCounter = document.createElement('div');
charCounter.style.textAlign = 'right';
charCounter.style.fontSize = '12px';
charCounter.style.marginTop = '5px';
charCounter.style.color = '#aaa';
textarea.parentNode.appendChild(charCounter);

textarea.addEventListener('input', () => {
    const remaining = 500 - textarea.value.length;
    charCounter.innerText = `พิมพ์ได้อีก ${remaining} ตัวอักษร`;
    if(remaining < 50) charCounter.style.color = 'red';
    else charCounter.style.color = '#aaa';
});

// 4. Admin Login - เขย่าหน้าจอเมื่อรหัสผิด (Shake Effect)
const adminBtn = document.querySelector('.btn-admin');
adminBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const card = this.closest('.form-card');
    
    // สมมติว่าเช็คแล้วผิด
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
});