import PostCard from "../posts/PostCard.jsx";

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

                <PostCard />
                <PostCard />
                <PostCard />

                <div className="feed__load-more">
                    <button type="button" className="btn btn-outline">Зареди още публикации</button>
                </div>

            </div>

        </>
    )
}