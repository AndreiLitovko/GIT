import { BASE_URL } from "@/api";
import { FormatDate } from "@/services/formatDate";
import { Link } from "react-router-dom";

const CardFooter = ({ blog }) => {
  const author = blog?.author;
  const fullName = author
    ? `${author.first_name || ""} ${author.last_name || ""}`.trim() || author.username
    : "Unknown author";

  if (!author) {
    return (
      <div className="flex items-center gap-4">
        <small className="text-[#97989F] text-[12px] font-semibold">{fullName}</small>
        <small className="text-[#97989F] text-[12px] font-semibold ml-3">
          {FormatDate(blog.published_date)}
        </small>
      </div>
    );
  }

  return (
    <Link to={`/profile/${author.username}`}>
    <div className="flex items-center gap-4 ">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={`${BASE_URL}${author.profile_picture}`}
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#97989F] text-[12px] font-semibold">
          {fullName}
        </small>
      </span>

      <small className="text-[#97989F] text-[12px] font-semibold ml-3">
        {FormatDate(blog.published_date)}
      </small>
    </div>
    </Link>
  );
};

export default CardFooter;
