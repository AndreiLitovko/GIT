import banner from "../images/tech-girl.jpg"
import Header from "@/ui_components/Header"
import { useQuery } from "@tanstack/react-query"
import { getAuthors, getBlogs, getActiveUsersCount } from "@/services/apiBlog"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const AboutPage = () => {
  const [searchParams] = useSearchParams();
  const contacts = [
    { type: "Email", value: "DevFolioBlog@gmail.com", icon: "📧" },
    { type: "Phone", value: "+1 (555) 123-4567", icon: "📱" },
    { type: "Address", value: "San Francisco, CA, USA", icon: "�️" },
    { type: "Telegram", value: "@DevFolioCommunity", icon: "✈️" },
    { type: "Discord", value: "DevFolio Community Server", icon: "🎮" },
    { type: "LinkedIn", value: "linkedin.com/company/devfolio", icon: "💼" },
  ]
  const { data: authors = [] } = useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
  })

  const { data: blogsData } = useQuery({
    queryKey: ["blogs", 1],
    queryFn: () => getBlogs(1),
  })

  const { data: usersData } = useQuery({
    queryKey: ["active_users_count"],
    queryFn: getActiveUsersCount,
  })

  const authorsCount = authors.length
  const blogsCount = blogsData?.count || 0
  const usersCount = usersData?.count || 0

  useEffect(() => {
    if (searchParams.get("scrollToFooter") === "true") {
      setTimeout(() => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      }, 500);
    }
  }, [searchParams])

  return (
    <>
      <Header />
      <section className="max-container padding-x py-16">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#141624] dark:text-white mb-4">
              О нашем проекте
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Text */}
            <div className="lg:col-span-2">
              {/* First Paragraph */}
              <div className="mb-8">
                <p className="text-lg text-[#3B3C4A] dark:text-[#97989F] leading-relaxed">
                  DevFolio — это современная и динамично развивающаяся платформа, созданная специально для разработчиков, стремящихся делиться знаниями и обмениваться опытом. Здесь каждый участник может публиковать статьи, разбирать реальные кейсы, обсуждать актуальные технологии и находить полезные инсайты для своей профессиональной деятельности. Платформа объединяет как начинающих специалистов, так и опытных инженеров, создавая пространство для открытого диалога и взаимного обучения.
                </p>
              </div>

              {/* Second Paragraph */}
              <div className="mb-8">
                <p className="text-lg text-[#3B3C4A] dark:text-[#97989F] leading-relaxed">
                  DevFolio предоставляет удобные инструменты для создания контента, позволяя авторам структурировать свои мысли, делиться практическими наработками и демонстрировать свои проекты широкой аудитории. Читатели, в свою очередь, получают доступ к разнообразным материалам — от базовых руководств до глубоких технических разборов, что помогает им постоянно развиваться и оставаться в курсе последних тенденций в мире разработки.
                </p>
              </div>

              {/* Third Paragraph */}
              <div>
                <p className="text-lg text-[#3B3C4A] dark:text-[#97989F] leading-relaxed">
                  Наша миссия — сформировать сильное и поддерживающее сообщество разработчиков, где каждый может свободно выражать свои идеи, делиться лучшими практиками и получать конструктивную обратную связь. Мы стремимся создать среду, которая вдохновляет на рост, способствует профессиональному развитию и помогает находить единомышленников по всему миру.
                </p>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <div className="bg-[#F3F5FF] dark:bg-[#1E1F2B] p-8 rounded-lg text-[#141624] dark:text-[#FFFFFF] shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4B6BFB] hover:to-[#3D53D6] hover:text-white hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-3">🎯</h3>
                <h4 className="text-xl font-bold mb-2">Наша миссия</h4>
                <p className="text-sm">
                  Объединять разработчиков и создавать сильное сообщество
                </p>
              </div>

              <div className="bg-[#F3F5FF] dark:bg-[#1E1F2B] p-8 rounded-lg text-[#141624] dark:text-[#FFFFFF] shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4B6BFB] hover:to-[#3D53D6] hover:text-white hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-3">💡</h3>
                <h4 className="text-xl font-bold mb-2">Инновация</h4>
                <p className="text-sm">
                  Постоянное развитие и улучшение для удобства пользователей
                </p>
              </div>

              <div className="bg-[#F3F5FF] dark:bg-[#1E1F2B] p-8 rounded-lg text-[#141624] dark:text-[#FFFFFF] shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4B6BFB] hover:to-[#3D53D6] hover:text-white hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-3">🤝</h3>
                <h4 className="text-xl font-bold mb-2">Сообщество</h4>
                <p className="text-sm">
                  Обменивайся опытом и прокачивай навыки каждый день
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-t border-b border-[#E4E4E7] dark:border-[#2A2B35]">
            <div className="text-center hover:scale-105 transition-transform">
              <h4 className="text-4xl font-bold text-[#4B6BFB] mb-2">{authorsCount}+</h4>
              <p className="text-[#3B3C4A] dark:text-[#97989F] text-lg">Авторов на платформе</p>
            </div>
            <div className="text-center hover:scale-105 transition-transform">
              <h4 className="text-4xl font-bold text-[#4B6BFB] mb-2">{blogsCount}+</h4>
              <p className="text-[#3B3C4A] dark:text-[#97989F] text-lg">Опубликовано статей</p>
            </div>
            <div className="text-center hover:scale-105 transition-transform">
              <h4 className="text-4xl font-bold text-[#4B6BFB] mb-2">{usersCount}+</h4>
              <p className="text-[#3B3C4A] dark:text-[#97989F] text-lg">Активных читателей</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#141624] dark:text-[#FFFFFF] mb-12">
              Способы связи с нами
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact) => (
                <div
                  key={contact.type}
                  className="bg-[#F3F5FF] dark:bg-[#1E1F2B] p-8 rounded-lg text-[#141624] dark:text-[#FFFFFF] shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4B6BFB] hover:to-[#3D53D6] hover:text-white hover:shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-2">{contact.type}</h3>
                  <p className="text-sm">{contact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
