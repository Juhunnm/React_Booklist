// import React, { Component } from 'react';

// class BookReview extends Component {
//     render() {
//         const { bookIndex } = this.props;
//         console.log('리뷰');
//         console.log('Received bookIndex:', bookIndex); // bookIndex 값을 확인
//         return (
//             <div>
//                 <h1>{bookIndex}번 책 리뷰 작성하는 곳</h1> {/* bookIndex 값을 활용하여 출력할거임 */}
//             </div>
//         );
//     }
// }

// export default BookReview;

import React, { Component } from 'react';
class BookReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [], // 리뷰를 저장할 배열
            reviewText: ''//리뷰 값 입력하는 상태값
        };
    }

    handleReviewSumbit = () => {
        const { reviewText } = this.state;
        const { bookIndex } = this.props;
    
        if (reviewText) {//값이 들어오면 실행하기
            const review = { text: reviewText, bookIndex };
            this.setState({
                reviews: [...this.state.reviews, review],//배열에 객체 넣음 나중에 map으로 분해
                reviewText: ''
            });
        }else{
            alert('리뷰를 입력하지 않았습니다.')
        }
    };
    

    handleInputChange = (e) => {
        this.setState({ reviewText: e.target.value });
    };

    render() {
        const { reviews, reviewText } = this.state;
        const { bookIndex } = this.props;

        const bookReviews = reviews.map((rv, index) => {
            if (rv.bookIndex === bookIndex) {
                return console.log(`값 ${reviews,index}`) ,<li key={index}>{rv.text}</li>;
            }
            return null;
        });

        return (
            <div>
                <h1>{bookIndex}번 책 리뷰 작성</h1>
                <div>
                    리뷰 작성:
                    <textarea
                    placeholder='리뷰작성하기'
                        value={reviewText}
                        onChange={this.handleInputChange}
                    />
                </div><br/>
                <button onClick={this.handleReviewSumbit}>리뷰 작성</button>

                <h2>{bookIndex}번 책 리뷰</h2>
                {bookReviews.length > 0 ? <ul>{bookReviews}</ul> : <h3>리뷰가 없습니다.</h3>}
            </div>
        );
    }
}

export default BookReview;
