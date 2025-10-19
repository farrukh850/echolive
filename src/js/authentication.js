document.addEventListener('DOMContentLoaded', function() {
    function setupIconSwapping() {
        const inputFields = document.querySelectorAll('input[type="text"], input[type="password"]');

        inputFields.forEach((input, index) => {
            const container = input.parentElement;
            let regularIcon, coloredIcon;

            if (input.type === 'text') {
                regularIcon = container.querySelector('img[src="/images/envelope.svg"]');
                coloredIcon = container.querySelector('img[src="/images/envelope-colored.svg"]');
            } else if (input.type === 'password') {
                regularIcon = container.querySelector('img[src="/images/lock.svg"]');
                coloredIcon = container.querySelector('img[src="/images/lock-colored.svg"]');
            }

            if (regularIcon && coloredIcon) {
                coloredIcon.style.display = 'none';

                input.addEventListener('focus', function() {
                    regularIcon.style.display = 'none';
                    coloredIcon.style.display = 'block';
                });

                input.addEventListener('blur', function() {
                    regularIcon.style.display = 'block';
                    coloredIcon.style.display = 'none';
                });
            }
        });
    }

    setupIconSwapping();

    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const eyeIcons = document.querySelectorAll('img[src="/images/eye-open.svg"]');

    if (passwordInputs[0] && eyeIcons[0]) {
        eyeIcons[0].addEventListener('click', function() {
            if (passwordInputs[0].type === 'password') {
                passwordInputs[0].type = 'text';
                eyeIcons[0].style.opacity = '0.5';
            } else {
                passwordInputs[0].type = 'password';
                eyeIcons[0].style.opacity = '1';
            }
        });
    }
    if (passwordInputs[1] && eyeIcons[1]) {
        eyeIcons[1].addEventListener('click', function() {
            if (passwordInputs[1].type === 'password') {
                passwordInputs[1].type = 'text';
                eyeIcons[1].style.opacity = '0.5';
            } else {
                passwordInputs[1].type = 'password';
                eyeIcons[1].style.opacity = '1';
            }
        });
    }
});
