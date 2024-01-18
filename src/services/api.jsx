const backendUrl = process.env.REACT_APP_BACKEND_URL;

const api = {
    PostMessage: async (userMessage) => {
        try {
            const response = await fetch(`${backendUrl}/conversation/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to send messages');
            }

            // return response
            return await response.json();
        } catch (error) {
            console.error('Error fetching messages:', error.message);
            throw error;
        }
    },
};


export default api;