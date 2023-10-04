import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} >
                <Link className="mr-8" to={'/'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.....
                </Link>
                <Link className="mr-8" to={'/'}>
                    Debitis ut non quisquam, rem inventore amet aliquam. Dolores....
                </Link>
                <Link className="mr-8" to={'/'}>
                    ipsa aut earum possimus aliquam, ullam est officia unde in distinctio vero perspiciatis....
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;