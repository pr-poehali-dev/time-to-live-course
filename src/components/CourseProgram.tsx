import { CheckCircle } from "lucide-react";

const CourseProgram = () => {
  const modules = [
    {
      title: "Принятие диагноза",
      description: "Как пережить шок и найти внутренние ресурсы",
      lessons: [
        "Работа с эмоциями",
        "Поддержка близких",
        "Планирование лечения",
      ],
    },
    {
      title: "Во время лечения",
      description: "Практические советы для прохождения терапии",
      lessons: [
        "Подготовка к процедурам",
        "Управление побочными эффектами",
        "Сохранение качества жизни",
      ],
    },
    {
      title: "Психологическая поддержка",
      description: "Техники работы со страхами и тревогой",
      lessons: ["Медитация и дыхание", "Визуализация", "Работа с мыслями"],
    },
    {
      title: "Восстановление",
      description: "Возвращение к полноценной жизни после лечения",
      lessons: [
        "Физическая реабилитация",
        "Социальная адаптация",
        "Планы на будущее",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Программа курса
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Четыре модуля, которые помогут вам пройти весь путь от диагноза до
            полного восстановления
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
