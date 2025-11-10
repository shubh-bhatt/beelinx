import {
  Mail,
  Phone,
  Building2,
  Users,
  Headphones,
  Newspaper,
  MessageSquare,
} from "lucide-react";

const CustomerDirectContact = () => {
  const contactCards = [
    {
      icon: Building2,
      title: "Sales",
      email: "sales@yourdomain.com",
      phone: "+1 (555) 123-4567",
      cta: "Talk to Sales",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "Support",
      email: "support@yourdomain.com",
      link: "Open Ticket",
      cta: "Get Support",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Partnerships",
      email: "partners@yourdomain.com",
      cta: "Partner With Us",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Newspaper,
      title: "Press / Media",
      email: "press@yourdomain.com",
      cta: "Media Inquiries",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <>
      {/* Direct Contact Options */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Direct Contact Options
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Choose the department that best fits your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-slate-200 group hover:scale-105 transform duration-300"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${card.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <card.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <a
                    href={`mailto:${card.email}`}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    {card.email}
                  </a>
                  {card.phone && (
                    <a
                      href={`tel:${card.phone}`}
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      {card.phone}
                    </a>
                  )}
                  {card.link && (
                    <a
                      href="#"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {card.link}
                    </a>
                  )}
                </div>

                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg font-medium transition">
                  {card.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerDirectContact;
