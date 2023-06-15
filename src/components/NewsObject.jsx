const NewsObject = ({element, onClick}) => {
    const handleClick = e => {
        e.preventDefault();
        onClick()
    }
    return (
        <div onClick={e => onClick(e)}>
            <h3 className="title">{element?.title}</h3>
            <div className="show1">
                <h5 className="author">{element?.author}</h5>
                <h5 className="time">{element?.published_date}</h5>
            </div>
            <h5 className="content1">{element?.excerpt}</h5>
            <hr />
        </div>

    );
}

export default NewsObject;