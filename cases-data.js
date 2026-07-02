/* ============================================================
   ملف الكيس استادي المشترك — تعدّل هنا بس وكل الصفحات بتتحدث لوحدها
   ------------------------------------------------------------
   عشان تضيف كيس استادي جديد:
   1) اعمل نسخة من صفحة case-study-fashion-store.html وسمّيها باسم المشروع
   2) ضيف عنصر جديد في أول القايمة دي (الأحدث دايمًا فوق)
   والباقي أوتوماتيك: الرئيسية بتعرض آخر 4، وصفحة الكيس استادي بتعرض الكل
   ============================================================ */

const CASES = [
    {
        url: "case-study-fashion-store.html",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format",
        alt: "متجر أزياء إلكتروني على سلة",
        tag: "متجر سلة",
        tagBg: "rgba(93,202,124,0.2)",
        tagColor: "#5DCA7C",
        title: "متجر أزياء إلكتروني",
        desc: "تحسين SEO شامل لمتجر أزياء على منصة سلة مع زيادة ملحوظة في الزيارات العضوية",
        result: "+180% نمو في الزيارات العضوية خلال 4 أشهر"
    }
    /* مثال لإضافة كيس جديد — انسخ الكتلة دي وعدّلها وحطها فوق:
    ,{
        url: "case-study-XXXX.html",
        img: "لينك الصورة",
        alt: "وصف الصورة",
        tag: "متجر زد",
        tagBg: "rgba(6,182,212,0.2)",
        tagColor: "#06B6D4",
        title: "عنوان الكيس استادي",
        desc: "وصف قصير سطرين",
        result: "+250% النتيجة الرئيسية"
    }
    */
];

const RESULT_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>';
const ARROW_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform:scaleX(-1)"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

/* limit = 0 يعرض الكل، أي رقم تاني يعرض آخر X */
function renderCases(containerId, limit) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    const list = limit > 0 ? CASES.slice(0, limit) : CASES;
    grid.innerHTML = list.map((c, i) => `
        <a href="${c.url}" class="portfolio-card fade-up" style="transition-delay:${(i * 0.1).toFixed(1)}s">
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
