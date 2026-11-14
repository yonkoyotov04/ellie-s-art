import { Link } from "react-router";

export default function NotFound() {
    return (
        <main className="not-found-page">
            <div className="not-found-decoration not-found-decoration--one">✿</div>
            <div className="not-found-decoration not-found-decoration--two">✧</div>
            <div className="not-found-decoration not-found-decoration--three">♡</div>

            <section className="not-found-content">
                <div className="not-found-illustration">
                    <div className="not-found-circle"></div>

                    <div className="not-found-flower not-found-flower--left">✿</div>
                    <div className="not-found-flower not-found-flower--right">✿</div>

                    <span className="not-found-number">4</span>
                    <div className="not-found-bunny">
                        <span className="not-found-bunny-ear not-found-bunny-ear--left"></span>
                        <span className="not-found-bunny-ear not-found-bunny-ear--right"></span>
                        <div className="not-found-bunny-face">
                            <span className="not-found-bunny-eye not-found-bunny-eye--left"></span>
                            <span className="not-found-bunny-eye not-found-bunny-eye--right"></span>
                            <span className="not-found-bunny-nose"></span>
                            <span className="not-found-bunny-cheek not-found-bunny-cheek--left"></span>
                            <span className="not-found-bunny-cheek not-found-bunny-cheek--right"></span>
                        </div>
                    </div>
                    <span className="not-found-number">4</span>
                </div>

                <span className="not-found-eyebrow">ОПА! МАЛКО СЕ ИЗГУБИХМЕ</span>

                <h1>Тази страница май се скри!</h1>

                <p className="not-found-description">
                    Изглежда, че страницата, която търсиш, не съществува
                    или е решила да се премести. Но не се притеснявай —
                    тук винаги има още красиви творения за разглеждане!
                </p>

                <Link to="/" className="not-found-home-button">
                    <span>⌂</span>
                    Обратно към началото
                </Link>

                <Link to="/catalogue" className="not-found-catalogue-link">
                    Или разгледай каталога
                    <span>→</span>
                </Link>
            </section>

            <div className="not-found-footer">
                <span>Създадено с любов</span>
                <span className="not-found-footer-heart">♥</span>
                <span>Ellie's Art</span>
            </div>
        </main>

    )
}