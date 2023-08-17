document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');

    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const userid = document.getElementById('userid').value;
        const message = document.getElementById('message').value;

        const formData = { userid, message };
        console.log(formData);
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    });
});
