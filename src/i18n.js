import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false, // Set to false for production
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ar: {
        translation: {
          // Header & Nav
          brand_name: 'برستيج للإطارات والجنوط',
          brand_subtitle: 'استيراد وتصدير الإطارات والجنوط',
          nav_services: 'خدماتنا',
          nav_products: 'منتجاتنا',
          nav_blog: 'المدونة',
          nav_contact: 'تواصل معنا',
          whatsapp: 'WhatsApp',

          // Hero Section
          hero_title: 'قمة الأداء، فخامة الاختيار',
          hero_subtitle: 'وجهتك الأولى للإطارات والجنوط الفاخرة في دبي. اكتشف مجموعتنا الحصرية التي تضمن لك قيادة آمنة وأداءً استثنائياً.',
          hero_cta_browse: 'تصفح المنتجات',
          hero_welcome_message: 'الرسالة الترحيبية',
          hero_stop: 'إيقاف',
          hero_experience: 'سنوات خبرة',
          hero_satisfied_client: 'عميل راضٍ',
          hero_brand: 'علامة تجارية',

          // Why Us Section
          whyus_title: 'لماذا تختار برستيج؟',
          feature_quality_guarantee: 'ضمان الجودة',
          feature_quality_guarantee_desc: 'جميع منتجاتنا أصلية وبضمان المصنع',
          feature_experience_years: 'خبرة أكثر من 40 عاماً',
          feature_experience_years_desc: 'في مجال الإطارات والجنوط الفاخرة',
          feature_support: 'دعم فني',
          feature_support_desc: 'فريق دعم فني متاح 24/7',
          feature_delivery: 'توصيل سريع',
          feature_delivery_desc: 'خدمة توصيل لجميع أنحاء دبي',
          
          // Services Section
          services_title: 'خدمات تليق بسيارتك',
          service_fitting_new: 'تركيب احترافي',
          service_fitting_new_desc: 'نستخدم أحدث المعدات لتركيب إطاراتك بدقة وسرعة، مع ضمان تثبيت آمن ومحكم.',
          service_balancing: 'ترصيص وميزانية',
          service_balancing_desc: 'خدمة ترصيص وميزانية بالكمبيوتر للقضاء على الاهتزازات وضمان ثبات السيارة.',
          service_nitrogen: 'تعبئة نيتروجين',
          service_nitrogen_desc: 'حافظ على ضغط الإطارات مثالياً لفترة أطول لأداء أكثر ثباتاً في درجات الحرارة المرتفعة.',
          service_puncture_repair: 'إصلاح ثقوب',
          service_puncture_repair_desc: 'خدمة سريعة وموثوقة لإصلاح ثقوب الإطارات وإعادتك إلى الطريق بأمان.',

          // Products Section
          products_title: 'علامات تجارية نثق بها',
          product_search_placeholder: 'ابحث باسم العلامة التجارية...',
          product_farroad_desc: 'الأداء الرياضي الفائق والتحكم المطلق. مثالية للسيارات الرياضية والفاخرة.',
          product_duro_desc: 'المتانة التي تدوم. مصممة لتقاوم أصعب الظروف وتوفر عمراً افتراضياً طويلاً.',
          product_threea_desc: 'الجودة الموثوقة والقيمة الذكية. توفر قيادة هادئة ومريحة لمختلف السيارات.',
          product_price: 'اتصل للسعر',
          product_buy_cta: 'اتصل للشراء',
          
          // Testimonials Section
          testimonials_title: 'آراء عملائنا',
          testimonial_1_name: 'سالم مبارك',
          testimonial_1_role: 'مالك سيارة رينج روفر',
          testimonial_1_content: 'أفضل خدمة في دبي، فريق محترف ومنتجات أصلية بأسعار مناسبة.',
          testimonial_2_name: 'سهيل جاسم',
          testimonial_2_role: 'مالكة سيارة مرسيدس',
          testimonial_2_content: 'نصيحتهم ساعدتني في اختيار الإطار المناسب لسيارتي، شكراً لكم!',
          testimonial_3_name: 'سلطان عبدالله',
          testimonial_3_role: 'مالك سيارة بورش',
          testimonial_3_content: 'الخدمة سريعة والتركيب دقيق، أنصح الجميع بتجربة خدماتهم.',

          // Featured Video
          featured_video_title: 'فيديو مميز',
          featured_video_caption_title: 'تجربة عملائنا مع برستيج',
          featured_video_caption_desc: 'شاهد كيف غيرنا تجربة صيانة الإطارات لعملائنا',
          video_play_aria: 'تشغيل',
          video_pause_aria: 'إيقاف',

          // FAQ Section
          faq_title: 'أسئلة شائعة',
          faq_1_q: 'كيف أعرف أن الإطار يحتاج للاستبدال؟',
          faq_1_a: 'هناك عدة علامات منها: وصول عمق النقشة إلى 1.6 مم، ظهور تشققات جانبية، تآكل غير منتظم، أو عند مرور 5 سنوات من تاريخ الإنتاج.',
          faq_2_q: 'ما الفرق بين الإطارات الصيفية والشتوية؟',
          faq_2_a: 'الإطارات الصيفية مصممة لتحمل الحرارة العالية وتوفر تماسكاً أفضل على الطرق الجافة، بينما الشتوية تحتوي على أخاديد خاصة للتماسك على الثلج والجليد.',
          
          // Blog Section
          blog_title: 'مقالات ونصائح',
          blog_1_title: 'كيف تختار الإطار المثالي لسيارتك في مناخ دبي؟',
          blog_1_snippet: 'الحرارة الشديدة في دبي تضع تحدياً كبيراً على إطارات سيارتك. اختيار الإطار الصحيح ليس رفاهية، بل ضرورة لسلامتك...',
          blog_2_title: 'النيتروجين أم الهواء العادي؟ الحقيقة الكاملة لإطارات سيارتك',
          blog_2_snippet: 'هل تساءلت يوماً عن فائدة تعبئة الإطارات بالنيتروجين؟ هل هي مجرد ترف أم أن هناك فوائد حقيقية، خاصة في بيئة مثل دبي؟...',
          blog_3_title: '5 علامات تدل على أن الوقت قد حان لتغيير إطارات سيارتك',
          blog_3_snippet: 'إطارات سيارتك هي نقطة الاتصال الوحيدة بينك وبين الطريق. تجاهل حالتها يمكن أن يكون له عواقب وخيمة. لا تنتظر وقوع حادث!...',
          read_more: 'اقرأ المزيد',

          // Contact Form
          contact_title: 'تواصل معنا',
          contact_info_title: 'كن على تواصل',
          contact_info_p: 'نحن هنا لمساعدتك. سواء كان لديك سؤال حول منتجاتنا أو كنت بحاجة إلى استشارة، فلا تتردد في الاتصال بنا.',
          contact_mobile: 'الموبايل',
          contact_phone: 'الهاتف',
          contact_email: 'البريد الإلكتروني',
          contact_address: 'العنوان',
          contact_address_value: 'القصيص ٤ ,دبي ,الإمارات العربية المتحدة 🇦🇪',
          form_full_name: 'الاسم الكامل',
          form_phone_number: 'رقم الهاتف',
          form_message: 'رسالتك (اختياري)',
          form_send: 'إرسال الرسالة',
          form_sending: 'جارِ الإرسال...',
          form_feedback_success: 'شكراً لك! تم استلام رسالتك بنجاح وسنتواصل معك قريباً.',
          form_feedback_error: 'عذراً، حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.',
          form_try_again: 'حاول مرة أخرى',

          // Footer
          footer_copyright: '© {{year}} Prestige Tyres & Wheels - جميع الحقوق محفوظة',
        }
      },
      en: {
        translation: {
          // Header & Nav
          brand_name: 'Prestige Tyres & Wheels',
          brand_subtitle: 'Import and Export of Tyres & Wheels',
          nav_services: 'Our Services',
          nav_products: 'Our Products',
          nav_blog: 'Blog',
          nav_contact: 'Contact Us',
          whatsapp: 'WhatsApp',

          // Hero Section
          hero_title: 'Peak Performance, Luxurious Choice',
          hero_subtitle: 'Your premier destination for luxury tyres and wheels in Dubai. Discover our exclusive collection that guarantees a safe ride and exceptional performance.',
          hero_cta_browse: 'Browse Products',
          hero_welcome_message: 'Welcome Message',
          hero_stop: 'Stop',
          hero_experience: 'Years of Experience',
          hero_satisfied_client: 'Satisfied Client',
          hero_brand: 'Brand',

          // Why Us Section
          whyus_title: 'Why Choose Prestige?',
          feature_quality_guarantee: 'Quality Guarantee',
          feature_quality_guarantee_desc: 'All our products are genuine and come with a manufacturer\'s warranty.',
          feature_experience_years: 'Over 40 Years of Experience',
          feature_experience_years_desc: 'In the field of luxury tyres and wheels.',
          feature_support: 'Technical Support',
          feature_support_desc: 'Our technical support team is available 24/7.',
          feature_delivery: 'Fast Delivery',
          feature_delivery_desc: 'Delivery service available across all of Dubai.',
          
          // Services Section
          services_title: 'Services Worthy of Your Car',
          service_fitting_new: 'Professional Fitting',
          service_fitting_new_desc: 'We use the latest equipment to install your tyres with precision and speed, ensuring a secure fit.',
          service_balancing: 'Balancing & Alignment',
          service_balancing_desc: 'Computerized balancing and alignment to eliminate vibrations and ensure vehicle stability.',
          service_nitrogen: 'Nitrogen Filling',
          service_nitrogen_desc: 'Maintain optimal tire pressure for longer, ensuring more stable performance in high temperatures.',
          service_puncture_repair: 'Puncture Repair',
          service_puncture_repair_desc: 'Fast and reliable service to repair tyre punctures and get you back on the road safely.',

          // Products Section
          products_title: 'Brands We Trust',
          product_search_placeholder: 'Search by brand name...',
          product_farroad_desc: 'Superior sport performance and absolute control. Ideal for sports and luxury cars.',
          product_duro_desc: 'Durability that lasts. Designed to withstand the toughest conditions and provide a long lifespan.',
          product_threea_desc: 'Reliable quality and smart value. Provides a quiet and comfortable ride for various cars.',
          product_price: 'Call for Price',
          product_buy_cta: 'Call to Buy',
          
          // Testimonials Section
          testimonials_title: 'Our Clients\' Testimonials',
          testimonial_1_name: 'Salim Mubarak',
          testimonial_1_role: 'Range Rover Owner',
          testimonial_1_content: 'Best service in Dubai, professional team, and genuine products at fair prices.',
          testimonial_2_name: 'Suhail Jassim',
          testimonial_2_role: 'Mercedes Owner',
          testimonial_2_content: 'Their advice helped me choose the right tyre for my car, thank you!',
          testimonial_3_name: 'Sultan Abdullah',
          testimonial_3_role: 'Porsche Owner',
          testimonial_3_content: 'The service is fast and the installation is precise. I recommend their services to everyone.',

          // Featured Video
          featured_video_title: 'Featured Video',
          featured_video_caption_title: 'Our Customers\' Experience with Prestige',
          featured_video_caption_desc: 'See how we transformed the tire maintenance experience for our customers.',
          video_play_aria: 'Play',
          video_pause_aria: 'Pause',

          // FAQ Section
          faq_title: 'Frequently Asked Questions',
          faq_1_q: 'How do I know if my tyres need to be replaced?',
          faq_1_a: 'There are several signs: tread depth reaching 1.6 mm, visible side cracks, uneven wear, or if 5 years have passed since the production date.',
          faq_2_q: 'What is the difference between summer and winter tyres?',
          faq_2_a: 'Summer tyres are designed to withstand high temperatures and provide better grip on dry roads, while winter tyres have special grooves for traction on snow and ice.',
          
          // Blog Section
          blog_title: 'Articles and Tips',
          blog_1_title: 'How to Choose the Perfect Tire for Your Car in Dubai\'s Climate?',
          blog_1_snippet: 'The intense heat in Dubai poses a major challenge for your car\'s tires. Choosing the right tire is not a luxury, but a necessity for your safety...',
          blog_2_title: 'Nitrogen or Regular Air? The Complete Truth for Your Car Tires',
          blog_2_snippet: 'Have you ever wondered about the benefit of filling tires with nitrogen? Is it just a luxury, or are there real benefits, especially in an environment like Dubai?...',
          blog_3_title: '5 Signs It\'s Time to Change Your Car Tires',
          blog_3_snippet: 'Your car\'s tires are the only point of contact between you and the road. Ignoring their condition can have serious consequences. Don\'t wait for an accident!...',
          read_more: 'Read More',

          // Contact Form
          contact_title: 'Contact Us',
          contact_info_title: 'Get in Touch',
          contact_info_p: 'We are here to help. Whether you have a question about our products or need a consultation, do not hesitate to contact us.',
          contact_mobile: 'Mobile',
          contact_phone: 'Phone',
          contact_email: 'Email',
          contact_address: 'Address',
          contact_address_value: 'Al Qusais 4, Dubai, United Arab Emirates.',
          form_full_name: 'Full Name',
          form_phone_number: 'Phone Number',
          form_message: 'Your Message (Optional)',
          form_send: 'Send Message',
          form_sending: 'Sending...',
          form_feedback_success: 'Thank you! Your message has been received successfully, and we will contact you soon.',
          form_feedback_error: 'Sorry, an error occurred while sending the message. Please try again.',
          form_try_again: 'Try Again',

          // Footer
          footer_copyright: '© {{year}} Prestige Tyres & Wheels - All rights reserved',
        }
      }
    }
  });

export default i18n;
