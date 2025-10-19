// Generic Dropdown Menu Functionality
class DropdownMenu {
    constructor() {
        this.activeDropdown = null;
        this.overlay = null;
        this.init();
    }

    init() {
        // Create overlay element
        this.createOverlay();

        // Initialize all dropdown buttons
        this.bindEvents();

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
    }

    createOverlay() {
        // Create overlay element for mobile
        this.overlay = document.createElement('div');
        this.overlay.className = 'dropdown-overlay fixed inset-0 bg-black/50 z-10 hidden lg:hidden';
        this.overlay.addEventListener('click', () => this.closeAllDropdowns());
        document.body.appendChild(this.overlay);
    }

    bindEvents() {
        // Find all dropdown buttons and bind click events
        const dropdownButtons = document.querySelectorAll('.menu-dropdown-button');

        dropdownButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown(button);
            });
        });
    }

    toggleDropdown(button) {
        const dropdown = button.querySelector('.menu-dropdown');

        if (!dropdown) {
            console.warn('No .menu-dropdown found within button');
            return;
        }

        // Close other dropdowns first
        if (this.activeDropdown && this.activeDropdown !== dropdown) {
            this.closeDropdown(this.activeDropdown);
        }

        // Toggle current dropdown
        if (dropdown.classList.contains('hidden')) {
            this.openDropdown(dropdown);
        } else {
            this.closeDropdown(dropdown);
        }
    }

    openDropdown(dropdown) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('block');
        this.activeDropdown = dropdown;

        // Show overlay on mobile only
        this.showOverlay();

        // Add active state to button if needed
        const button = dropdown.closest('.menu-dropdown-button');
        if (button) {
            button.classList.add('dropdown-active');
        }
    }

    closeDropdown(dropdown) {
        dropdown.classList.remove('block');
        dropdown.classList.add('hidden');

        // Hide overlay
        this.hideOverlay();

        // Remove active state from button
        const button = dropdown.closest('.menu-dropdown-button');
        if (button) {
            button.classList.remove('dropdown-active');
        }

        if (this.activeDropdown === dropdown) {
            this.activeDropdown = null;
        }
    }

    closeAllDropdowns() {
        const openDropdowns = document.querySelectorAll('.menu-dropdown.block');
        openDropdowns.forEach(dropdown => this.closeDropdown(dropdown));
    }

    showOverlay() {
        if (this.overlay) {
            this.overlay.classList.remove('hidden');
        }
    }

    hideOverlay() {
        if (this.overlay) {
            this.overlay.classList.add('hidden');
        }
    }

    handleOutsideClick(e) {
        // Don't close if clicking inside a dropdown
        if (e.target.closest('.menu-dropdown-button')) {
            return;
        }

        this.closeAllDropdowns();
    }

    // Method to refresh/reinitialize dropdowns (useful for dynamically added content)
    refresh() {
        this.bindEvents();
    }
}

// Initialize dropdown functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dropdownMenu = new DropdownMenu();
});

// Export for module usage if needed
export default DropdownMenu;
