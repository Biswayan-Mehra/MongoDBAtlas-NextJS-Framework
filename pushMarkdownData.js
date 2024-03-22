// Import the necessary module for fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs').promises;
const path = require('path');

// Define the main function that will push the markdown data
async function pushMarkdownData() {
    // Define the directory where your markdown files are located
    const markdownDirectory = path.join(__dirname, 'src/app/data');

    try {
        // Read the filenames from the markdown directory
        const files = await fs.readdir(markdownDirectory);
        const markdownFiles = await Promise.all(
            files.filter(file => file.endsWith('.md')).map(async (filename) => {
                // Read the content of each markdown file
                const content = await fs.readFile(path.join(markdownDirectory, filename), 'utf8');
                return {
                    title: filename.replace('.md', ''),
                    content,
                };
            })
        );

        // Prepare the request to the API endpoint
        const response = await fetch('http://localhost:3000/api/pushMarkdown', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(markdownFiles),
        });

        // Check the response status
        if (!response.ok) {
            throw new Error(`Failed to push markdown data: ${response.statusText}`);
        }

        // Parse the response as JSON and log it
        const data = await response.json();
        console.log('Server response:', data);
    } catch (error) {
        console.error('Error pushing markdown data:', error);
    }
}

// Execute the main function
pushMarkdownData();
