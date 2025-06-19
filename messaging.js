// Messaging system functionality
document.addEventListener('DOMContentLoaded', function() {
    // Conversation switching
    const conversationItems = document.querySelectorAll('.conversation-item');
    
    conversationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Update active state
            conversationItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Load conversation (simulated)
            const userName = this.querySelector('h5').textContent;
            const messageHistory = document.querySelector('.message-history');
            
            if (messageHistory) {
                messageHistory.innerHTML = `
                    <div class="message received">
                        <p>Hi there! This is the beginning of your conversation with ${userName}.</p>
                        <span>Today</span>
                    </div>
                    <div class="message sent">
                        <p>Hello! Looking forward to working with you.</p>
                        <span>Today</span>
                    </div>
                `;
                messageHistory.scrollTop = messageHistory.scrollHeight;
            }
        });
    });
    
    // Initialize first conversation
    if (conversationItems.length > 0) {
        conversationItems[0].click();
    }
    
    // New message button
    const newMessageBtn = document.querySelector('.new-message');
    if (newMessageBtn) {
        newMessageBtn.addEventListener('click', function() {
            alert('New message functionality would open a composer here');
        });
    }
});
