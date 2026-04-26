import BlogCard from "./BlogCard"
import Spinner from "./Spinner"

const BlogContainer = ({
  isPending,
  blogs = [],
  title = "🍔Последние публикации",
  sectionId,
  addExtraBottomSpace = false,
}) => {

  if(isPending){
    return <Spinner />
  }

  return (
    <section
      id={sectionId}
      className={`padding-x pt-6 max-container ${addExtraBottomSpace ? "pb-24" : "pb-6"}`}
    >
    <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
      {title}
    </h2>

    <div className="flex items-center gap-6 justify-center flex-wrap">
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p className="dark:text-white text-center">Посты по этой категории пока не найдены.</p>
      )}
    </div>
  </section>
  )
}

export default BlogContainer
