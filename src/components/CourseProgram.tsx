import { CheckCircle } from "lucide-react";

const CourseProgram = () => {
  const modules = [
    {
      title: "Личный опыт и реальные события",
      description:
        "Что именно сработало для нас и как мы справлялись с трудностями",
      lessons: [
        "Организация поддержки близких",
        "Практические знания из личного опыта",
        "Что помогло на пути к выздоровлению",
      ],
    },
    {
      title: "Эмоциональная поддержка",
      description: "Как вести себя в тяжелые моменты и что делает жизнь легче",
      lessons: [
        "Психологическая поддержка близкого",
        "Работа с собственными эмоциями",
        "Маленькие вещи, которые помогают",
      ],
    },
    {
      title: "Практические навыки",
      description: "Конкретные действия и решения из нашего опыта",
      lessons: [
        "Организация быта и комфорта",
        "Общение с медперсоналом",
        "Поддержание надежды и мотивации",
      ],
    },
    {
      title: "Сообщество поддержки",
      description:
        "Станьте частью сообщества, где все понимают и поддерживают друг друга",
      lessons: [
        "Обмен опытом с другими участниками",
        "Взаимная поддержка и понимание",
        "Создание сети поддержки",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">О курсе</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            В этом курсе я делюсь своим личным опытом и знаниями, которые я
            накопила, помогая близкому человеку справиться с раком. Я не врач и
            не специалист, но за годы борьбы мы получили много ценной информации
            и практического опыта.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg mr-4">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {module.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">{module.description}</p>

              <div className="space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
