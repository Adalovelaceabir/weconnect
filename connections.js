// Connection system functionality
document.addEventListener('DOMContentLoaded', function() {
    // Connection actions
    const connectionActions = document.querySelectorAll('.connection-action');
    
    connectionActions.forEach(action => {
        action.addEventListener('click', function() {
            const card = this.closest('.connection-card');
            const userName = card.querySelector('h4').textContent;
            
            if (this.innerHTML.includes('Add')) {
                // Change to pending state
                this.innerHTML = `
                    <svg width="20" height="20"><path d="M12 8v4h4v2h-4v4h-2v-4H6v-2h4V8h2z" fill="currentColor"/></svg>
                `;
                this.style.backgroundColor = '#EDEDED';
                this.style.color = '#666';
                
                // Show confirmation (simulated)
                setTimeout(() => {
                    this.innerHTML = `
                        <svg width="20" height="20"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/></svg>
                    `;
                    this.style.backgroundColor = '#E8F5E9';
                    this.style.color = '#2ECC71';
                    
                    setTimeout(() => {
                        this.innerHTML = `
                            <svg width="20" height="20"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
                        `;
                        this.style.backgroundColor = '';
                        this.style.color = '';
                    }, 2000);
                }, 1500);
            }
        });
    });
    
    // Network tabs
    const networkTabs = document.querySelectorAll('.network-tab');
    const connectionsList = document.querySelector('.connections-list');
    const messagesPreview = document.querySelector('.messages-preview');
    
    networkTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active state
            networkTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Toggle content
            if (this.textContent === 'Connections') {
                connectionsList.style.display = 'block';
                messagesPreview.style.display = 'none';
            } else {
                connectionsList.style.display = 'none';
                messagesPreview.style.display = 'block';
            }
        });
    });
});
