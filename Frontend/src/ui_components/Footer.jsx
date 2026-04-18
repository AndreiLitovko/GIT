import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const categories = ["Frontend", "Backend", "Fullstack", "Design", "Blockchain"];

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7] padding-x py-16 max-container dark:bg-[#141624]">
    <div className="flex max-lg:gap-9 lg:gap-4 flex-wrap max-md:justify-center justify-between">
      <div className="w-[300px] flex flex-col gap-6 max-md:items-center">
        <h1 className="text-[#141624] text-2xl dark:text-[#FFFFFF] ">
          DevFolio
        </h1>

        <p className="text-[14px] text-[#696A75] leading-[1.5]  max-md:text-center dark:text-[#97989F]">
          Платформа для публикации постов на различные темы.
 Делитесь своими идеями, опытом и знаниями, находите интересные материалы,
 открывайте для себя новые взгляды и истории от других авторов.
        </p>
      </div>

      <div className="text-[#181A2A] text-[14px] flex flex-col gap-4 px-4 max-md:items-center">
        <p className=" font-semibold text-[16px] dark:text-white">
          Навигация
        </p>
        <ul className="flex flex-col gap-4  text-[#3B3C4A] max-md:items-center dark:text-[#97989F]">
          <li>Главная</li>
          <li>О нас</li>
          <li>Блог</li>
          <li>Архив</li>
          <li>Авторы</li>
          <li>Контакты</li>
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

      <div className="bg-white w-full max-w-[350px] px-6 flex flex-col items-center justify-center gap-2 rounded-lg dark:bg-[#242535] py-6">
        <h3 className="font-semibold text-xl  dark:text-white">
          Еженедельная рассылка
        </h3>
        <p className="text-[#696A75] text-[16px] mb-5 dark:text-[#97989F]">
          Получайте статьи блога и предложения по электронной почте
        </p>
        <div className="w-full relative">
          <input
            placeholder="Ваш Email"
            className="border border-[#DCDDDF] rounded-sm h-[40px] px-3 py-3 w-full text-[14px] dark:bg-[#181A2A] "
          />
          <CiMail className="absolute top-[12px] right-[10px] text-[16px] dark:text-[#97989F]" />
        </div>
        <button className="bg-[#4B6BFB] text-[#FFFFFF] text-[16px] rounded-md w-full py-3">
          Подписаться
        </button>
      </div>
    </div>

  </footer>
  )
}

export default Footer
