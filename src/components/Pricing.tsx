import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      price: "12 900",
      description: "Основные модули курса",
      features: [
        "4 основных модуля",
        "Видеоуроки (3 часа)",
        "Рабочие тетради",
        "Доступ на 6 месяцев",
      ],
      popular: false,
    },
    {
      name: "Полный",
      price: "19 900",
      description: "Всё необходимое + поддержка",
      features: [
        "4 основных модуля",
        "Видеоуроки (5 часов)",
        "Рабочие тетради",
        "2 групповые встречи",
        "Чат поддержки",
        "Доступ на 1 год",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "29 900",
      description: "Максимальная поддержка",
      features: [
        "Все материалы курса",
        "4 индивидуальные консультации",
        "Приоритетная поддержка",
        "Дополнительные материалы",
        "Пожизненный доступ",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Стоимость</h2>
          <p className="text-xl text-gray-600">
            Выберите подходящий тариф для вашего пути к выздоровлению
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                plan.popular ? "border-green-500 shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">₽</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                Выбрать план
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
