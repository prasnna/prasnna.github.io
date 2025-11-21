/**
 * Tracking Module
 * Handles Google Tag Manager event pushing based on data attributes.
 */
export class Tracking {
    constructor() {
        this.init();
    }

    init() {
        // Attach click listeners to all elements with data-track-category
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-track-category]');
            if (target) {
                this.trackEvent({
                    category: target.dataset.trackCategory,
                    action: target.dataset.trackAction || 'click',
                    label: target.dataset.trackLabel || target.innerText.trim(),
                    value: target.dataset.trackValue
                });
            }
        });
    }

    /**
     * Pushes an event to the dataLayer
     * @param {Object} eventData - The event data
     */
    trackEvent({ category, action, label, value }) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'custom_interaction',
            'eventCategory': category,
            'eventAction': action,
            'eventLabel': label,
            'eventValue': value
        });
        console.log('Tracked:', { category, action, label, value });
    }
}
