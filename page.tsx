import Link from "next/link";
import {
  CalendarCheck, ShieldCheck, BellRing, Building2, ArrowLeft,
  Clock3, Users, Stethoscope, CheckCircle2
} from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "حجز مواعيد منظم", text: "إرسال طلب زيارة مع اختيار العيادة والتاريخ والوقت المقترح." },
  { icon: BellRing, title: "متابعة حالة الطلب", text: "حالات واضحة للطلب مع تحديثات داخل المنصة عند اتخاذ القرار." },
  { icon: ShieldCheck, title: "صلاحيات حسب الدور", text: "فصل تجربة المندوب عن الطبيب والسكرتير والإدارة." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white">
            <Stethoscope size={23} />
          </span>
          <span>
            <span className="block text-xl font-extrabold text-slate-900">MediBook</span>
            <span className="block text-xs text-slate-500">إدارة الزيارات الطبية</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-white">تسجيل الدخول</Link>
          <Link href="/signup" className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-800">إنشاء حساب</Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            تنظيم أسهل للتواصل المهني
          </div>
          <h1 className="max-w-2xl text-4xl leading-[1.35] font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            زيارات طبية أكثر تنظيماً،
            <span className="text-blue-700"> ووقت أوضح للجميع.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            منصة واحدة تساعد المندوبين الطبيين والعيادات على تنسيق طلبات الزيارة،
            إدارة المواعيد، ومتابعة القرارات من الهاتف أو الحاسوب.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-900/10 hover:bg-blue-800">
              ابدأ الآن <ArrowLeft size={18} />
            </Link>
            <Link href="/login" className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-bold text-slate-700 hover:border-blue-200">
              لدي حساب بالفعل
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-600" /> واجهة عربية RTL</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-600" /> متوافق مع الهاتف</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-600" /> صلاحيات منفصلة</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-50 blur-xl" />
          <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-slate-300/50 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">لوحة العيادة</p>
                <h2 className="mt-1 text-2xl font-extrabold">نظرة عامة</h2>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700"><CalendarCheck size={23}/></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[["طلبات جديدة","08","bg-blue-50 text-blue-800"],["مواعيد اليوم","12","bg-emerald-50 text-emerald-800"],["بانتظار الرد","04","bg-amber-50 text-amber-800"]].map(([label,value,style]) => (
                <div key={label} className={`rounded-2xl p-3 sm:p-4 ${style}`}>
                  <p className="text-xs leading-5 opacity-80">{label}</p>
                  <p className="mt-2 text-2xl font-black">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <h3 className="font-bold">طلبات حديثة</h3>
              <span className="text-xs text-slate-400">معاينة توضيحية</span>
            </div>
            <div className="mt-3 space-y-3">
              {[
                ["أحمد محمد","شركة النور الدوائية","10:00 ص","بانتظار الرد","bg-amber-50 text-amber-700"],
                ["عمر خالد","مكتب الرافدين العلمي","11:30 ص","تم القبول","bg-emerald-50 text-emerald-700"],
                ["مصطفى علي","شركة الحياة","12:00 م","وقت بديل","bg-blue-50 text-blue-700"],
              ].map(([name,company,time,status,style]) => (
                <div key={name} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-600">{name.charAt(0)}</div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{name}</p>
                    <p className="truncate text-xs text-slate-500">{company}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500">{time}</p>
                    <span className={`mt-1 inline-block rounded-full px-2 py-1 text-[10px] ${style}`}>{status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              <Clock3 size={17} className="text-blue-700"/> كل المواعيد في مكان واحد
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold text-blue-700">مصممة لسير العمل اليومي</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">كل طرف يعرف خطوته التالية</h2>
            <p className="mt-4 leading-7 text-slate-600">تجربة عملية تقلل الرسائل المتفرقة وتوضح حالة كل طلب.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map(({icon: Icon,title,text}) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800"><Icon size={23}/></div>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} MediBook</span>
        <span className="flex items-center gap-2"><Building2 size={16}/> منصة تنظيم المواعيد المهنية</span>
      </footer>
    </main>
  );
}
