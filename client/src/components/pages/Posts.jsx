export default function Posts() {
    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5a8.38 8.38 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3 8.38 8.38 0 0 1 21 11.5Z" />
                        </svg>
                        Направо от ателието
                    </span>
                    <h1 className="script-heading">Публикации</h1>
                    <p className="section-sub">Истории, зад кулисите и новости от Ели — харесвай и коментирай както във
                        Facebook.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color:'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <div className="feed">

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
                        <div className="comment">
                            <span className="comment__avatar">М</span>
                            <div className="comment__body">
                                <div className="comment__bubble">
                                    <strong>Мария Петрова</strong>
                                    <p>Прекрасна е! Жълтото направо грее 😍</p>
                                </div>
                                <div className="comment__meta">
                                    <button type="button">Харесай</button>
                                    <button type="button">Отговори</button>
                                    <span>преди 1 час</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <span className="comment__avatar">Г</span>
                            <div className="comment__body">
                                <div className="comment__bubble">
                                    <strong>Георги Иванов</strong>
                                    <p>Ще има ли и по-малък формат за нея?</p>
                                </div>
                                <div className="comment__meta">
                                    <button type="button">Харесай</button>
                                    <button type="button">Отговори</button>
                                    <span>преди 45 мин</span>
                                </div>
                            </div>
                        </div>
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

                <article className="feed-post">
                    <div className="feed-post__head">
                        <span className="feed-post__avatar">Е</span>
                        <span className="feed-post__meta">
                            <strong>Ели · Ellie Art</strong>
                            <span>вчера в 18:42</span>
                        </span>
                        <button className="feed-post__menu" aria-label="Още опции">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="5" cy="12" r="1.8" />
                                <circle cx="12" cy="12" r="1.8" />
                                <circle cx="19" cy="12" r="1.8" />
                            </svg>
                        </button>
                    </div>

                    <p className="feed-post__text">Зад кулисите днес 🖌️ — подготвям новата колекция картички за пролетта.
                        Толкова много цветя, толкова малко часове в денонощието! Кажете кой цвят искате да видите повече в
                        новите продукти?</p>

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
                            41
                        </span>
                        <span>15 коментара · 5 споделяния</span>
                    </div>

                    <div className="feed-post__actions">
                        <button type="button">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                            </svg>
                            <span>Харесай</span>
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
                        <div className="comment">
                            <span className="comment__avatar">С</span>
                            <div className="comment__body">
                                <div className="comment__bubble">
                                    <strong>Симона Тодорова</strong>
                                    <p>Лилаво! Определено лилаво 💜</p>
                                </div>
                                <div className="comment__meta">
                                    <button type="button">Харесай</button>
                                    <button type="button">Отговори</button>
                                    <span>преди 20 часа</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="feed-post__more-comments">Виж още 14 коментара</button>
                    </div>

                    <div className="comment-composer">
                        <span className="comment-composer__avatar">Т</span>
                        <div className="comment-composer__field">
                            <label htmlFor="comment-2" className="sr-only">Напиши коментар</label>
                            <input type="text" id="comment-2" placeholder="Напиши коментар…" />
                                <button type="button" className="comment-composer__send" aria-label="Изпрати коментар">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                                    </svg>
                                </button>
                        </div>
                    </div>
                </article>

                <article className="feed-post">
                    <div className="feed-post__head">
                        <span className="feed-post__avatar">Е</span>
                        <span className="feed-post__meta">
                            <strong>Ели · Ellie Art</strong>
                            <span>преди 3 дни</span>
                        </span>
                        <button className="feed-post__menu" aria-label="Още опции">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="5" cy="12" r="1.8" />
                                <circle cx="12" cy="12" r="1.8" />
                                <circle cx="19" cy="12" r="1.8" />
                            </svg>
                        </button>
                    </div>

                    <p className="feed-post__text">Благодаря на всички, които се отбихте на панаира на занаятите този уикенд!
                        Беше страхотно да се запознаем на живо 🧡 Следващата спирка — есенния базар в центъра.</p>

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
                            67
                        </span>
                        <span>22 коментара · 9 споделяния</span>
                    </div>

                    <div className="feed-post__actions">
                        <button type="button">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                            </svg>
                            <span>Харесай</span>
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
                        <div className="comment">
                            <span className="comment__avatar">Й</span>
                            <div className="comment__body">
                                <div className="comment__bubble">
                                    <strong>Йоана Колева</strong>
                                    <p>Купих си чашата с ментата — прекрасна е на живо!</p>
                                </div>
                                <div className="comment__meta">
                                    <button type="button">Харесай</button>
                                    <button type="button">Отговори</button>
                                    <span>преди 2 дни</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="feed-post__more-comments">Виж още 21 коментара</button>
                    </div>

                    <div className="comment-composer">
                        <span className="comment-composer__avatar">Т</span>
                        <div className="comment-composer__field">
                            <label for="comment-3" className="sr-only">Напиши коментар</label>
                            <input type="text" id="comment-3" placeholder="Напиши коментар…" />
                                <button type="button" className="comment-composer__send" aria-label="Изпрати коментар">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                                    </svg>
                                </button>
                        </div>
                    </div>
                </article>

                <div className="feed__load-more">
                    <button type="button" className="btn btn-outline">Зареди още публикации</button>
                </div>

            </div>

        </>
    )
}