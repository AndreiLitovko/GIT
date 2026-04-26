import { Link } from "react-router-dom";

const Badge = ({blog}) => {
  return (
    <Link
      to={`/?category=${encodeURIComponent(blog?.category || "")}&page=1`}
      className="px-2 py-[3px] text-[12px] font-semibold bg-[#4B6BFB] text-[#FFFFFF] rounded-sm self-start"
    >
      {blog?.category}
    </Link>
  );
};

export default Badge;
