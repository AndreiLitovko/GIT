import { getBlogs } from "@/services/apiBlog";
import BlogContainer from "@/ui_components/BlogContainer";
import Header from "@/ui_components/Header";
import PagePagination from "../ui_components/PagePagination";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPage = Number(searchParams.get("page") || "1");
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const numOfBlogsPerPage = 9;

  const { isPending, data } = useQuery({
    queryKey: ["blogs", page],
    queryFn: () => getBlogs(page),
    placeholderData: keepPreviousData,
  });

  const blogs = data?.results || [];
  const numOfPages = Math.max(1, Math.ceil((data?.count || 0) / numOfBlogsPerPage));

  function setPageInUrl(nextPage) {
    const normalizedPage = Math.max(1, Math.min(nextPage, numOfPages));
    setSearchParams({ page: String(normalizedPage) });
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
      <BlogContainer isPending={isPending} blogs={blogs} />
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
