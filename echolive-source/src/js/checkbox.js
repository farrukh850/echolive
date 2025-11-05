// Custom checkbox functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find all custom checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"].sr-only');

    checkboxes.forEach(checkbox => {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        const toggleSpan = label?.querySelector('span');
        const backgroundDiv = checkbox.parentElement.querySelector('div:last-child');

        if (label && toggleSpan && backgroundDiv) {
            // Set initial state
            updateCheckboxAppearance(checkbox, toggleSpan, backgroundDiv);

            // Add click event to label
            label.addEventListener('click', function(e) {
                e.preventDefault();
                checkbox.checked = !checkbox.checked;
                updateCheckboxAppearance(checkbox, toggleSpan, backgroundDiv);

                // Trigger change event for form handling
                checkbox.dispatchEvent(new Event('change'));
            });

            // Also handle direct checkbox change events
            checkbox.addEventListener('change', function() {
                updateCheckboxAppearance(checkbox, toggleSpan, backgroundDiv);
            });
        }
    });

    function updateCheckboxAppearance(checkbox, toggleSpan, backgroundDiv) {
        if (checkbox.checked) {
            // Checked state
            toggleSpan.style.transform = 'translateX(28px)'; // 7 * 4px (translate-x-7)
            backgroundDiv.style.backgroundColor = '#F4D03F'; // yellow-main color
        } else {
            // Unchecked state
            toggleSpan.style.transform = 'translateX(0)';
            backgroundDiv.style.backgroundColor = '#D1D5DB'; // gray-300 color
        }
    }
});

