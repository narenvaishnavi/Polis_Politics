import React from 'react';
import './App.css';
import 'react-dropdown/style.css'
var axios = require('axios');
var _ = require('lodash');


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemChecked: {}
        }
    }

    componentWillMount() {
        var url = 'https://newsapi.org/v2/top-headlines?sources=cnbc,bbc-news,cnn,bloomberg,reuters&apiKey=077ce93db55f4dcfacb368cf7ac4b75f';
        axios.get(url).then((response) => {
            this.setState({
                news: response.data.articles
            })
        });
    }

    itemCheckedItem(news, event) {
        alert(event);
    }

    renderData() {
        var news = _.map(this.state.news, (news) => {
            return (
                <div>

                    {/* <td><input type="checkbox" onChange={(e) => this.itemCheckedItem(news, e)}></input></td> */}
                    <div className="content">
                        <div className="collumns">
                            <div className="collumn">
                           
                                <div className="head">
                              
                                <a href={news.urlToImage}><img src={news.urlToImage} alt="" className="avatar"></img></a>
                                    <span className="headline hl3">{news.title}</span><p>
                                        <span className="headline hl4">{news.author} </span></p>
                                </div>
                                <p>
                                    By: {news.source.name}<br></br>
                                    {news.description}
                                </p>
                                <a href={news.url}>Read here...</a>
                        
                            </div>

                        </div>
                    </div>


                </div>
            )
        });
        return (

            <div className="head">
                <div className="headerobjectswrapper">
                    <header>Polis Politics</header>
                </div>
                <div className="subhead">Washington, DC - Friday April 06, 2018 - Naren Vaishnavi,<strong>UI/UX Developer</strong></div>
                <ul>{news}</ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                <table className="table-striped table-bordered table-hover" >
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
