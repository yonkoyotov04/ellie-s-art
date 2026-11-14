import { Link } from "react-router";

export default function AboutUs() {
    return (
        <main className="about-page">

            <section className="about-hero">

                <div className="about-photo-wrapper">
                    <div className="about-photo-decoration"></div>

                    <img src="./ellie.jpg" alt="Създателката на Ellie's Art" className="about-main-photo" />

                    <div className="about-photo-note">
                        <span>♥</span>
                        С любов към творчеството
                    </div>
                </div>

                <div className="about-hero-content">
                    <span className="about-eyebrow">ЗАПОЗНАЙ СЕ С МЕН</span>

                    <h1>Здравейте, аз съм Ели!</h1>

                    <p className="about-hero-lead">
                        Добре дошли в моето малко творческо кътче!
                    </p>

                    <p>
                        Ellie's Art започна като място, в което споделях
                        любовта си към рисуването, поезията и ръчно
                        изработените неща. Никога не съм предполагала
                        колко много хора ще харесат това, което създавам.
                    </p>

                    <p>
                        Днес тук ще откриете разнообразни ръчно
                        изработени творения, направени с много
                        старание, въображение и любов.
                    </p>

                    <Link to="/catalogue" className="about-hero-button">
                        Разгледай творенията
                        <span>→</span>
                    </Link>
                </div>

            </section>

            <section className="about-story">

                <div className="about-section-heading">
                    <span>ВСЯКО НАЧАЛО ИМА СВОЯ ИСТОРИЯ</span>
                    <h2>Как започна всичко?</h2>
                    <p>
                        Една малка идея, много въображение и любов към
                        създаването на красиви неща.
                    </p>
                </div>

                <div className="about-story-content">

                    <div className="about-story-item">
                        <div className="about-story-marker">01</div>

                        <div className="about-story-text">
                            <h3>Всичко започна от любовта към изкуството</h3>
                            <p>
                                Първоначално Ellie's Art беше просто място,
                                където споделях своите рисунки, стихове и
                                различни ръчно изработени проекти.
                                Исках да покажа нещата, които ме вдъхновяват
                                и ми носят радост.
                            </p>
                        </div>
                    </div>

                    <div className="about-story-item">
                        <div className="about-story-marker">02</div>

                        <div className="about-story-text">
                            <h3>Хората започнаха да забелязват творенията</h3>
                            <p>
                                Постепенно все повече хора започнаха да
                                харесват моите изделия. Получавах съобщения
                                от хора, които искаха да имат нещо подобно
                                за себе си или за подарък.
                            </p>
                        </div>
                    </div>

                    <div className="about-story-item">
                        <div className="about-story-marker">03</div>

                        <div className="about-story-text">
                            <h3>Едно хоби се превърна в нещо повече</h3>
                            <p>
                                Така започнах да приемам поръчки и да
                                изпращам творенията си до хора, които искат
                                да внесат малко повече красота и индивидуалност
                                в ежедневието си.
                            </p>
                        </div>
                    </div>

                    <div className="about-story-item">
                        <div className="about-story-marker">04</div>

                        <div className="about-story-text">
                            <h3>И това е само началото!</h3>
                            <p>
                                Днес Ellie's Art е общност от хора, които
                                споделят любовта към ръчната изработка.
                                Продължавам да творя, да експериментирам
                                и да превръщам новите си идеи в реалност.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="about-achievements">

                <div className="about-section-heading">
                    <span>МАЛКО ПОВОДИ ЗА УСМИВКА</span>
                    <h2>Заедно постигнахме толкова много!</h2>
                    <p>
                        Всяко харесване, поръчка и споделен момент
                        означава много за мен.
                    </p>
                </div>

                <div className="about-stats-grid">

                    <div className="about-stat-card">
                        <span className="about-stat-icon">♡</span>
                        <strong>4.6K+</strong>
                        <h3>Последователи</h3>
                        <p>Една прекрасна общност, която расте с времето.</p>
                    </div>

                    <div className="about-stat-card">
                        <span className="about-stat-icon">✿</span>
                        <strong>100+</strong>
                        <h3>Участници</h3>
                        <p>Стотици творчески ентусиасти в нашите конкурси.</p>
                    </div>

                    <div className="about-stat-card">
                        <span className="about-stat-icon">♥</span>
                        <strong>Много</strong>
                        <h3>Създадени творения</h3>
                        <p>Всяко със собствен характер и внимание към детайла.</p>
                    </div>

                </div>

                <p className="about-stats-note">
                    И най-хубавото е, че всичко това нямаше да бъде
                    възможно без вас!
                </p>

            </section>

            <section className="about-philosophy">

                <div className="about-philosophy-decoration">✿</div>

                <span>НЕЩО, В КОЕТО ВЯРВАМ</span>

                <h2>
                    Най-красивите неща не са съвършени.
                    Те са създадени с любов.
                </h2>

                <p>
                    Всяко ръчно изработено творение носи частица
                    от човека, който го е създал. Именно това го
                    прави толкова специално.
                </p>

                <div className="about-philosophy-heart">♥</div>

            </section>

            <section className="about-invitation">

                <h2>Радвам се, че си тук!</h2>

                <p>
                    Разгледай моите творения и може би ще откриеш
                    нещо, което ще те накара да се усмихнеш.
                </p>

                <Link to="/catalogue" className="about-hero-button">
                    Открий своето любимо творение
                    <span>→</span>
                </Link>

            </section>

        </main>
    )
}