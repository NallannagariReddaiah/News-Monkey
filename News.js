import React, {useEffect,useState}from "react";
import NewsItem from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]= useState(1);
  const [totalResults,setTotalResults]=useState(0);
    const UpdateNews=async ()=>{
        console.log("Hello");
        console.log("Fetching more data");
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c92de78ecd54491b5adffac6636bec2&page=${page}&pageSize=${props.pageSize}`;
        let Data = await fetch(url);
        props.setProgress(30);
        let parsedData = await Data.json();
        props.setProgress(70);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page+1);
        props.setProgress(100);
    }
    const fetchMoreData = () => {
        UpdateNews();
    }
    useEffect(()=>{
      UpdateNews();
      document.title = `${props.category} - NewsMonkey`;
    },[]);
    return (
        <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News Monkey-Top
          {` ${props.category}`} Headlines
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container">
            <div className="row">
            {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    />
                </div>
            })};
            </div>
        </div>
        </InfiniteScroll>
        </>
    );
}
News.defaultProps = {
  country: "in",
  pageSize: 3,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
