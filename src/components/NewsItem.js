import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, newsDate, newsSource} = this.props;
    return (
      <div>
        <div className="card my-3">
            <img src={!imageUrl?'https://imgs.search.brave.com/ELU1qm1dHKhRPvD7rVJNIcy9dndQmVcBBw0D1LYlJkg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzg2Mi9sYXRl/c3QtbmV3cy0xNTE2/NDE0LmpwZz9mbXQ9/d2VicCZ3PTM1MA':imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p><small>{newsSource}</small></p>
                <p className="card-text">{description}..<a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-transparent"><b>Read more</b></a></p>
                <p className='card-text'><small>{new Date(newsDate).toLocaleDateString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
