import { BANNER_IMG_URL } from "../utils/constants";
const Banner = (props) => {
    const { bannerData } = props;
    return (
        <a className="flex-shrink-0 m-4" href={bannerData.action.link}>
            <img className="object-cover w-40" src={BANNER_IMG_URL +  bannerData.imageId}/>
        </a>
    )
};

export default Banner; 