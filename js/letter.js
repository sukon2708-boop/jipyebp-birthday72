const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันเกิดในวัย 26 ขวบนะครับอ้วนและก็เป็นปีที่สามที่เค้าได้อวยพรวันเกิดให้กับอ้วน เค้าก็ขอให้อ้วนใช้ชีวิตให้มีความสุข ไปไหนมาไหนมีแต่คนเมตตา เจอแต่กัลยาณมิตรที่ดี เพื่อนร่วมงานที่ดี เจริญในหน้าที่การงานนะอ้วนและที่สำคัญสุขภาพร่างกายแข็งแรง(เราจะหุ่นดีไปด้วยกัน)🥰❤️ 

ปล.อยู่กับเค้าไปนานๆนะอ้วงๆ


รักแต่ไม่กล้าแสดงออก💗

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
