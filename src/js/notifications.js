// Notification paragraph toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all notification caret buttons
    const caretButtons = document.querySelectorAll('.notification-caret-button');

    caretButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the notification paragraph within the same notification container
            const notificationContainer = this.closest('.flex.items-start.justify-between.gap-2\\.5');
            const paragraph = notificationContainer.querySelector('.notification-paragraph');

            if (paragraph) {
                // Toggle the expanded class
                paragraph.classList.toggle('expanded');

                // Change background color of notification container
                if (paragraph.classList.contains('expanded')) {
                    notificationContainer.style.backgroundColor = 'white';
                } else {
                    notificationContainer.style.backgroundColor = '';
                }

                // Rotate the caret icon
                const caretImg = this.querySelector('img');
                if (caretImg) {
                    if (paragraph.classList.contains('expanded')) {
                        caretImg.style.transform = 'rotate(180deg)';
                    } else {
                        caretImg.style.transform = 'rotate(0deg)';
                    }
                }
            }
        });
    });
});

