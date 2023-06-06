import React, { Component } from 'react';

class BookDetail extends Component {
    bookReviewList = [
        {
            index: 0,
            detail: <>
                실리콘밸리 리액트 클래스를 그대로 담았다!
                에어비앤비 프런트엔드 리드에게 배우는 리액트 프로그래밍!<br />

                전 세계의 뛰어난 개발자들이 모여 일한다는 실리콘밸리! 실리콘밸리에서도 핫한 기업인 ‘에어비앤비’에서 프런트엔드 리드로 활약하는 저자에게 리액트를 배워 보자. <br />
                『Do it! 리액트 프로그래밍 정석』은 저자가 한국 소프트웨어 기술 진흥 협회에서 진행한 리액트 오프라인 강의를 정리하고 보강하여 만든 책이다.

                이 책은 리액트에 대한 전반적인 내용은 물론이고 프런트엔드 프로그래밍 기법과 클라우드 데이터베이스 적용, 서비스 배포까지 다뤄 프런트엔드 프로그래밍에 도전하려는 사람이라면 첫 번째 교과서로 삼아도 좋다.<br />
                자주 나올 만한 질문은 ‘도와줘요! 저스틴’ 코너에서 소개하고, 추상적인 내용은 그림으로 독자의 이해를 도왔다. 책의 최종 목표인 ‘가상 코인 거래소 만들기’ 프로젝트에는 리팩토링과 같은 실무 과정도 포함해 ‘진짜 에어비앤비 개발자의 실무 감각’도 익힐 수 있다.
                
                    <p>목차</p>
                    <p>첫째마당 리액트 시작하기</p>
                    <p>_01 리액트 시작하기</p>
                    <p>__01-1 리액트의 정체를 알아보자!</p>
                    <p>__01-2 리액트 개발 환경 설치하기</p>
                    <p>__01-3 리액트 앱 수정하기</p>
                
            </>
        },
        {
            index: 1,
            detail: <>
            도구 선택부터 애플리케이션 보안과 배포까지 스프링 부트의 모든 것
스프링 부트에서는 자바와 코틀린 언어 모두 사용할 수 있습니다.<br/> 
개발자의 취향과 프로젝트의 특성에 따라 적합한 언어를 선택할 수 있습니다.<br/>
이 책은 성숙한 언어로 널리 사용되고 스프링 프레임워크의 공식 언어이기도 한 자바의 장점과, 간결하고 안전한 코드를 작성할 수 있는 코틀린 언어의 장점을 한눈에 볼 수 있게 구성되었습니다. <br/>
그뿐 아니라 메이븐과 그레이들 중에 어느 빌드 도구를 선택할지 인사이트를 제공합니다.<br/>
스프링 이니셜라이저에서 애플리케이션을 생성하는 순간부터 디버깅, 배포, 모니터링에 이르기까지 스프링 부트의 모든 것을 이 책에서 확인하세요.
            </>
        },
        {
            index: 2,
            detail: <>
            『HTML amp;amp; CSS for Beginner』의 후속 버전으로 집필 되었다. <br/>
            단계 별로 제시되는 예제들을 따라하기 식으로 실습하다 보면 자연스럽게 HTML/CSS의 知識을 습득하고 최신 반응형 웹 기술을 익힐 수 있도록 하였다.
            </>
        },
        {
            index: 3,
            detail: '세부 내용4'
        },
    ];
    render() {
        let bookdetail = null;
        const { bookIndex,booktitle} = this.props;
        for (let i = 0; i < this.bookReviewList.length; i++) {
            if (this.bookReviewList[i].index === bookIndex) {
                bookdetail = this.bookReviewList[i];
                break;
            }
        }
        return (
            <div>
                <h1>{booktitle} 책 리뷰 내용</h1>
                <p>{bookdetail.detail}</p>
            </div>
        );
    }
}
export default BookDetail;
