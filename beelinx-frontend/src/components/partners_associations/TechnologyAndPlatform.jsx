import aws from '/logos/amazonwebservices-original-wordmark.svg'
import Azure from '/logos/azure-original.svg'
import Google from '/logos/googlecloud.png'
import zoho from '/logos/zoho-logos.svg'
import sap from '/logos/sap.png'
import tally from '/logos/tallylogo.png'


const TechnologyAndPlatform = () => {
 
  return (
   <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology & Platform Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powered by world-class technology infrastructure
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-6">
          {/* Aws */}
            <div  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div >
                <img src={aws} height={50} width={50} className={`inline-flex p-2 rounded-lg  mb-4`} alt="aws_logo" />
  
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AWS</h3>
              <p className="text-gray-600 text-sm">Cloud infrastructure & scaling</p>
            </div>
            {/* azure */}
             <div  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <img src={Azure} height={50} width={50} className={`inline-flex p-2 rounded-lg  mb-4`} />
               
          
              <h3 className="font-bold text-gray-900 mb-2">Microsoft Azure</h3>
              <p className="text-gray-600 text-sm">Enterprise cloud solutions</p>
            </div>
            {/* google cloud */}
            <div  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <img src={Google} className={`inline-flex p-2 rounded-lg  mb-4`} height={50} width={50}>
               
              </img>
              <h3 className="font-bold text-gray-900 mb-2">Google Cloud</h3>
              <p className="text-gray-600 text-sm">Data analytics & AI</p>
            </div>
          {/* Zoho */}
          <div  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <img height={60} width={60} className={`inline-flex p-2 rounded-lg  mb-4`} src={zoho}/>
               
            
              <h3 className="font-bold text-gray-900 mb-2">Zoho</h3>
              <p className="text-gray-600 text-sm">CRM & ERP integrations</p>
            </div>
            {/* Tally */}
            <div  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <img  src={tally} height={60} width={60} className={`inline-flex p-2 rounded-lg  mb-4`}/>
               
           
              <h3 className="font-bold text-gray-900 mb-2">Tally</h3>
              <p className="text-gray-600 text-sm">ccounting software partner</p>
            </div>
            {/* SAP */}
                <div  className="bg-gray-50 rounded-xl p-5  hover:shadow-lg transition-all">
              <img  src={sap} height={50} width={50} className="inline-flex object-contain p-2  rounded-lg  mb-4"/>
               
           
              <h3 className="font-bold text-gray-900 mb-2 ">SAP</h3>
              <p className="text-gray-600 text-sm">Enterprise resource planning</p>
            </div>     
        </div>  
       













      </div>
    </section>
  );
};

// Industry Bodies Section
const IndustryBodies = () => {
  const bodies = ['NASSCOM', 'DLAI', 'FACE', 'FICCI', 'CII', 'IAMAI'];

  return (
    <section className="py-20 px-6 bg-emerald-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Bodies & Associations</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Active members of India's leading fintech and technology councils
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {bodies.map((body, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-bold text-gray-800">{body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyAndPlatform