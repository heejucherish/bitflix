import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";
//Container의 역할 :Application에서 사용되어지는 기능(함수), 상태 (state), 이벤트 등을
// 구현하고, presenter에 전달!

export default class extends React.Component {
  //클래스형 컴ㄴ포넌트에서 state 만들기
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
  };

  //constructor: 클래스 생성자
  // 생성자의 매개변수로 부모 컴포넌트 props가 들어온다.

  constructor(props) {
    super(props);
  }

  // useEffect 랑 똑같음 !! useEffect(() =>{}, []) 랑 같음!
  // 여기서의 비동기 처리는 앞에 async 키워드를 붙여주면 된다.

  async componentDidMount() {
    try {
      // data -> results에 원하는 내용이 있었음
      // data: { results : [{}, {}, {}...]}

      // data 안에 있는 results에 들어있는 값을 nowPlaying 변수에 넣겠다.
      // 똑같은 표현은 const nowPlaying = await (await movieApi.nowPlaying()).data.results; 와 같음
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
        topRated,
      });
    } catch (error) {
      this.setState({
        error: "영화 정보를 찾을 수 없습니다. ",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  

  //  함수형 컴포넌트에서 return 에 해당된다.
  render() {
    const {
      nowPlaying,
      upcoming,
      popular,
      topRated,
      error,
      loading,
    } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
        topRated={topRated}
      />
    );
  }
}
