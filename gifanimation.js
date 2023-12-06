// Gif animation restart

function restartAnimation() {
            const element = document.querySelector('.typing-animation');
            element.classList.remove('typing-animation');
            void element.offsetWidth; 
            element.classList.add('typing-animation');
            setTimeout(restartAnimation, 10000); // Restart after 10 seconds (10000 milliseconds)
        }

        setTimeout(restartAnimation, 10000); // Start the animation initially and then restart after 10 seconds