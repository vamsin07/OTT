function showContactDetails(){
        document.body.classList.add('scroll-disabled');
        document.getElementById('contact-modal').classList.add('modal-open');
}

function hideContactDetails(){
        document.body.classList.remove('scroll-disabled');
        document.getElementById('contact-modal').classList.remove('modal-open');
}


function showVideo() {
    document.body.classList.add('scroll-disabled');
    document.getElementById('video-modal').classList.add('modal-open');
}

function hideVideo() {
    document.body.classList.remove('scroll-disabled');
    document.getElementById('video-modal').classList.remove('modal-open');
    document.getElementById('yt-iframe').src = document.getElementById('yt-iframe').src;
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contact-modal')) {
        hideContactDetails()
    }

    if (event.target == document.getElementById('video-modal')) {
        hideVideo()
    }
}