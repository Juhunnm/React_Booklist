import React, { Component } from 'react';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
class Booklist extends Component {
    booklists = [
        { title: '리액트', image : image1 },
        { title: 'SpringBoot', image : image2},
        { title: 'HTMLCSS', image : image3},
    ];
    
    constructor(props) {
        super(props);
        this.state = {
            list: this.booklists
        };
        this.setRef = this.setRef.bind(this);
        this.check = this.check.bind(this);
        window.addEventListener('scroll', this.check);
    }

    setRef(ref) {
        this.ref = ref;
    }

    check() {
        if (this.ref.getBoundingClientRect().top < window.innerHeight) {
            const index = this.state.list.length;
            if (index < this.booklists.length) {
                this.setState(({ list }) => ({
                    list: [...list, this.booklists[index]]
                }));
            }
        } else {
            console.log('나감');
        }
    }

    handleClick(index) {
        console.log('index:', index);
        // handleClick 값을 부모 컴포넌트로 전달
        this.props.handleClick(index);
    };

    componentDidUpdate() {
        this.check();
    }

    componentDidMount() {
        this.check();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.check);
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.list.map((book, index) => (
                        <li key={index}>
                            <button style={{ height: 100, width: 100 }} onClick={() => this.handleClick(index)}>
                                <img src={book.image} alt={book.title} style={{ height: '100%', width: '100%' }} />
                            </button>
                        </li>
                    ))}
                </ul>
                <div style={{ height: 100 }}>test</div>
                <div ref={this.setRef}>페이지의 끝</div>
            </>
        );
    }
}

export default Booklist;
