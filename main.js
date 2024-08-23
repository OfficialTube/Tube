// Function to send event data to Google Analytics
function trackLinkClick(category) {
    gtag('event', 'click', {
        'event_category': category
    });
}

// Add event listeners to links with a specific data attribute
document.addEventListener('DOMContentLoaded', function() {
    // Select all links with a data-track-link attribute
    const links = document.querySelectorAll('a[data-track-link]');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Use the link's title as the category
            const category = this.getAttribute('title') || 'Untitled Link';
            trackLinkClick(category);
        });
    });
});