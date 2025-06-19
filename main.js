// Main application functionality
document.addEventListener('DOMContentLoaded', function() {
    // Circular navigation toggle
    const navCenter = document.querySelector('.nav-center');
    const navItems = document.querySelector('.nav-items');
    
    if (navCenter && navItems) {
        navCenter.addEventListener('click', function() {
            this.classList.toggle('active');
            navItems.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                // Position nav items in a circle
                const items = document.querySelectorAll('.nav-item');
                const angleStep = (2 * Math.PI) / items.length;
                const radius = 120;
                
                items.forEach((item, index) => {
                    const angle = index * angleStep;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    
                    item.style.transform = `translate(${x}px, ${y}px)`;
                    item.style.opacity = '1';
                });
            } else {
                // Hide nav items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.style.transform = 'translate(0, 0)';
                    item.style.opacity = '0';
                });
            }
        });
    }
    
    // Initialize tooltips
    const tooltipItems = document.querySelectorAll('[data-tooltip]');
    tooltipItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('::after');
            if (tooltip) {
                tooltip.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('::after');
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    });
    
    // Toggle messaging interface
    const viewAllMessages = document.querySelector('.view-all-messages');
    const messagingInterface = document.querySelector('.messaging-interface');
    
    if (viewAllMessages && messagingInterface) {
        viewAllMessages.addEventListener('click', function(e) {
            e.preventDefault();
            messagingInterface.classList.add('active');
        });
    }
    
    const closeMessaging = document.querySelector('.close-messaging');
    if (closeMessaging && messagingInterface) {
        closeMessaging.addEventListener('click', function() {
            messagingInterface.classList.remove('active');
        });
    }
    
    // Simulate message sending
    const messageComposer = document.querySelector('.message-composer textarea');
    const sendMessageBtn = document.querySelector('.send-message');
    
    if (messageComposer && sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function() {
            const message = messageComposer.value.trim();
            if (message) {
                const messageHistory = document.querySelector('.message-history');
                if (messageHistory) {
                    const newMessage = document.createElement('div');
                    newMessage.className = 'message sent';
                    newMessage.innerHTML = `
                        <p>${message}</p>
                        <span>Just now</span>
                    `;
                    messageHistory.appendChild(newMessage);
                    messageComposer.value = '';
                    messageHistory.scrollTop = messageHistory.scrollHeight;
                    
                    // Simulate reply
                    setTimeout(() => {
                        const replies = [
                            "Thanks for your message!",
                            "I'll get back to you soon.",
                            "Can we discuss this tomorrow?",
                            "Let me check my schedule.",
                            "That sounds good to me."
                        ];
                        const reply = replies[Math.floor(Math.random() * replies.length)];
                        
                        const replyMessage = document.createElement('div');
                        replyMessage.className = 'message received';
                        replyMessage.innerHTML = `
                            <p>${reply}</p>
                            <span>Just now</span>
                        `;
                        messageHistory.appendChild(replyMessage);
                        messageHistory.scrollTop = messageHistory.scrollHeight;
                    }, 1000);
                }
            }
        });
        
        // Allow sending with Enter key
        messageComposer.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessageBtn.click();
            }
        });
    }
    
    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects (simplified for demo)
            const filter = this.textContent.toLowerCase();
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const tags = card.querySelector('.project-meta span:first-child').textContent.toLowerCase();
                    if (tags.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
