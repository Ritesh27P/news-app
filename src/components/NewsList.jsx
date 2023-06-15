import { useState } from "react";
import { useFetchNewsQuery } from "../store";
import NewsObject from "./NewsObject";
import Modal from "./Modal";
import SelectedNews from "./SelectedNews";

const NewsList = ({query}) => {
    const {data, error, isLoading} = useFetchNewsQuery(query);
    const [showModal, setShowModal] = useState(false)
    const [selectedNews, setSelectedNews] = useState({})

    const handleClick = (e, element) => {
        e.preventDefault();
        setShowModal(true)
        setSelectedNews(element)
    }

    const handleClose = () => {
        setShowModal(false)
    }
    const modal = <Modal handleClose={handleClose} setShowModal={setShowModal} actionBar={<button onClick={e => handleClose(e)}>Hii</button>} >
        <SelectedNews element={selectedNews} />
    </Modal>


    const renderNews = data?.articles.map((element, index) => {
        return <NewsObject key={index} element={element} onClick={e => handleClick(e, element)} />
    })
    return (
        <div>
            <div className="list">
                {renderNews}
                {showModal && modal}
            </div>

        </div>
    );
}

export default NewsList;