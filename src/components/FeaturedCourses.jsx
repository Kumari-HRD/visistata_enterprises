import { StyledColoredDiv, StyledFeatureCards } from "./styled-components";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const coursesConfig = [
  {
    title: "Javascript for Beginners",
    description:
      "Master the fundamentals of JavaScript, the language of the web.",
    tagline: "Web Development",
    bannerImage: "path/to/image1.jpg",
    path: "/course-1",
  },
  {
    title: "MERN Full Stack Development",
    description:
      "Master the MERN stack (MongoDB, Express, React, Node.js) to build modern web applications.",
    tagline: "MERN Full Stack",
    bannerImage: "path/to/image1.jpg",
    path: "/course-1",
  },
  {
    title: "QA Fundamentals & Theory",
    description:
      "Learn the core principles of software quality assurance and testing.",
    tagline: "Web Development",
    bannerImage: "path/to/image1.jpg",
    path: "/course-1",
  },
  {
    title: "QA Fundamentals & Theory",
    description:
      "Learn the core principles of software quality assurance and testing.",
    tagline: "Web Development",
    bannerImage: "path/to/image1.jpg",
    path: "/course-1",
  },
];

const header = (imageUrl) => (
  <img
    alt="Card Banner"
    src={"https://primefaces.org/cdn/primereact/images/usercard.png"}
  />
);

const footer = (
  <>
    <Button label="Save" icon="pi pi-check" />
    <Button
      label="Cancel"
      severity="secondary"
      icon="pi pi-times"
      style={{ marginLeft: "0.5em" }}
    />
  </>
);

const FeaturedCourses = () => {
  return (
    <>
      <div className="md:py-6 sm:py-2 w-12">
        <p className="text-5xl font-bold text-center space-grotesk">
          {" "}
          Featured Courses
        </p>
        <p className="text-lg font-medium text-center">
          Get started with our most popular courses and kickstart your journey
          in tech.
        </p>
        <div className="grid col-10 m-auto">
          {coursesConfig.map((course) => (
            <div key={course.id} className="lg:col-3 md:col-6 sm:col-12">
              <StyledFeatureCards
                title={course.title}
                subTitle={course.description}
                // footer={footer}
                header={header(course.bannerImage)}
                className="mx-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
