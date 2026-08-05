
export default function AboutUs() {
    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        Опознай ателието
                    </span>
                    <h1 className="script-heading">За нас</h1>
                    <p className="section-sub">Малко за Ели, за четката, която не се разделя с нея, и за историята зад Ellie
                        Art.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color:'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="about-story">
                <div className="about-story__media" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.6" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>
                </div>
                <div className="about-story__text">
                    <span className="eyebrow">Историята ни</span>
                    <h2>Здравей, аз съм Ели 👋</h2>
                    <p>Ellie Art се роди от най-обикновена привичка — да рисувам по чаша лимонада на терасата всяко лято. От
                        няколко скици за приятели, се превърна в малко ателие, което днес споделя цвят и настроение с хора
                        от цялата страна.</p>
                    <p>Всяка картина, картичка и керамично парче минава през ръцете ми — от първата скица до последния
                        мазок. Вярвам, че направените с грижа неща носят различна топлина, и точно това искам да усетиш и
                        ти.</p>
                    <span className="about-story__signature">Ели</span>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color:'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 0 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V60 H0 Z"
                    fill="currentColor" />
            </svg>
            <section className="highlights">
                <div className="highlights__inner">

                    <div className="highlight">
                        <span className="highlight__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19l7-7 3 3-7 7-3-3Z" />
                                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
                                <path d="M2 2l7.5 7.5" />
                            </svg>
                        </span>
                        <h3>Ръчна изработка</h3>
                        <p>Всяко изделие е изработено на ръка, без два еднакви резултата.</p>
                    </div>

                    <div className="highlight">
                        <span className="highlight__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                                <path d="M2 7h20l-2 5H4L2 7Z" />
                                <path d="M12 7V3" />
                            </svg>
                        </span>
                        <h3>Изработка по поръчка</h3>
                        <p>Пиши ми за индивидуален портрет, цветова гама или посвещение по избор.</p>
                    </div>

                    <div className="highlight">
                        <span className="highlight__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="8" width="18" height="13" rx="2" />
                                <path d="M8 8V6a4 4 0 0 1 8 0v2" />
                            </svg>
                        </span>
                        <h3>Грижливо опаковане</h3>
                        <p>Всяка поръчка се опакова внимателно, готова да пътува или да бъде подарена.</p>
                    </div>

                    <div className="highlight">
                        <span className="highlight__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                            </svg>
                        </span>
                        <h3>Направено с любов</h3>
                        <p>Малък бизнес, голяма грижа — всяка поръчка получава пълното ми внимание.</p>
                    </div>

                </div>
            </section>
        </>
    )
}