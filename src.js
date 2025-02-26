function hideAds() {
  const adTextElements = document.getElementsByClassName("ytp-ad-text");
  if (adTextElements.length > 0) {
    const videos = document.getElementsByClassName("video-stream html5-main-video");
    if (videos.length > 0) {
      const video = videos[0];
      video.play();
      video.pause();
      video.currentTime = video.duration;

      if (videos.length > 1) {
        const video1 = videos[1];
        video1.play();
        video1.pause();
        video1.currentTime = video1.duration;
      }
    }
  }

  const adOverlayCloseButtons = document.getElementsByClassName("ytp-ad-overlay-close-button");
  if (adOverlayCloseButtons.length > 0) {
    for (let i = 0; i < adOverlayCloseButtons.length; i++) {
      adOverlayCloseButtons[i].click();
    }
  }
}

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length > 0) {
      hideAds();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

hideAds();
