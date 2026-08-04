import Comment from "./Comment.jsx";

export default function PostCard() {
    return (
        <article className="feed-post">
            <div className="feed-post__head">
                <span className="feed-post__avatar">Е</span>
                <span className="feed-post__meta">
                    <strong>Ели · Ellie Art</strong>
                    <span>преди 2 часа</span>
                </span>
                <button className="feed-post__menu" aria-label="Още опции">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="5" cy="12" r="1.8" />
                        <circle cx="12" cy="12" r="1.8" />
                        <circle cx="19" cy="12" r="1.8" />
                    </svg>
                </button>
            </div>

            <p className="feed-post__text">Нова картина от поредицата „Цитрусова градина“ вече суши боите си! Вдъхновена
                е от лятото и мириса на прясно откъснати лимони. Скоро ще я добавя и в каталога 🍋🎨</p>

            <div className="feed-post__media" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.6" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
            </div>

            <div className="feed-post__stats">
                <span className="likes">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                    24
                </span>
                <span>8 коментара · 3 споделяния</span>
            </div>

            <div className="feed-post__actions">
                <button type="button" className="is-liked">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                    <span>Харесано</span>
                </button>
                <button type="button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path
                            d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5a8.38 8.38 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3 8.38 8.38 0 0 1 21 11.5Z" />
                    </svg>
                    <span>Коментирай</span>
                </button>
            </div>

            <div className="feed-post__comments">
                <Comment />
                <Comment />
                <button type="button" className="feed-post__more-comments">Виж още 6 коментара</button>
            </div>

            <div className="comment-composer">
                <span className="comment-composer__avatar">Т</span>
                <div className="comment-composer__field">
                    <label htmlFor="comment-1" className="sr-only">Напиши коментар</label>
                    <input type="text" id="comment-1" placeholder="Напиши коментар…" />
                    <button type="button" className="comment-composer__send" aria-label="Изпрати коментар">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    )
}