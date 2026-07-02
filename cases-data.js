/* ============================================================
   ملف الكيس استادي المشترك — تعدّل هنا بس وكل الصفحات بتتحدث لوحدها
   ------------------------------------------------------------
   عشان تضيف كيس استادي جديد:
   1) اعمل نسخة من صفحة case-study-oils-store.html وسمّيها باسم المشروع
   2) ضيف عنصر جديد في أول القايمة دي (الأحدث دايمًا فوق)
   والباقي أوتوماتيك: الرئيسية بتعرض آخر 4، وصفحة الكيس استادي بتعرض الكل
   ============================================================ */

const CASES = [
    {
        url: "case-study-oils-store.html",
        img: "images/case-oils-cover-final.png",
        alt: "متجر زيوت وعطارة إلكتروني في السعودية",
        tag: "متجر سلة · زيوت وعطارة",
        tagBg: "rgba(93,202,124,0.2)",
        tagColor: "#5DCA7C",
        flag: "sa",
        title: "متجر زيوت وعطارة سعودي",
        desc: "استلام المتجر بعد نقل دومين وإعادة بناء هوية، وتحويل البحث العضوي لقناة مبيعات حقيقية",
        result: "+106 ألف ريال مبيعات Organic و +501% نمو في الزيارات"
    }
    /* مثال لإضافة كيس جديد — انسخ الكتلة دي وعدّلها وحطها فوق:
    ,{
        url: "case-study-XXXX.html",
        img: "لينك الصورة",
        alt: "وصف الصورة",
        tag: "متجر زد",
        flag: "sa",   // علم الدولة فوق يمين الكارت (sa = السعودية) — سيبها "" لو مش عايز علم
        tagBg: "rgba(6,182,212,0.2)",
        tagColor: "#06B6D4",
        title: "عنوان الكيس استادي",
        desc: "وصف قصير سطرين",
        result: "+250% النتيجة الرئيسية"
    }
    */
];

/* أعلام الدول (data-uri) — تقدر تضيف دول تانية بنفس الطريقة */
const FLAGS = {
    sa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA1CAMAAADh9px2AAAAVFBMVEUAVDAeaEh2o4+KsJ8OXTs5el4IWTZ+qZZAf2QWYkFLhmxXjncnbk9tnYgvc1ZFgmhglH5QinG/1Muxy7+jwbSYuqyRtaYDVjOErZvg6ubT4dv7/PwhsBJvAAABnUlEQVQYGe3BSW7dMBAFwMex2ZxHifq+/z2DLLIzEDrIUlV4vV6vczYi3iJqNgxjNWe+G8qwQmYho42arZBR45hpNdaZ9vZ0e5+qS25Ib8RkR5raDJOHKBdOacMDhlJZJhhQiYJwmX5DxUgIRu+NjShxysBXWCmbEqloFa0ZKK4qUGaVnctxgqwmnDIsyRf5WesmpfLYe/URqycSuKqpxfZK2144dXdfR4LrAuSCCE3cRlujzafkS2gp7RW6dRdO2V4lxMzbJDJZKjPYm7ieKNetLAhQmIEvHMuSea/nqeqh7l1VJufdyddwpczUorr3ihdO5eRl025L1gsRmDm1ZW7bgi8UPCFKljw3TomkC2xy1SOB7nZh9t4/X0+rOlkeVgdb2Uuccm3QnGFlxQ2lTy1Ji74cEEoDbXJVBwuPUzxkyeoSkLr1yaa3PC7GnRA+tmhXqFQjlsAx1wcxAgsf9HhGDFasT2s5+bKSkRoiyKTxUw5/WAAi4rcItni9Xn9jA/5Npe+pDxF5/By77z001dcX/h8PAWHwer1eP/ILL3kYDinfdx8AAAAASUVORK5CYII="
};

const RESULT_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>';
const ARROW_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform:scaleX(-1)"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

/* limit = 0 يعرض الكل، أي رقم تاني يعرض آخر X */
function renderCases(containerId, limit) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    const list = limit > 0 ? CASES.slice(0, limit) : CASES;
    grid.innerHTML = list.map((c, i) => `
        <a href="${c.url}" class="portfolio-card fade-up visible" style="transition-delay:${(i * 0.1).toFixed(1)}s">
            ${c.flag && FLAGS[c.flag] ? `<span class="card-flag"><img src="${FLAGS[c.flag]}" alt="علم الدولة"></span>` : ``}
            <div class="portfolio-thumb">
                <img src="${c.img}" alt="${c.alt}" loading="lazy">
                <div class="portfolio-overlay"><span class="portfolio-tag" style="background:${c.tagBg};color:${c.tagColor};">${c.tag}</span></div>
            </div>
            <div class="portfolio-body">
                <h3>${c.title}</h3>
                <p>${c.desc}</p>
                <div class="portfolio-result">${RESULT_SVG} ${c.result}</div>
                <span class="card-more">اقرأ الكيس استادي كامل ${ARROW_SVG}</span>
            </div>
        </a>`).join("");
}
