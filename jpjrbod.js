document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect to all sections with class "fade-in"
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Video background control
    const videos = document.querySelectorAll('.background-video');
    let currentVideoIndex = 0;

    function playVideo(index) {
        videos[index].currentTime = 0;
        videos[index].play();
    }

    function stopVideo(index) {
        videos[index].pause();
    }

    function toggleVideos() {
        const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        playVideo(nextVideoIndex);
        stopVideo(currentVideoIndex);
        currentVideoIndex = nextVideoIndex;
    }

    // Start the first video
    playVideo(currentVideoIndex);
});


