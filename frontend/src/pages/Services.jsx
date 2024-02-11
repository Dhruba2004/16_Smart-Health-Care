import ServiceList from "../components/Services/ServiceList";
import Layout from "../components/layout/Layout";

const Services = () => {
  return (
    <Layout>
      <section>
        <div className="container p-6 flex justify-center items-center flex-col">
          <div>
            <h2 className="heading text-center text-[32px] font-bold">Our medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health system offers
              unmatched,expert health care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
