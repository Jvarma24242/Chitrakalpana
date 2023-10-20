function redirectToRandomPage(currentPage) {
    const pages = [
        'Grid.html',
        'Grid 2.html',
        'Grid 3.html',
        'Grid 4.html',
        'Grid 5.html',
        'Grid 6.html',
        'Grid 7.html',
        'Grid 8.html',
        'Grid 9.html',
        'Grid 10.html'
    ];

    // Remove the current page from the array
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex !== -1) {
        pages.splice(currentIndex, 1);
    }

    if (pages.length === 0) {
        alert("You've visited all pages!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * pages.length);
    const nextPage = pages[randomIndex];
    pages.splice(randomIndex, 1);
   // window.location.href = nextPage;

    return nextPage;
}