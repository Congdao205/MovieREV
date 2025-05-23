import { createContext, useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
Modal.setAppElement('#root');

function getYouTubeId(url) {
    if (!url) return '';
    const id = url.split('v=')[1];
    if (!id) return '';
    return id.split('&')[0];
}

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

const TrailerContext = createContext();
const TrailerProvider = ({ children }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    const handlerTrailer = async (slug) => {
        setTrailerKey("")
        try {
            const url = `${import.meta.env.VITE_MOVIE_DETAIL_URL}${slug}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            };
            const response = await fetch(url, options);
            const data = await response.json();
            setTrailerKey(getYouTubeId(data.movie.trailer_url));
            console.log(getYouTubeId(data.movie.trailer_url));
            setIsOpen(true)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <TrailerContext.Provider value={{ handlerTrailer }}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setIsOpen(false) }}
                style={{
                    overlay: {
                        position: 'fixed',
                        zIndex: 9999,
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />
            </Modal>
        </TrailerContext.Provider>
    )
}

export { TrailerContext, TrailerProvider }