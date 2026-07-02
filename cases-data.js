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
        img: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230F172A'/%3E%3Cstop offset='0.5' stop-color='%2314233f'/%3E%3Cstop offset='1' stop-color='%230f2740'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='500' height='300' fill='url(%23bg)'/%3E%3Ccircle cx='430' cy='40' r='150' fill='%233B82F6' opacity='0.12'/%3E%3Ccircle cx='60' cy='270' r='130' fill='%2306B6D4' opacity='0.10'/%3E%3Ccircle cx='300' cy='170' r='90' fill='%235DCA7C' opacity='0.08'/%3E%3Ctext x='250' y='135' text-anchor='middle' font-size='64'%3E%F0%9F%8C%BF%3C/text%3E%3Ctext x='250' y='185' text-anchor='middle' font-family='Tahoma,Arial' font-size='24' font-weight='bold' fill='%23F1F5F9'%3E%D8%B2%D9%8A%D9%88%D8%AA %D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9 %D9%88%D8%B9%D8%B7%D8%A7%D8%B1%D8%A9%3C/text%3E%3Ctext x='250' y='215' text-anchor='middle' font-family='Tahoma,Arial' font-size='14' fill='%2394A3B8'%3E%D9%85%D8%AA%D8%AC%D8%B1 %D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A %C2%B7 %D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%3C/text%3E%3C/svg%3E",
        alt: "متجر زيوت وعطارة إلكتروني في السعودية",
        tag: "زيوت وعطارة",
        tagBg: "rgba(93,202,124,0.2)",
        tagColor: "#5DCA7C",
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
        <a href="${c.url}" class="portfolio-card fade-up visible" style="transition-delay:${(i * 0.1).toFixed(1)}s">
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
