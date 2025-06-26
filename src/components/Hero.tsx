import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block w-16 h-16 bg-green-100 rounded-full mb-6 flex items-center justify-center">
            <span className="text-2xl">🌱</span>
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Время жить
          <span className="block text-green-600 mt-2">
            Мой опыт победы над раком
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Я не врач, но я человек, который прошёл через трудности и хочет
          поделиться тем, что помогло мне и моему близкому в самый сложный
          период.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            Начать курс
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 px-8 py-4 text-lg"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
