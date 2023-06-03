import React, { Component } from 'react';
import BookReview from './Project/BookReview';
import Booklist from './Project/Booklist';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BookSelect: null,
      ReviewInput: false
    };
  }


  handleChildClick = (index) => {
    this.setState({ BookSelect: index, ReviewInput: true });
    console.log('App.js index', index);
    // 부모 컴포넌트에서 전달받은 index 값을 처리
  };
  render() {
    const { BookSelect, ReviewInput } = this.state;
    return (
      <>
        <div style={{
          float: 'left'
        }}>
          <Booklist handleClick={this.handleChildClick} />
        </div>
        <div style={{
          float: 'rigth'
        }}>
          {ReviewInput && <BookReview bookIndex={BookSelect} />}
        </div>
      </>
    );
  }
}

export default App;