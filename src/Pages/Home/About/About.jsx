import parson from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-[700px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={parson} className="w-3/4 h-[450px] rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 h-[300px] absolute right-3 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 mx-3">
          <h3 className="text-2xl text-red-600 font-semibold pb-8">About us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.
          </p>
          <br />
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which donot look even slightly
            believable.{" "}
          </p>
          <div className="pt-7">
            <button className="btn btn-error text-white ">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
