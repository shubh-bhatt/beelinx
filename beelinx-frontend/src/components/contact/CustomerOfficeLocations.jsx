import { Phone, MapPin, Clock } from "lucide-react";

const CustomerOfficeLocations = () => {
  const offices = [
    {
      name: "Headquarters",
      city: "San Francisco",
      country: "United States",
      address: "123 Innovation Drive, Suite 500",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    },
    {
      name: "European Office",
      city: "London",
      country: "United Kingdom",
      address: "45 Tech Square, Floor 3",
      phone: "+44 20 1234 5678",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
    },
    {
      name: "Asia Pacific Office",
      city: "Singapore",
      country: "Singapore",
      address: "78 Innovation Hub, Level 12",
      phone: "+65 1234 5678",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
    },
  ];

  return (
    <>
      {/* Office Locations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Our Offices
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Visit us at one of our global locations
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {office.name}
                    </h3>
                    <p className="text-slate-600">
                      {office.city}, {office.country}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 shrink-0" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0" />
                    {office.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerOfficeLocations;
