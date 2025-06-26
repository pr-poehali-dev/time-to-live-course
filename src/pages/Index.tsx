import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CourseProgram from "@/components/CourseProgram";
import Pricing from "@/components/Pricing";
import Registration from "@/components/Registration";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <CourseProgram />
      <Pricing />
      <Registration />
    </div>
  );
};

export default Index;
