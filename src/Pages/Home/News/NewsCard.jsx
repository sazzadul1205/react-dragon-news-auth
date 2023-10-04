
import { BsBookmarkDash, BsFillEyeFill, BsFillShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, author, title, image_url, details, rating, total_view } = news;

    return (
        <div>
            <div className="navbar bg-[#F3F3F3] mb-4">
                <div className="flex-1">
                    <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-19 rounded-full">
                            <img src={author.img} />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h2 className='text-base font-semibold text-[#403F3F]'>{author.name}</h2>
                        <p className='text-sm font-normal text-[#706F6F]'>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex-none mr-7 gap-3">
                    <BsBookmarkDash></BsBookmarkDash>
                    <BsFillShareFill></BsFillShareFill>
                </div>
            </div>
            <div>
                <div className="card shadow-xl">
                    <div>
                        <h2 className="text-xl font-bold">{title}</h2>
                    </div>
                    <br />
                    <figure className="px-10 pt-10">
                        <img src={image_url} alt={title} className="rounded-xl" />
                    </figure>
                    <div className="card-body flex ">
                        <p>
                            {
                                details.length > 200
                                    ? <p >{details.slice(0, 200)} <Link
                                        to={`/news/${_id}`}
                                        className="text-red-600">Read More ...</Link></p>
                                    : <p>{details}</p>
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="navbar mb-4">
                <div className="flex-1">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z" fill="#FF8C47" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z" fill="#FF8C47" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z" fill="#FF8C47" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z" fill="#FF8C47" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z" fill="#FF8C47" />
                        </svg>
                        <p className="text-base font-medium ml-2 mt-1">{rating.number}</p>
                    </div>
                </div>
                <hr />
                <div className="flex-none mr-7 gap-3">
                    <BsFillEyeFill></BsFillEyeFill>
                    <p className="text-base font-medium text-[#706F6F]">{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
