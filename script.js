const startBtn = document.querySelector('.start-btn');
const welcome = document.querySelector('.welcome');
const main = document.querySelector('.main');

startBtn.onclick = () => {
    welcome.classList.add('hidden');
    setTimeout(() => {
        welcome.style.display = 'none';
        main.style.display = 'flex';
    }, 800);
};
const aboutBtn = document.getElementById('aboutBtn');
const aboutOverlay = document.getElementById('aboutOverlay');
const closeAbout = document.getElementById('closeAbout');
const onlineCount = document.getElementById('onlineCount');

aboutBtn.addEventListener('click', () => {
    aboutOverlay.style.display = 'flex';
});

closeAbout.addEventListener('click', () => {
    aboutOverlay.style.display = 'none';
});

function updateOnlineCount() {
    const randomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    onlineCount.textContent = randomNumber;
}

setInterval(updateOnlineCount, 10000);

updateOnlineCount();

const contestBtn = document.getElementById('mosbtn');
const mosOverlay = document.getElementById('mosOverlay');
const closemos = document.getElementById('closemos');
contestBtn.addEventListener('click', () => {
    mosOverlay.style.display = 'flex';
});
closemos.addEventListener('click', () => {
    mosOverlay.style.display = 'none';
});
const donateBtn = document.getElementById('tbrBtn');
const tbrScreen = document.getElementById('tbr');

donateBtn.addEventListener('click', () => {
    main.style.display = 'none';
    tbrScreen.style.display = 'flex';
});
const backToMain = document.getElementById('backToMain');

backToMain.addEventListener('click', () => {
    tbrScreen.style.display = 'none';
    main.style.display = 'flex';
});
let donateType = "";

document.getElementById("donateAsh7nha").onclick = () => {
    donateType = "تبرع لشحنها";
    document.getElementById("tbr").style.display = "none";
    document.getElementById("tbr3").style.display = "flex";
};

document.getElementById("donateGaza").onclick = () => {
    donateType = "تبرع لغزة";
    document.getElementById("tbr").style.display = "none";
    document.getElementById("tbr3").style.display = "flex";
};

document.getElementById("donateCancer").onclick = () => {
    donateType = "تبرع لمستشفيات علاج السرطان";
    document.getElementById("tbr").style.display = "none";
    document.getElementById("tbr3").style.display = "flex";
};


const tbr3 = document.getElementById("tbr3");
const backToTbr = document.getElementById("backToTbr");
const payNow = document.getElementById("payNow");

const donateAmount = document.getElementById("donateAmount");
const currencySelect = document.getElementById("currencySelect");

backToTbr.onclick = () => {
    tbr3.style.display = "none";
    document.getElementById("tbr").style.display = "flex";
};

const donateInput = document.getElementById("donateAmount");
donateAmount.min = 0.01; 
donateAmount.step = 0.01; 


payNow.onclick = () => {
    const amount = donateAmount.value;
    const currency = currencySelect.value;

    if (amount === "" || currency === "") {
        alert("من فضلك اكمل البيانات");
        return;
    }

    const referenceNumber = Math.floor(10000000 + Math.random() * 90000000);

    const message = `
السلام عليكم عايز اتبرع الي ${donateType} بمبلغ قدرة ${amount}${currency}
اعطيني رقم او كود التحويل حتا استطيع تحويل الاموال
الرقم المرجعي : ${referenceNumber}
------------------------------
(أشحنها غير مسؤاله عن سوء الاستخدام)
    `;

    const whatsappURL =
        "https://wa.me/201558143429?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
};

