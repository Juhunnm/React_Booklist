import React from 'react';

export default class ScrollSpy extends React.PureComponent {
    foodlist = ['책1', '책2', '책3', '책4', '책5', '책6', '책7'];

    constructor(props) {
        super(props);
        this.state = {
            list: this.foodlist,
        };
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
        window.addEventListener('scroll', this.checkPosition);
    }

    setRef(ref) {
        this.ref = ref;
    }

    checkPosition() {
        if (this.ref.getBoundingClientRect().top < window.innerHeight) {
            const { list } = this.state;
            const nextIndex = list.length % this.foodlist.length;
            this.setState(({ list }) => ({
                list: [...list, this.foodlist[nextIndex]],
            }));
        } else {
            console.log('exit');
        }
    }

    handleClick(key) {
        console.log('Clicked Key:', key);
    }

    componentDidUpdate() {
        this.checkPosition();
    }

    componentDidMount() {
        this.checkPosition();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkPosition);
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.list.map((food, index) => (
                        <li key={index}>
                            <button onClick={() => this.handleClick(index)}>{food}</button>
                        </li>
                    ))}
                </ul>
                <div style={{ height: 100 }}>test</div>
                <div ref={this.setRef}>페이지의 끝</div>
            </>
        );
    }
}
