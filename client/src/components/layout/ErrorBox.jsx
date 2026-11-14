export default function ErrorBox({ errorMessage, remove }) {
    return (
        <div
            className="toast toast--error"
            role="alert"
            aria-live="assertive"
        >
            <span className="toast__icon">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5m0 3h.01" />
                </svg>
            </span>

            <div className="toast__content">
                <strong className="toast__title">Опа! Нещо се обърка.</strong>
                <p className="toast__text">{errorMessage}</p>
            </div>

            <button
                type="button"
                className="toast__close"
                onClick={remove}
                aria-label="Затвори"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                >
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}