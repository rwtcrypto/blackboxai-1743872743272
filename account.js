// Account Management
const accountManager = {
    // Initialize account page
    init: function() {
        this.loadUserProfile();
        this.setupEventListeners();
    },

    // Load user profile data
    loadUserProfile: function() {
        const user = auth.getCurrentUser();
        if (user) {
            document.getElementById('username').value = user.username || '';
            document.getElementById('email').value = user.email || '';
            document.getElementById('avatar').src = user.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';
        }
    },

    // Set up event listeners
    setupEventListeners: function() {
        // Avatar upload
        const avatarUpload = document.getElementById('avatarUpload');
        const avatar = document.getElementById('avatar');
        
        if (avatarUpload && avatar) {
            avatarUpload.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        avatar.src = event.target.result;
                        // In a real app, you would upload this to a server
                    };
                    reader.readAsDataURL(file);
                }
            });

            avatar.addEventListener('click', function() {
                avatarUpload.click();
            });
        }

        // Save profile button
        const saveBtn = document.querySelector('button.bg-blue-500');
        if (saveBtn) {
            saveBtn.addEventListener('click', this.saveProfile);
        }

        // Dark mode toggle
        const darkModeToggle = document.querySelector('input[type="checkbox"]');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', this.toggleDarkMode);
        }
    },

    // Save profile changes
    saveProfile: function() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;

        // In a real app, this would call an API to update the user profile
        alert('Profile saved successfully!');
    },

    // Toggle dark mode
    toggleDarkMode: function(e) {
        const isDark = e.target.checked;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('darkMode', isDark);
    }
};

// Initialize account manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    accountManager.init();
});