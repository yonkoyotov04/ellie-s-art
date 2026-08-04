export default function PostCard() {
    return (
        <article className="post-card">
            <div className="post-card__media" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.6" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
            </div>
            <div className="post-card__body">
                <div className="post-card__author">
                    <span className="post-card__avatar">Е</span>
                    <span className="post-card__author-meta">
                        <strong>Ели · Ellie Art</strong><br />
                        <span>преди 2 часа</span>
                    </span>
                </div>
                <p className="post-card__text">Нова картина от поредицата „Цитрусова градина“ вече суши боите
                    си! Вдъхновена е от лятото и мириса на прясно откъснати лимони. Скоро ще я добавя и в
                    каталога 🍋🎨</p>
                <div className="post-card__stats">
                    <span>24 харесвания</span>
                    <span>8 коментара</span>
                </div>
                <div className="post-card__actions">
                    <button type="button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                        </svg>
                        Харесай
                    </button>
                    <button type="button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5a8.38 8.38 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3 8.38 8.38 0 0 1 21 11.5Z" />
                        </svg>
                        Коментирай
                    </button>
                </div>
            </div>
        </article>
    )
}