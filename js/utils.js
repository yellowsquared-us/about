
export const showContent = (elementId, elements) => {
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (id === elementId) {
            element.style.display = 'block';
            element.offsetHeight; // Trigger reflow
            element.classList.remove('opacity-0', 'translate-y-4');
        } else {
            element.style.display = 'none';
            element.classList.add('opacity-0', 'translate-y-4');
        }
    });
};

export const startCountdown = (countdownId, redirectUrl, seconds = 5) => {
    let count = seconds;
    const countdownElement = document.getElementById(countdownId);
    const interval = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        if (count <= 0) {
            clearInterval(interval);
            window.location.href = redirectUrl;
        }
    }, 1000);
};
