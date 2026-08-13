import { Link } from "react-router";

export default function AdminHeader() {
    return (
        <header className="dash-topbar">
            <div className="dash-topbar__inner">
                <Link to="/admin/dashboard" className="nav-logo">
                    <img src="/logo.png" alt="Ellie Art лого" className="nav-logo__img" />
                        <span className="nav-logo__text">
                            <strong>Ellie's</strong>
                            <span>ART</span>
                        </span>
                </Link>
                <span className="dash-topbar__tag">Табло за управление</span>
                <div className="dash-topbar__actions">
                    <Link to="/" className="btn btn-ghost btn-sm">← Към сайта</Link>
                    <Link to="/" className="btn btn-outline btn-sm">Изход</Link>
                </div>
            </div>
        </header>
    )
}