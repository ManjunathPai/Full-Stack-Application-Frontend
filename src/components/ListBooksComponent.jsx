import React, { Component } from 'react';
import BooksService from '../services/BooksService';

class ListBooksComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
        this.addBook=this.addBook.bind(this);
    }

    componentDidMount(){
        BooksService.getBooks().then((res) =>{
            this.setState({books:res.data})
        });
    }

    addBook(){
        this.props.history.push("/add-book");
    }
    render() {
        return (
            <div>
                <h2 className = "text-center">Books List</h2>
                <div>
                    <button className = "btn btn-primary" onClick={this.addBook}>Add Book</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className = "text-center"> Book Name </th>
                                <th className = "text-center"> Author </th>
                                <th className = "text-center"> Publisher </th>
                                <th className = "text-center"> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book => 
                                    <tr key={book.id}>
                                        <td>{book.bookName}</td>
                                        <td>{book.authorName}</td>
                                        <td>{book.publisher}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBooksComponent;