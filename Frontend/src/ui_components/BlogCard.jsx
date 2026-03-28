import Badge from "./Badge";
import CardFooter from "./CardFooter";
import thumbnail from "../images/design_vii.jpg";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/api";

const BlogCard = ({blog}) => {
  return (
    <div className="px-3 py-3 rounded-md w-[300px] h-[370px] flex flex-col gap-3 dark:border-gray-800 border shadow-lg overflow-hidden">
      <Link to={`/blogs/${blog.slug}`}>
      <div className="w-full h-[200px] border rounded-md overflow-hidden flex-shrink-0">
        <img
          src={`${BASE_URL}${blog.featured_image}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      </Link>

      <Badge blog={blog} />

      <Link to={`/blogs/${blog.slug}`} className="block h-[56px] overflow-hidden">
        <h3 className="font-semibold leading-normal text-[#181A2A] mb-0 dark:text-white line-clamp-2">
          {blog.title}
        </h3>
      </Link>

      <div className="mt-auto">
        <CardFooter blog={blog} />
      </div>
    </div>
  );
};

export default BlogCard;
