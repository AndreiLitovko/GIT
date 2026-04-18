import { getBlogs } from "@/services/apiBlog";
import BlogContainer from "@/ui_components/BlogContainer";
import Header from "@/ui_components/Header";
import PagePagination from "../ui_components/PagePagination";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPage = Number(searchParams.get("page") || "1");
  const category = searchParams.get("category") || "";
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const numOfBlogsPerPage = 9;

  const { isPending, data } = useQuery({
    queryKey: ["blogs", page, category],
    queryFn: () => getBlogs(page, category),
    placeholderData: keepPreviousData,
  });

  const blogs = data?.results || [];
  const numOfPages = Math.max(1, Math.ceil((data?.count || 0) / numOfBlogsPerPage));
  const isSinglePostOnLastPage = page === numOfPages && blogs.length === 1;

  function setPageInUrl(nextPage) {
    const normalizedPage = Math.max(1, Math.min(nextPage, numOfPages));
    const params = { page: String(normalizedPage) };

    if (category) {
      params.category = category;
    }

    setSearchParams(params);
  }

  function handleSetPage(val) {
    setPageInUrl(val);
  }

  function increasePageValue() {
    setPageInUrl(page + 1);
  }

  function decreasePageValue() {
    setPageInUrl(page - 1);
  }

  return (
    <>
      <Header />
      {category && (
        <div className="padding-x max-container pt-6 flex justify-center">
          <button
            onClick={() => setSearchParams({ page: "1" })}
            className="px-4 py-2 rounded-md bg-[#4B6BFB] text-white text-sm"
          >
            Показать все публикации
          </button>
        </div>
      )}
      <BlogContainer
        isPending={isPending}
        blogs={blogs}
        title={category ? `Категория: ${category}` : "🍔Последние публикации"}
        sectionId="latest-publications"
        addExtraBottomSpace={isSinglePostOnLastPage}
      />
      <PagePagination
        increasePageValue={increasePageValue}
        decreasePageValue={decreasePageValue}
        page={page}
        numOfPages={numOfPages}
        handleSetPage={handleSetPage}
      />
    </>
  );
};

export default HomePage;
