const AboutMe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Обо мне</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Меня зовут Анна, и три года назад я услышала диагноз, который
                перевернул мою жизнь. Рак груди, вторая стадия.
              </p>
              <p>
                Тогда казалось, что мир рухнул. Но сегодня я здесь — живая,
                здоровая и полная сил. За эти годы я прошла через всё: операции,
                химиотерапию, страхи и сомнения.
              </p>
              <p>
                Но главное — я научилась не просто выживать, а по-настоящему
                жить. И теперь хочу поделиться этим опытом с теми, кто сейчас
                проходит свой путь.
              </p>
              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <p className="font-medium text-green-800">
                  "Рак не приговор. Это вызов, который можно принять и победить.
                  Я прошла этот путь и готова идти рядом с вами."
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
                alt="Анна - автор курса"
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
