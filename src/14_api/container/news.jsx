import React, {Component} from 'react';

import './news.css';

import Title from '../component/title/title';
import Input from '../component/input/input';
import NewsPost from '../component/news/news';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

class News extends Component {

    state = {
        searchQuery: '',
        result: {}
    }

    componentDidMount() {
        const {searchQuery} = this.state;
        this.fetchData(searchQuery);
    }

    fetchData = (searchQuery) => {
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
            .then(res => res.json())
            .then(result => this.setNews(result))
            .catch(error => error)
    }

    handleInput = ({ target: {value} }) => {
        this.setState({
            searchQuery: value
        })
    }

    getSearch = ({ key }) => {
        if (key === 'Enter') {
            const {searchQuery} = this.state;
            this.fetchData(searchQuery);
        }
    }

    setNews = result => {
        this.setState({result})
    }

    render() {
        const { searchQuery, result } = this.state;
        const { hits = [] } = result; 
        return (
            <div className="wrapper">
                <Title title="Hacker News" />
                <Input onKeyPress={this.getSearch} value={searchQuery} onChange={this.handleInput} />
                <ul className="newList">
                    {hits.map(({author, create_at, num_comments, objectID, title, points, url }) => 
                        <NewsPost
                            key={objectID}
                            author={author}
                            created_at={create_at}
                            num-num_comments={num_comments}
                            title={title}
                            points={points}
                            url={url}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default News