import { Link, useNavigate } from "react-router-dom";

const categories = ["Frontend", "Backend", "Fullstack", "Design", "Blockchain"];

const Footer = ({ isAuthenticated, username }) => {
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    navigate("/?page=1");
    window.scrollTo(0, 0);
  };

  const handleMyBlogClick = () => {
    if (isAuthenticated && username) {
      navigate(`/profile/${username}`);
    } else {
      navigate("/signin");
    }
  };

  const handleAuthorsClick = () => {
    navigate("/authors");
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  const handleContactsClick = () => {
    navigate("/about?scrollToFooter=true");
  };
  return (
    <footer id="footer" className="bg-[#F6F6F7] padding-x py-16 max-container dark:bg-[#141624]">
    <div className="flex max-lg:gap-9 lg:gap-20 flex-wrap max-md:justify-center justify-start items-start">
      <div className="w-[300px] flex flex-col gap-6 max-md:items-center">
        <button
          onClick={handleHomeClick}
          className="text-[#141624] text-2xl dark:text-[#FFFFFF] font-bold cursor-pointer hover:text-[#4B6BFB] transition-colors bg-none border-none p-0 text-left"
        >
          DevFolio
        </button>

        <p className="text-[14px] text-[#696A75] leading-[1.5] max-md:text-center dark:text-[#97989F]">
          Платформа для публикации постов на различные темы.
 Делитесь своими идеями, опытом и знаниями, находите интересные материалы,
 открывайте для себя новые взгляды и истории от других авторов.
        </p>

        <button
          onClick={handleContactsClick}
          className="text-[14px] text-[#4B6BFB] dark:text-[#4B6BFB] hover:text-[#3D53D6] transition-colors bg-none border-none p-0 text-left cursor-pointer"
        >
          DevFolioBlog@gmail.com
        </button>
      </div>

      <div className="flex gap-16 ml-24 flex-1">
        <div className="text-[#181A2A] text-[14px] flex flex-col gap-4 px-4 max-md:items-center">
          <p className=" font-semibold text-[16px] dark:text-white">
            Навигация
          </p>
          <ul className="flex flex-col gap-4 text-[#3B3C4A] max-md:items-center dark:text-[#97989F]">
            <li>
              <button 
                onClick={handleHomeClick}
                className="hover:text-[#4B6BFB] transition-colors cursor-pointer bg-none border-none p-0 text-left"
              >
                Главная
              </button>
            </li>
            <li>
              <button
                onClick={handleAboutClick}
                className="hover:text-[#4B6BFB] transition-colors cursor-pointer bg-none border-none p-0 text-left"
              >
                О нас
              </button>
            </li>
            <li>
              <button
                onClick={handleMyBlogClick}
                className="hover:text-[#4B6BFB] transition-colors cursor-pointer bg-none border-none p-0 text-left"
              >
                Мой блог
              </button>
            </li>
            <li>
              <button
                onClick={handleAuthorsClick}
                className="hover:text-[#4B6BFB] transition-colors cursor-pointer bg-none border-none p-0 text-left"
              >
                Авторы
              </button>
            </li>
            <li>
              <button
                onClick={handleContactsClick}
                className="hover:text-[#4B6BFB] transition-colors cursor-pointer bg-none border-none p-0 text-left"
              >
                Контакты
              </button>
            </li>
          </ul>
        </div>

        <div className="text-[#181A2A] text-[14px] flex flex-col gap-4 px-4 max-md:items-center">
          <p className=" font-semibold text-[16px] dark:text-white">Категории</p>
          <ul className="flex flex-col gap-4  text-[#3B3C4A] max-md:items-center dark:text-[#97989F]">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/?category=${encodeURIComponent(category)}&page=1`} className="hover:text-[#4B6BFB] transition-colors">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end items-start -mt-16 ml-3">
          <img src="/images/coding-developers-logo.png" alt="Coding Developers" className="h-140 w-[512px] invert dark:invert-0" />
        </div>
      </div>
    </div>

  </footer>
  )
}

export default Footer
