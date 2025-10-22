// Popup functionality for multiple popups
document.addEventListener('DOMContentLoaded', () => {
    // ===== Edit Package Popup =====
    const editPackagePopup = document.getElementById('edit-package-popup');

    if (editPackagePopup) {
        const editButtons = document.querySelectorAll('.edit-popup-button');
        const editCloseIcon = editPackagePopup.querySelector('.close-icon');
        const editCancelButton = editPackagePopup.querySelector('button:first-of-type');

        // Toggle popup visibility when edit buttons are clicked
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openPopup(editPackagePopup);
            });
        });

        // Close popup when clicking the close icon
        if (editCloseIcon) {
            editCloseIcon.addEventListener('click', () => {
                closePopup(editPackagePopup);
            });
        }

        // Close popup when clicking the cancel button
        if (editCancelButton) {
            editCancelButton.addEventListener('click', (e) => {
                e.preventDefault();
                closePopup(editPackagePopup);
            });
        }

        // Close popup when clicking outside the popup content
        editPackagePopup.addEventListener('click', (e) => {
            if (e.target === editPackagePopup) {
                closePopup(editPackagePopup);
            }
        });

        // Initialize popup to be hidden by default
        closePopup(editPackagePopup);
    }

    // ===== Unsubscribe Popup =====
    const unsubscribePopup = document.getElementById('unsubscribe');

    if (unsubscribePopup) {
        const unsubscribeButtons = document.querySelectorAll('.unsubscribe-button');
        const unsubscribeCloseIcon = unsubscribePopup.querySelector('.close-icon');
        const unsubscribeCancelButton = unsubscribePopup.querySelector('button:first-of-type');

        // Toggle popup visibility when unsubscribe buttons are clicked
        unsubscribeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openPopup(unsubscribePopup);
            });
        });

        // Close popup when clicking the close icon
        if (unsubscribeCloseIcon) {
            unsubscribeCloseIcon.addEventListener('click', () => {
                closePopup(unsubscribePopup);
            });
        }

        // Close popup when clicking the cancel button
        if (unsubscribeCancelButton) {
            unsubscribeCancelButton.addEventListener('click', (e) => {
                e.preventDefault();
                closePopup(unsubscribePopup);
            });
        }

        // Close popup when clicking outside the popup content
        unsubscribePopup.addEventListener('click', (e) => {
            if (e.target === unsubscribePopup) {
                closePopup(unsubscribePopup);
            }
        });

        // Initialize popup to be hidden by default
        closePopup(unsubscribePopup);
    }

    // ===== Delete Card Popup =====
    const deleteCardPopup = document.getElementById('delete-card');

    if (deleteCardPopup) {
        const deleteCardButtons = document.querySelectorAll('.delete-card-button');
        const deleteCardCloseIcon = deleteCardPopup.querySelector('.close-icon');
        const deleteCardCancelButton = deleteCardPopup.querySelector('button:first-of-type');

        // Toggle popup visibility when delete card buttons are clicked
        deleteCardButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openPopup(deleteCardPopup);
            });
        });

        // Close popup when clicking the close icon
        if (deleteCardCloseIcon) {
            deleteCardCloseIcon.addEventListener('click', () => {
                closePopup(deleteCardPopup);
            });
        }

        // Close popup when clicking the cancel button
        if (deleteCardCancelButton) {
            deleteCardCancelButton.addEventListener('click', (e) => {
                e.preventDefault();
                closePopup(deleteCardPopup);
            });
        }

        // Close popup when clicking outside the popup content
        deleteCardPopup.addEventListener('click', (e) => {
            if (e.target === deleteCardPopup) {
                closePopup(deleteCardPopup);
            }
        });

        // Initialize popup to be hidden by default
        closePopup(deleteCardPopup);
    }

    // ===== Shared Functions =====
    // Close all popups with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (editPackagePopup && isPopupOpen(editPackagePopup)) {
                closePopup(editPackagePopup);
            }
            if (unsubscribePopup && isPopupOpen(unsubscribePopup)) {
                closePopup(unsubscribePopup);
            }
            if (deleteCardPopup && isPopupOpen(deleteCardPopup)) {
                closePopup(deleteCardPopup);
            }
        }
    });

    // Function to open popup
    function openPopup(popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close popup
    function closePopup(popup) {
        popup.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Check if popup is open
    function isPopupOpen(popup) {
        return popup.style.display === 'block';
    }
});
