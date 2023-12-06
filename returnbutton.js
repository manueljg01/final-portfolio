        // JavaScript for showing/hiding the return to top button
        const returnToTopButton = document.getElementById('return-to-top');

        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                returnToTopButton.style.display = 'block';
            } else {
                returnToTopButton.style.display = 'none';
            }
        });

        returnToTopButton.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });