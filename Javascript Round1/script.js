
const apiUrl = "https://jsonplaceholder.typicode.com/todos";


fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            renderBooks(data);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });



        function renderBooks(books) {
            const bookList = document.getElementById('bookList');
        
          
            books.forEach(book => {
                
                const listItem = document.createElement('li');
        
                
                const title = book.title ||  'title is not available';
                const author = book.author !== undefined ? book.author : '';

                listItem.innerHTML = `<strong>${title}</strong>  ${author}`;
        
                 bookList.appendChild(listItem);
            });
        }//
    