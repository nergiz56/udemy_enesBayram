import componentsImg from './assets/c.jpg';
import jsxImg from './assets/react.jpg';
import propsImg from './assets/sql.jpg';
import stateImg from './assets/web.jpg';

export const Card_Data = [
  {
    image: componentsImg,
    cardTitle: 'C#',
    description:
      'C# (C-Sharp), Microsoft tarafından geliştirilen, .NET platformu üzerinde çalışan modern, nesne yönelimli bir programlama dilidir.'
  },
  {
    image: jsxImg,
    cardTitle: 'React',
    description:
      'React, Facebook tarafından geliştirilen, bileşen tabanlı ve hızlı arayüzler oluşturmaya odaklanan popüler bir JavaScript kütüphanesidir.',
  },
  {
    image: propsImg,
    cardTitle: 'SQL',
    description:
      'SQL (Structured Query Language), veritabanlarını yönetmek, veri eklemek, güncellemek, silmek ve sorgulamak için kullanılan bir dildir.',
  },
  {
    image: stateImg,
    cardTitle: 'BootStrap', // Tutarsızlık giderildi (title yerine cardTitle)
    description:
      'Bootstrap, Twitter tarafından geliştirilen, mobil uyumlu (responsive) ve modern web tasarımları oluşturmayı kolaylaştıran CSS ve JavaScript tabanlı bir kütüphanedir. .',
  },
];