const SomeApp = {
    data() {
      return {
        students: [],
        selectedBook: null,
        offers: [],
        books:[],
        bookForm:{}
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData() {
            fetch('/api/books/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postBook(evt) {
            console.log ("Test:", this.selectedBook);
          if (this.selectedBook) {
              this.postEditBook(evt);
          } else {
              this.postNewBook(evt);
          }
        },
        postEditBook(evt) {
            this.bookForm.id = this.selectedBook.id;     
            
            console.log("Editing!", this.bookForm);
            alert("Editing!");

            fetch('api/books/update.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.handleResetEdit();
              });
          },
          handleEditBook(books) {
            this.selectedBook = books;
            this.bookForm = Object.assign({}, this.selectedBook);
        },
        handleResetEdit() {
            this.selectedBook = null;
            this.bookForm = {};
        },
        
    postDeleteBook(o) {  
        // if ( !confirm("Are you sure you want to delete the book from ") ) {
        //     return;
        // }  
        
        //console.log("Delete!", o);

        fetch('api/books/delete.php',{
            method:'POST',
            body: JSON.stringify(this.o),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.handleResetEdit();
          });
      },
        postNewBook(evt) {
        
            console.log("Posting!", this.bookForm);

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
            });

        }
        },

    created() {
        this.fetchBookData();
    }
  
}

  Vue.createApp(SomeApp).mount('#offerApp');