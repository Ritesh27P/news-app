const SelectedNews = ({element}) => {
    return (
        <div>
            <div className="show">
                <img src={element?.media} alt="" />
                <div>
                    <h3 className="title1">{element?.title}</h3>
                    <div className="show1">
                        <h5 className="author">{element?.author}</h5>
                        <h5 className="time">{element?.published_date}</h5>
                    </div>
                    <h5 className="twitter">{element?.twitter_account}</h5>

                    <button className="btn"><a href={element?.link}> Article Link </a></button>
                </div>

            </div>

            <h4 className="content">{element?.summary}</h4>

        </div>
    );
}

export default SelectedNews;