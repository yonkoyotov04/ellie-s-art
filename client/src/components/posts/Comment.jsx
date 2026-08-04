export default function Comment() {
    return (
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
    )
}