import React from 'react'
import "../CSS/SwipeButtons.css"

import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className="swipe__buttons">
            <IconButton className="btn__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="btn__left">
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="btn__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>

            <IconButton className="btn__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>

            <IconButton className="btn__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
