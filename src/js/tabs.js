// Tab Functionality for Collection Posts
class TabController {
    constructor() {
        this.init();
    }

    init() {
        // Find all tab containers
        const tabContainers = document.querySelectorAll('.mb-5.bg-white.p-4.rounded-3xl');

        tabContainers.forEach(container => {
            this.initializeTabContainer(container);
        });
    }

    initializeTabContainer(container) {
        const tabButtons = container.querySelectorAll('.tab-buttons > div');
        const tabContents = container.querySelectorAll('.tab-content');

        // Make tab buttons clickable and add event listeners
        tabButtons.forEach((button, index) => {
            // Add cursor pointer style
            button.style.cursor = 'pointer';

            button.addEventListener('click', () => {
                // Remove active styles from all buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove('bg-gray-100');
                    btn.classList.add('bg-white');
                });

                // Hide all tab contents
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });

                // Add active style to clicked button
                button.classList.remove('bg-white');
                button.classList.add('bg-gray-100');

                // Show corresponding content
                if (tabContents[index]) {
                    tabContents[index].style.display = 'flex';
                }
            });
        });

        // Initialize: Set first tab as active and hide other contents
        if (tabButtons.length > 0 && tabContents.length > 0) {
            // Set first button as active
            tabButtons[0].classList.remove('bg-white');
            tabButtons[0].classList.add('bg-gray-100');

            // Show first content, hide others
            tabContents.forEach((content, index) => {
                if (index === 0) {
                    content.style.display = 'flex';
                } else {
                    content.style.display = 'none';
                }
            });
        }
    }

    // Method to refresh/reinitialize tabs (useful for dynamically added content)
    refresh() {
        this.init();
    }
}

// Initialize tab functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tabController = new TabController();
});

export default TabController;
