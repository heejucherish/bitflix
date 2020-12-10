import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  // id  넘어와야하고 영화인지 tv인지
  // 생성자에서 할일
  // 영화 상세 페이지를 표현해야 하는지에 대해 설정해야한다!

  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }
  async componentDidMount() {
    // id 가지고 오기 ->  match.params
    //  만약에 id가 안들어오면 Home 으로 강제 이동 -> history의 push가 해준다.
    // 사용자의 요청을 서버가 받고, 재요청 하도록 하는 것을 redirect 라고 한다.
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);

    // 올바르지 않은 id라면
    if (isNaN(parsedId)) {
      // Home 으로 redirect
      return push("/");
    }

    let result = null;
    // 위에있는 result 를 사용할것! 위치임 데이터에서 뽑아서 오는 result!
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({
        error: "아무것도 찾을 수가 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  //  함수형 컴포넌트에서 return 에 해당된다.

  render() {
    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
