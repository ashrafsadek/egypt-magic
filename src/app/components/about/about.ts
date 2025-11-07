import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  selectedfamous: any = null;
  previewImage: string | null = null;

  famousEgyptians = [
  {
    name: 'Tutankhamun',
    image: '/images/famous/Tutankhamun.webp',
    description:
      "Tutankhamun, one of Egypt’s most iconic and mysterious pharaohs, ruled during the 18th dynasty at a very young age. Although his reign was relatively short, his legacy became immortal after the discovery of his nearly intact tomb by Howard Carter in 1922. The treasures within, including his golden mask, offered unparalleled insight into the grandeur of ancient Egyptian civilization. Tutankhamun’s tomb reignited global fascination with Egyptology and became a symbol of the nation’s rich heritage, artistic brilliance, and enduring influence on world history.",
    gallery: ['/images/famous/Tutankhamun2.jpg', '/images/famous/Tutankhamun3.jpg'],
  },
  {
    name: 'Cleopatra VII',
    image: '/images/famous/Cleopatra VII.jpg',
    description:
      "Cleopatra VII, the last active ruler of the Ptolemaic Kingdom of Egypt, was a woman of extraordinary intelligence, charm, and political acumen. Fluent in several languages and deeply educated, she skillfully navigated one of history’s most complex political landscapes by forming alliances with Julius Caesar and Mark Antony. Cleopatra sought to preserve Egypt’s independence amidst Rome’s expansion and left an indelible mark on history as a symbol of strength, leadership, and beauty. Her legacy continues to inspire countless works of art, literature, and cinema, embodying the timeless power of Egyptian culture.",
    gallery: ['/images/famous/Cleopatra VII2.jpg', '/images/famous/Cleopatra VII3.jpg'],
  },
  {
    name: 'Ahmed Zewail',
    image: '/images/famous/Ahmed Zewail.jpg',
    description:
      "Ahmed Zewail, an Egyptian-American scientist, made groundbreaking contributions to the field of chemistry, earning the Nobel Prize in 1999 for his pioneering work in femtochemistry. By capturing chemical reactions that occur in just femtoseconds, he opened a new era of understanding molecular transformations. Beyond his scientific achievements, Zewail became a global ambassador for science and education, promoting innovation and research in Egypt and the Arab world. His vision for progress through knowledge continues to inspire scientists, educators, and dreamers across generations.",
    gallery: ['/images/famous/Ahmed Zewail2.jpg', '/images/famous/Ahmed Zewail3.jpg'],
  },
  {
    name: 'Umm Kulthum',
    image: '/images/famous/Umm Kulthum.jpg',
    description:
      "Umm Kulthum, affectionately known as 'The Star of the East', stands as one of the most celebrated and influential singers in the history of Arabic music. Her powerful, emotionally charged voice and poetic songs resonated with millions, uniting people from all walks of life. Over her decades-long career, she performed across the Arab world, symbolizing pride, love, and resilience. Even decades after her passing, her music continues to define Arab cultural identity, and her concerts remain timeless examples of artistic excellence and emotional expression.",
    gallery: ['/images/famous/Umm Kulthum2.jpg', '/images/famous/Umm Kulthum3.jpg'],
  },
  {
    name: 'Naguib Mahfouz',
    image: '/images/famous/Naguib Mahfouz.jpg',
    description:
      "Naguib Mahfouz, the first Arabic-language writer to win the Nobel Prize in Literature (1988), is celebrated as a master storyteller who captured the soul of Egyptian life. Through his novels, particularly 'The Cairo Trilogy', Mahfouz explored themes of tradition, social change, and human struggle, portraying the complexities of everyday Egyptians with realism and empathy. His work bridged the gap between Arabic and global literature, introducing the world to Cairo’s streets and spirit. His influence extends far beyond literature, inspiring filmmakers, writers, and thinkers across the Arab world.",
    gallery: ['/images/famous/Naguib Mahfouz2.jpg', '/images/famous/Naguib Mahfouz3.jpg'],
  },
  {
    name: 'Mohamed Salah',
    image: '/images/famous/Mohamed Salah.jpg',
    description:
      "Mohamed Salah, one of the most prominent athletes in modern football, represents the heart and pride of Egypt on the global stage. Rising from humble beginnings in Nagrig, Salah’s talent, discipline, and perseverance propelled him to stardom in Europe, where he became a key player for Liverpool FC and a hero to millions. Known not only for his extraordinary speed and skill but also for his humility and philanthropy, Salah embodies the spirit of modern Egyptian success. His journey continues to inspire young people around the world to chase their dreams against all odds.",
    gallery: ['/images/famous/Mohamed Salah2.jpg', '/images/famous/Mohamed Salah3.jpg'],
  },
  {
    name: 'Omar Sharif',
    image: '/images/famous/Omar Sharif.jpg',
    description:
      "Omar Sharif, an Egyptian actor of international fame, broke cultural barriers with his roles in classic films such as 'Lawrence of Arabia' and 'Doctor Zhivago'. His talent, charisma, and commanding screen presence made him one of the first Arab actors to achieve global stardom. Sharif represented a bridge between East and West, showcasing the depth of Arab artistry to international audiences. His career, which spanned decades and continents, stands as a testament to the universality of Egyptian talent and the enduring appeal of cultural exchange through art.",
    gallery: ['/images/famous/Omar Sharif2.jpg', '/images/famous/Omar Sharif3.jpg'],
  },
  {
    name: 'Huda Shaarawi',
    image: '/images/famous/Huda Shaarawi.jpg',
    description:
      "Huda Shaarawi was a pioneering Egyptian feminist, social reformer, and activist whose courage transformed the role of women in Egyptian society. In 1923, she founded the Egyptian Feminist Union and famously removed her veil in public as a powerful statement of independence. Her lifelong dedication to women’s rights, education, and political participation helped lay the foundation for gender equality movements in Egypt and the Arab world. Shaarawi remains a symbol of empowerment, courage, and vision, reminding generations of the transformative power of one woman’s voice.",
    gallery: ['/images/famous/Huda Shaarawi.jpg', '/images/famous/Huda Shaarawi2.jpg'],
  },
  {
    name: 'Taha Hussein',
    image: '/images/famous/Taha Hussein.jpg',
    description:
      "Taha Hussein, often called 'The Dean of Arabic Literature', was a visionary intellectual whose influence shaped modern Arabic thought. Despite losing his sight at the age of three, he pursued education with determination, eventually earning a PhD from the Sorbonne in France. Through his writings and advocacy, Hussein championed education, enlightenment, and critical thinking, arguing that knowledge was the foundation of national progress. His literary works and reforms in Egyptian education continue to inspire the Arab world, proving that true vision lies in the mind and spirit, not the eyes.",
    gallery: ['/images/famous/Taha Hussein2.jpg', '/images/famous/Taha Hussein3.jpg'],
  },
  {
    name: 'Farouk El-Baz',
    image: '/images/famous/Farouk El-Baz.jpg',
    description:
      "Farouk El-Baz, an Egyptian-American space scientist and geologist, played a crucial role in NASA’s Apollo missions by helping select landing sites for astronauts on the Moon. His expertise in remote sensing and desert geology extended beyond space, as he later applied his knowledge to the study of Egypt’s deserts and groundwater resources. El-Baz’s contributions bridged science and national development, and his passion for exploration continues to inspire new generations of scientists. His life reflects Egypt’s spirit of discovery and its enduring contribution to global knowledge and innovation.",
    gallery: ['/images/famous/Farouk El-Baz2.jpg', '/images/famous/Farouk El-Baz3.jpg'],
  },
];


  explorefamous(famous: any, event: Event) {
    event.stopPropagation();
    this.selectedfamous = famous;

    // تأخير بسيط علشان الـDOM يحدث نفسه
    setTimeout(() => {
      const detailsSection = document.querySelector('.details');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  // ✅ غلق سكشن التفاصيل
  closeDetails() {
    this.selectedfamous = null;
  }

  // ✅ فتح الصورة في وضع المعاينة
  openPreview(image: string) {
    this.previewImage = image;
  }

  // ✅ غلق الصورة المكبرة
  closePreview() {
    this.previewImage = null;
  }
}