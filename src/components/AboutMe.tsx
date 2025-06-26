const AboutMe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">О себе</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Я — обычный человек, который столкнулся с огромными вызовами на
                пути исцеления и восстановления. Мой близкий человек переживал
                тяжелую болезнь, и в процессе этой борьбы я узнала много
                полезного — как организовать поддержку, как вести себя в тяжелые
                моменты и какие мелочи могут сделать жизнь легче.
              </p>
              <p>
                Я создала этот курс, чтобы поделиться этим опытом с теми, кто
                сталкивается с подобными трудностями. Это не медицинские
                рекомендации, а практическая и эмоциональная поддержка,
                основанная на реальном опыте.
              </p>
              <p>
                Я хочу помочь вам путем деления своим личным опытом и тем, что
                мы пережили вместе. За годы борьбы мы получили много ценной
                информации, которая может помочь другим в подобной ситуации.
              </p>
              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <p className="font-medium text-green-800">
                  "Мы все имеем право на поддержку и понимание. Иметь рядом тех,
                  кто прошел через это - невероятно важно!"
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
