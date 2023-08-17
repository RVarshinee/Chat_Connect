const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userid = document.getElementById('userid').value;
    const message = document.getElementById('message').value;
    const formData = { userid, message };

    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert('Feedback submitted successfully!');
        feedbackForm.reset();
    } else {
        alert('Failed to submit feedback. Please try again.');
    }
});
