import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


const LANG_KEY = "selectedLanguage";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnObjects: true,
    lng: localStorage.getItem(LANG_KEY) || "en", // Load selected language from local storage or default to 'en'
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
            mainBtn:{
                next:"Next",
                back:"Back",
                submit:"Submit"

            },
          header: {
            step1: "general",
            step2: "Services",
            step3: "customization",
            step4: "General Guidelines & Rights",
            step5: "Summary",
          },
          firstStep: {
            title: "General Information",
            eventType: "Event Type ",
            dateInput1: "Multiple Dates Event",
            dateInput2: "Single Date Event",
            eventDate: "Event Date",
          },
          secondStep: {
            title: "Contact details",
            name: "Your Name",
            email: "Your Email",
            phone: "Your Phone",
            namePlaceholder: "Enter Your Name",
            emailPlaceholder: "Enter Your Email",
            phonePlaceholder: "Enter Your Phone",
          },
          thirdStep: {
            title: "Event Address",
            country: "Select Country",
            city: "Select City",
            GoogleLink: "Google Map Link",
            location: "Venue/ Location ",
            selectCity: "Select City",
            locationPlaceholder: "Enter Venue / Location",
          },

          forthStep: {
            title: "customer type",
            company: "Company",
            individual: "Individual",
            companyName: "Company Name (As Per CR)",
            companyNamePlaceholder: "Enter Company Name",
            companyCommercialName: "Company Name (commercial Name)",
            companyCommercialNamePlaceholder: "Enter commercial Name ",
            companyCr: "Company CR Number (As Per CR)",
            companyCrPlaceholder: "Enter Company CR Number",
            vat: "VAT Number",
            vatPlaceholder: "Enter Company VAT Number",
          },
          step2: {
            title: "Event Required Service Time",
            person: "person",
            bottle: "bottle",
            select: "Select Services",
            from: "From",
            to: "To",
          },
          step3: {
            extra: "Do you require any additional service or customization?",
            extraPlaceholder:
              "lie Corporate Giveaways, Outdoor Seating, Venue Decoration...etc.",
          },
          step4: {
            confirm: "Your Confirmation Required",
            agree: "I have read & understand above",
            1: "Price rate was calculated based on requested given quantity of people & days. Final price is subjected to change incase of any change in quantity or work scope.",
            2: "Confirmation is required within max of 3 buisness working days. Any delay in confirmation, event acceptance will be subjected to schedule availability.",
            3: "Confirmation is after 100% pre-payment as bank transfer.",
            4: "For small to medium size events installation would be same day, for large size events installation would be 1 day in advance",
            5: "It's the client's responsibility to spare a proper place for preparation & service (back area. If the designated area was outdoor which is not advisable, vivid events won't be responsible for any external factors might affect food quality as we will not be able to maintain the food quality & hygiene standards.",
            6:"For marketing purposes, professional photographer will cover the event, you can clear out if taking shots to guest's faces or showing the company name, brands is allowed or not head of time. Not responding to this clause prior the event due date, give Vivid Events the right to post any content on social media accounts."
          },
          step5: {
            type: "Event Type",
            name: "Full Contact Name",
            email: "Contact Email",
            phone: "Contact Phone",
            person: " Person",
            bottle: " Bottle",
            date: "Event Dates & Services",
            extra: "Customizations",
            extraAnswer: "Null",
            Disclaimers: "Disclaimers",
            l1: "1- Note that this is an initial quotation subject to date availability and final confirmation.",
            l2: "2- Menu is changeable depends on event's date",
          },
          lastStep: {
            h1: "Thank you!",
            h2: "Now You have Received Your Quotation on Email",
            h3: "Our Sales Team will contact you ASAP",
            downloadBtn: "Download Quotation",
            share: " Share Quotation on WhatsApp",
          },
        },
      },
      ar: {
        translation: {
            mainBtn:{
                next:"التالي",
                back:"رجوع",
                submit:"حفظ"

            },
          header: {
            step1: "عام",
            step2: "الخدمات",
            step3: "التخصيصات",
            step4: "المبادئ التوجيهية العامة والحقوق",
            step5: "الملخص",
          },
          firstStep: {
            title: "معلومات عامة",
            eventType: "نوع الحدث ",
            dateInput1: "فعالية لتواريخ متعددة",
            dateInput2: "فعالية ليوم واحد",
            eventDate: "تاريخ الحدث",
          },
          secondStep: {
            title: "بيانات العميل",
            name: "الاسم",
            email: "البريد الالكتروني",
            phone: "رقم الجوال",
            namePlaceholder: "ادخل الاسم",
            emailPlaceholder: "ادخل البريد الالكتروني",
            phonePlaceholder: "ادخل رقم الجوال",
          },
          thirdStep: {
            title: "عنوان الحدث",
            country: "اختر الدولة",
            city: "اختر المدينة",
            GoogleLink: "رابط خريطة جوجل",
            location: "مكان/ حى الفعالية ",
            locationPlaceholder: "ادخل مكان / حى الفعالية",
            selectCity: "حدد المدينة",
          },

          forthStep: {
            title: "نوع العميل",
            company: "شركات",
            individual: "افراد",
            companyName: "اسم الشركة (وفقا للسجل التجارى)",
            companyNamePlaceholder: " (وفقا للسجل التجارى) ادخل اسم الشركة",
            companyCommercialName: "اسم الشركة (الاسم التجارى المتعارف به)",
            companyCommercialNamePlaceholder:
              " (الاسم التجارى المتعارف به) ادخل اسم الشركة",
            companyCr: " رقم السجل التجاري للشركه",
            companyCrPlaceholder: " ادخل رقم السجل التجاري للشركه",
            vat: "الرقم الضريبي للشركه",
            vatPlaceholder: "ادخل رقم الضريبي للشركه",
          },

          step2: {
            title: "وقت خدمة الفعالية",
            person: "شخص",
            bottle: "زجاجة",
            select: "حدد الخدمات لنطاق العمل المطلوب",
            from: "من",
            to: "الي",
          },
          step3: {
            extra: "هل تحتاج لخدمة اضافية او خدمات مخصصة وفق لطلب معين ؟",
            extraPlaceholder:
              " هدايا للشركات , جلسات خارجية, تزيين للمكان  ... الخ",
          },

          step4: {
            confrim: "نحتاج للتأكيد",
            agree: "لقد قرأت وفهمت ما ورد أعلاه",
            1: "تم حساب التكلفة وفقاً لمعطيات محددة للكمية والايام وعدد الاشخاص، السعر النهائي قابل للتغيير في حال تم تغيير الكميات او نطاق العمل النهائي. ",
            2: "مدة صلاحية عرض السعر ٥ أيام عمل، في حال تأخر التأكيد سيخضع قبول الطلب حسب تفرغ جدول الفعاليات. ",
            3: "تأكيد الطلب يكون اما برفع طلب شراء رسمي او دفع مبلغ الفاتورة ١٠٠٪. ",
            4: "بما يخص تركيب وتجهيز مكان الفعالية، للفعاليات الصغيرة الى متوسطة الحجم تكون بنفس يوم الفعالية، بينما للفعاليات الكبيرة قبل يوم من تاريخ الطلب.",
            5: "مسؤولية العميل توفير مكان مناسب للتحضير والخدمة ووفق المعايير المناسبة، اذا كانت المنطقة المخصصة خارجية في الهواء الطلق فإدارة فيفيد ايفنتس غير مسؤولة عن أي عوامل خارجية قد تؤثر في جودة الطعام والنظافة العامة.",
            6: "لأغراض التسويق، سيقوم مصور احترافي من قسم التسويق بتصوير لقطات من الفعالية لنطاق العمل والضيوف والفعالية بشكل عام، في حال عدم الرغبة بالتقاط صور لوجه الضيوف أو عرض اسم الفعالية او الشركة، ارجو اخبار فريق العمل كتابياً بذلك مسبقا وذلك قبل الفعالية بيوم او يومين عمل. عدم الرد على هذا البند يعطي فيفيد ايفنتس الموافقة بالتصوير ومشاركة المحتوى على مواقع التواصل الاجتماعي و الموقع الالكتروني.",
          },

          step5: {
            type: "نوع الفعالية ",
            name: "اسم العميل",
            email: " البريد الالكتروني",
            phone: "رقم الجوال",
            person: "شخص",
            bottle: "زجاجة",
            date: "مواعيد الفعاليات والخدمات",
            extra: "خدمات إضافية أو خدمات مُخصصة",
            extraAnswer: "فارغ",
            Disclaimers: "توضيح وإخلاء مسؤولية",
            l1: "1- لاحظ أن هذا عرض أولي يخضع لتوفر التاريخ والتأكيد النهائي.",
            l2: "2- القائمة قابلة للتغيير حسب تاريخ الحدث.",
          },
          lastStep: {
            h1: "شكراً لك !",
            h2: "شكراً لك !لقد تلقيت عرض السعر على بريدك الالكتروني ",
            h3: "سيتواصل معك فريق المبيعات بأقرب وقت ممكن لمتابعة طلبك",
            downloadBtn: " تحميل عرض السعر",
            share: "شارك على الواتساب",
          },
        },
      },
    },
  });
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem(LANG_KEY, lng);
  });

export default i18n;
