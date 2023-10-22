import loaderImg from "../images/loader/loader.gif";

export const Loader = () => {
    return <div className="loading">
        <img src={loaderImg} alt="loading" />
    </div>
}