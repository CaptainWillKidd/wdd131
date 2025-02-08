
function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    

    if (reviewCount === null) {
        reviewCount = 0;
    } else {

        reviewCount = parseInt(reviewCount);
    }
    
    reviewCount++;
    
    localStorage.setItem('reviewCount', reviewCount);
    
    const counterElement = document.getElementById('review-counter');
    if (counterElement) {
        counterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
    }
}

function displayFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById('product').textContent = urlParams.get('product');
    document.getElementById('rating').textContent = '★'.repeat(urlParams.get('Rating'));
    document.getElementById('install-date').textContent = urlParams.get('install-date');
    
    const features = urlParams.getAll('features');
    document.getElementById('features').textContent = features.join(', ');
    
    document.getElementById('review-text').textContent = urlParams.get('review') || 'No review provided';
    document.getElementById('user').textContent = urlParams.get('name') || 'Anonymous';
}

document.addEventListener("DOMContentLoaded", function() {
    displayFormData();
    updateReviewCounter();
    
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastmodified').textContent = `Last Modified: ${document.lastModified}`;
});