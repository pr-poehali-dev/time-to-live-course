import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Registration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Присоединяйтесь к курсу "Время жить"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Если вы ищете поддержку и желаете поделиться своим опытом или просто
            хотите получить полезные советы, я вас приглашаю присоединиться к
            курсу "Время жить". Мы вместе сможем сделать этот путь легче!
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <Input placeholder="Как к вам обращаться?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <Input placeholder="+7 (___) ___-____" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input type="email" placeholder="your@email.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Расскажите о своей ситуации
              </label>
              <Textarea
                placeholder="Опишите, на какой стадии вы находитесь, какие у вас есть вопросы или опасения"
                rows={4}
              />
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg"
              >
                Присоединиться к курсу
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь с условиями обработки
                персональных данных
              </p>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Есть вопросы?
            </h3>
            <p className="text-gray-600 mb-4">Свяжитесь со мной напрямую</p>
            <div className="flex justify-center space-x-6">
              <a
                href="tel:+79001234567"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +7 (900) 123-45-67
              </a>
              <a
                href="mailto:anna@example.com"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                anna@timetolife.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
