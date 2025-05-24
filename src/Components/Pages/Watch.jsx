
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'
import { useParams } from 'react-router-dom'
import Hls from 'hls.js';

const Watch = () => {
    const [episodes, setEpisodes] = useState([]);
    const [currentEpisode, setCurrentEpisode] = useState(null);
    const videoRef = useRef();
    const { slug } = useParams();
    const videoPlayer = async () => {
        try {
            const url = `${import.meta.env.VITE_MOVIE_DETAIL_URL}${slug}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            }
            const response = await fetch(url, options);
            const data = await response.json();
            const eps = data.episodes?.[0]?.server_data || [];
            setEpisodes(eps);
            if (eps.length > 0)
                setCurrentEpisode(eps[0])
        } catch (error) {

        }
    }
    useEffect(() => {
        videoPlayer();
    }, [])

    useEffect(() => {
        if (!currentEpisode) return;
        const video = videoRef.current;
        if (Hls.isSupported && currentEpisode.link_m3u8) {
            const hls = new Hls();
            hls.loadSource(currentEpisode.link_m3u8);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_LOADED, () => {
                video.play();
            });
            return () => hls.destroy();
        } else {
            video.src = "";
        }
    }, [currentEpisode])
    return (
        <DefaultLayout>
            <div className="mt-5 pb-3">
                <div className="w-full">
                    {currentEpisode?.link_m3u8 ? (
                        <video
                            ref={videoRef}
                            controls
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-black"
                        />
                    ) : (
                        currentEpisode?.link_embed && (
                            <iframe
                                src={currentEpisode.link_embed}
                                allowFullScreen
                                title="Video Player"
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-none"
                            />
                        )
                    )}
                </div>

                <h3 className="mx-3 mt-6 text-lg font-semibold text-white">Danh sách tập:</h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {episodes.map((ep, index) => (
                        <button
                            key={index}
                            className={`cursor-pointer p-2 rounded bg-slate-500 hover:bg-slate-400 ${currentEpisode?.name === ep.name ? "text-red-400" : "text-white"}`}
                            onClick={() => setCurrentEpisode(ep)}>
                            {ep.name}
                        </button>
                    ))}
                </div>
            </div>

            <div>

            </div>
        </DefaultLayout>
    )
}

export default Watch
