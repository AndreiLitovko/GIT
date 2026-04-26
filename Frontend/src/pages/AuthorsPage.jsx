import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "@/services/apiBlog";
import AuthorCard from "@/ui_components/AuthorCard";
import Spinner from "@/ui_components/Spinner";
import Header from "@/ui_components/Header";

const AuthorsPage = () => {
  const { isPending, data: authors = [] } = useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
  });

  if (isPending) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-[400px]">
          <Spinner />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="max-container padding-x py-16">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#141624] dark:text-white mb-4">
              Наши авторы
            </h1>
            <p className="text-[16px] text-[#696A75] dark:text-[#97989F] max-w-2xl mx-auto">
              Познакомьтесь с талантливыми разработчиками и специалистами, 
              которые делятся своими знаниями и опытом
            </p>
          </div>

          {authors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[16px] text-[#696A75] dark:text-[#97989F]">
                Авторов пока нет
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AuthorsPage;
