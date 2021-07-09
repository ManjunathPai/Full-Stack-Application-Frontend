import React, { Component } from 'react';
import BooksService from '../services/BooksService';

class AddBookComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bookName: '',
            authorName: '',
            publisher: '',
            formErrors:{bookName:'',authorName:'',publisher:''},
            bookNameValid:false,
            authorNameValid:false,
            publisherValid:false
        }
        this.changeBookNameHandler = this.changeBookNameHandler.bind(this);
        this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
        this.changepublisherHandler = this.changepublisherHandler.bind(this);
        this.saveBook = this.saveBook.bind(this);

    }



    changeBookNameHandler = (event) => {
        this.setState({ bookName: event.target.value })
    }

    changeAuthorNameHandler = (event) => {
        this.setState({ authorName: event.target.value })
    }

    changepublisherHandler = (event) => {
        this.setState({ publisher: event.target.value })
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = { bookName: this.state.bookName, authorName: this.state.authorName, publisher: this.state.publisher }
        console.log('book => ' + JSON.stringify(book));
        BooksService.saveBook(book).then(res => {
            this.props.history.push('/books')
        });
    }

    cancel() {
        this.props.history.push('/books');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Book</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Book Name: </label>
                                        <input placeholder="Book Name" name="bookName" className="form-control"
                                            value={this.state.bookName} onChange={this.changeBookNameHandler} />
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> Author Name: </label>
                                        <input placeholder="Author Name" name="authorName" className="form-control"
                                            value={this.state.authorName} onChange={this.changeAuthorNameHandler} />
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> Publisher Name: </label>
                                        <input placeholder="Publisher Name" name="publisher" className="form-control"
                                            value={this.state.publisher} onChange={this.changepublisherHandler} />
                                    </div>

                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddBookComponent;