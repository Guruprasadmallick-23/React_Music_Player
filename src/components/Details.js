import React from 'react';

function Details(props) {
    return (
        <div className="MainPlayer-details">
            <div className="details-img">
                <img src="" alt="" />
            </div>
            <h3 className="title">{props.song.title}</h3>
            <h4 className="artist">{props.song.artist}</h4>
        </div>
    );
}

export default Details;