import React, {Component} from 'react';

import Title from '../components/title/title';

import './news.css';


const BASE_PATH = ' https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';


class News extends Component {

    state = {
        searchQuery: '',
        result: {}
    }

    componentDidMount() {
        const {searchQuery} = this.state;
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
            .then()
    }

    render() {
        return(
            <div className="wrapper">
                <Title title="Hacker News" />
            </div>
        );
    }
}

export default News