import axios from "axios";

const BOOKS_API_BASE_URL = "http://localhost:8080/api/v1/books";
const BOOKS_API_SAVE_URL = "http://localhost:8080/api/v1/save";
class BookService{

    getBooks(){
        return axios.get(BOOKS_API_BASE_URL);
    }

    saveBook(book){
        return axios.post(BOOKS_API_SAVE_URL,book);
    }
}

export default new BookService()