import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const motorcycles = [
  {
    id: 1,
    name: 'Yamaha R1 Sport',
    category: 'Спортивный',
    price: '1 450 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '200 л.с.',
    speed: '320 км/ч'
  },
  {
    id: 2,
    name: 'Harley Davidson Cruiser',
    category: 'Круизер',
    price: '1 890 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/07557c0a-cb81-48a3-b5a5-c2eef5ded732.jpg',
    power: '105 л.с.',
    speed: '180 км/ч'
  },
  {
    id: 3,
    name: 'BMW R1250 GS',
    category: 'Туристический',
    price: '2 100 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/71028794-966e-41cf-b2a9-c3ea58b9474e.jpg',
    power: '136 л.с.',
    speed: '200 км/ч'
  },
  {
    id: 4,
    name: 'Ducati Monster',
    category: 'Нейкед',
    price: '1 650 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '111 л.с.',
    speed: '240 км/ч'
  },
  {
    id: 5,
    name: 'Kawasaki Ninja H2',
    category: 'Спортивный',
    price: '2 850 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '231 л.с.',
    speed: '340 км/ч'
  },
  {
    id: 6,
    name: 'Honda Gold Wing',
    category: 'Туристический',
    price: '3 200 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/71028794-966e-41cf-b2a9-c3ea58b9474e.jpg',
    power: '126 л.с.',
    speed: '200 км/ч'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Александр Воронов',
    text: 'Купил Yamaha R1 месяц назад. Это не просто мотоцикл — это произведение искусства. Каждая деталь продумана до мелочей. Рекомендую всем!',
    rating: 5,
    date: '15 ноября 2024'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    text: 'Harley Davidson превзошёл все ожидания. Комфорт, мощность и элегантность в одном. Отличный сервис и профессиональная команда.',
    rating: 5,
    date: '8 ноября 2024'
  },
  {
    id: 3,
    name: 'Михаил Петров',
    text: 'BMW R1250 GS — идеальный выбор для дальних путешествий. Удобный, надёжный, технологичный. Доволен покупкой на все 100%!',
    rating: 5,
    date: '22 октября 2024'
  },
  {
    id: 4,
    name: 'Сергей Иванов',
    text: 'Приобрёл Kawasaki Ninja H2. Невероятная мощность и управляемость. Менеджеры помогли с выбором и оформлением. Спасибо!',
    rating: 5,
    date: '5 октября 2024'
  },
  {
    id: 5,
    name: 'Андрей Морозов',
    text: 'Honda Gold Wing — мечта любого туриста. Комфорт на высшем уровне. Доставка была быстрой, всё в идеальном состоянии.',
    rating: 5,
    date: '18 сентября 2024'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">MOTO PREMIUM</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'services', 'catalog', 'reviews', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'services' && 'Услуги'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary">Премиум коллекция 2024</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Ваш мотоцикл мечты <span className="text-primary">уже ждёт вас</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Эксклюзивная коллекция премиальных мотоциклов для ценителей совершенства
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Смотреть каталог
                </Button>
                <Button onClick={() => scrollToSection('contacts')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg"
                alt="Premium Motorcycle"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h3 className="text-4xl font-bold mb-6">О компании</h3>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              MOTO PREMIUM — это эксклюзивный салон премиальных мотоциклов, где традиции мастерства встречаются с инновационными технологиями. Мы предлагаем только лучшие модели от ведущих мировых производителей.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждый мотоцикл в нашей коллекции — это произведение искусства, созданное для тех, кто ценит безупречное качество, элегантный дизайн и непревзойденные технические характеристики.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Наши услуги</h3>
          <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Settings', title: 'Техническое обслуживание', desc: 'Профессиональное обслуживание мотоциклов премиум-класса' },
              { icon: 'Wrench', title: 'Индивидуальный тюнинг', desc: 'Персонализация под ваши требования и предпочтения' },
              { icon: 'Shield', title: 'Гарантийное обслуживание', desc: 'Полная гарантия на все модели и запчасти' }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Каталог</h3>
          <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {motorcycles.map((moto, index) => (
              <Card key={moto.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative overflow-hidden group">
                  <img 
                    src={moto.image} 
                    alt={moto.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{moto.category}</Badge>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{moto.name}</h4>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Zap" size={16} />
                      {moto.power}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Gauge" size={16} />
                      {moto.speed}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{moto.price} ₽</span>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h3>
          <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="p-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-4">Доставка</h3>
            <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Доставка по России</h4>
                  <p className="text-muted-foreground">Бесплатная доставка премиальных мотоциклов в любой город России. Срок доставки 7-14 дней.</p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Международная доставка</h4>
                  <p className="text-muted-foreground">Организуем доставку в любую страну мира с полным таможенным сопровождением.</p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Страхование груза</h4>
                  <p className="text-muted-foreground">Полное страхование мотоцикла на время транспортировки от любых повреждений.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Контакты</h3>
          <div className="h-1 w-24 bg-gold mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, Рублёвское шоссе, 123</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@motopremium.ru</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Время работы</h4>
                  <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                </div>
              </div>
            </div>
            <Card className="p-8 animate-scale-in">
              <h4 className="text-2xl font-bold mb-6">Оставьте заявку</h4>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">MOTO PREMIUM</h2>
          <p className="text-muted-foreground mb-6">Роскошь в каждой детали</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
            <Icon name="Facebook" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
            <Icon name="Youtube" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
          </div>
          <p className="text-sm text-muted-foreground">© 2024 MOTO PREMIUM. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}