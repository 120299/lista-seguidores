import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({ userName, name, inicialIsFollowing }) {
    const isFollowingState = useState(inicialIsFollowing);
    const isFollowing = isFollowingState[0];
    var setIsFollowing = isFollowingState[1];

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClasseName = isFollowing ? 'tw-followCard-button-is-following' : 'tw-followCard-button';
    const imgAvatar = "https://unavatar.io/" + userName;

    const handleClick = () => {
        setIsFollowing(!isFollowing); 
    }

    return (
        <article className="tw-followCard">
            <figure className='tw-followCard-figure'>
                <img className='tw-followCard-img' src={imgAvatar} alt="Es un avatar" />
                <figcaption className='tw-followCard-figcaption'><strong>{name}</strong></figcaption>
                <span className='tw-followCard-span'>@{userName}</span>
            </figure>
            <aside className='tw-followCard-aside'>
                <button className={buttonClasseName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
