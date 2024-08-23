function trackLinkClick(category) {
    gtag('event', 'click', {
        'event_category': category
    });
}