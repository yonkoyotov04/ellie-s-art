import { useContext, useState } from "react"
import AdminContext from "../contexts/AdminContext.jsx";
import useFetch from "./useFetch.js"

export default function useDelete(profileDelete, data, setData) {
    const [showDeletePrompt, setShowDeletePrompt] = useState(false);
    const [targetId, setTargetId] = useState(null);
    const { admin, logoutHandler } = useContext(AdminContext);
    const { fetcher } = useFetch();

    const onDeleteClick = (id) => {
        setTargetId(id);
        setShowDeletePrompt(true);
    }

    const onNoClick = () => {
        setShowDeletePrompt(false);
    }

    const onYesClick = () => {
        let url = `/products/${targetId}`
        
        if (profileDelete) {
            url = `/admin/${targetId}`
        }

        fetcher(url, 'DELETE', null, { accessToken: admin?.accessToken });

        if (profileDelete) {
            logoutHandler();
            return;
        }

        setData(data => data.filter(product => product.id !== targetId));
        setShowDeletePrompt(false);
    }

    const DeletePrompt = () => {
        return (
            <div className="modal-backdrop">
                <div className="modal-card">
                    <span className="modal-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                        </svg>
                    </span>

                    <p className="modal-card__text">
                        Сигурна ли си, че искаш да изтриеш {profileDelete ? 'своя профил' : 'това'}? Действието е необратимо.
                    </p>

                    <div className="modal-card__actions">
                        <button type="button" onClick={onNoClick} className="btn btn-ghost">Не</button>
                        <button type="button" onClick={onYesClick} className="btn btn-danger">Да, изтрий</button>
                    </div>
                </div>
            </div>
        )
    }

    return {
        DeletePrompt: showDeletePrompt ? <DeletePrompt /> : '',
        onDeleteClick
    }
}