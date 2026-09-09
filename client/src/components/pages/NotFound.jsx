import { Link } from "react-router";

export default function NotFound() {
    return (
        <section className="not-found">
            <div className="not-found__inner">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    Грешка 404
                </span>

                <p className="not-found__code">404</p>

                <h1 className="script-heading not-found__heading">Ой… тази страница я няма</h1>
                <p className="section-sub">Изглежда страницата, която търсиш, е отлетяла нанякъде — може би с
                    някоя пеперуда. Провери адреса или се върни в познатите води.</p>

                <div className="not-found__actions">
                    <Link to="/" className="btn btn-primary">Към началото</Link>
                    <Link to="/catalogue" className="btn btn-outline">Разгледай каталога</Link>
                </div>
            </div>
        </section>
    )
}