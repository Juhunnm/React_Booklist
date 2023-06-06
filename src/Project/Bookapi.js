import React, { Component } from 'react';
import axios from 'axios';

class Bookapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            query: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ query: event.target.value });
    }

    searchBooks = () => {
        const { query } = this.state;
        const apiUrl = `https://dapi.kakao.com/v3/search/book?query=${query}`;

        // 카카오 개발자에서 발급받은 API 키를 입력해주세요
        const apiKey = '4ace74c75892fa8a62b59b8add683cb6';

        axios.get(apiUrl, {
            headers: {
                Authorization: `KakaoAK ${apiKey}`
            }
        })
            .then(response => {
                console.log(response.data); // 응답 데이터 확인

                this.setState({ books: response.data.documents });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { books, query } = this.state;

        return (
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={this.handleInputChange}
                    placeholder="검색어를 입력하세요"
                />
                <button onClick={this.searchBooks}>검색</button>

                <ul>
                    {books.map(book => (
                        <li key={book.isbn}>
                            <img src={book.thumbnail} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.authors.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Bookapi;
