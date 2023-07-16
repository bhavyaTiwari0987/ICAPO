// mockApi.js

const saveFile = (file) => {
    // Simulate API call to save the file and get the response.
    // Replace this with your actual API call in a real-world scenario.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (file) {
          resolve({ path: '/path/to/saved/file.pdf', status: 'success' });
        } else {
          reject(new Error('File upload failed.'));
        }
      }, 2000);
    });
  };
  
  export default saveFile;
  