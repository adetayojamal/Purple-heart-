function createHeart() {
    const Heart = document.createElement('div');
    Heart.classList.add('heart');
    
    Heart.innerText = '💜';

    document.body.appendChild(Heart);
}

setInterval(createHeart, 1000);
