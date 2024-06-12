document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        alert(`Searching for: ${query}`);   
        // Add your search functionality here
    });

    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', () => {
        alert('Login button clicked');
        // Add your login functionality here
    });
});
