import React, { Component } from 'react';
import BookReview from './Project/BookReview';
import Booklist from './Project/Booklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BookSelect: null,
      ReviewInput: false,
      booktitle : ''
    };
  }

  handleChildClick = (index, title) => {
    this.setState({ BookSelect: index, ReviewInput: true ,booktitle : title});
    console.log('App.js index', index);
    
    console.log('title: ', this.state.booktitle);
    // 자녀 컴포넌트에서 전달받은 index 값을 처리
  };

  render() {
    const { BookSelect, ReviewInput,booktitle} = this.state;
    return (
      <>
        <div>
          <Booklist handleClick={this.handleChildClick} />
        </div>
        <div>
          <section>
          {ReviewInput && <BookReview bookIndex={BookSelect} booktitle={booktitle}/>}
          </section>
        </div>
      </>
    );
  }
}

export default App;
