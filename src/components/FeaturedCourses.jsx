import { StyledColoredDiv, StyledFeatureCards } from "./styled-components";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const coursesConfig = [
  {
    title: "JavaScript Essentials",
    description:
      "Kickstart your web development journey by mastering JavaScript, the backbone of modern websites.",
    tagline: "Web Development",
    bannerImage: "src/assets/javascript.png",
    path: "/course-1",
  },
  {
    title: "MERN Stack Mastery",
    description:
      "Become a full-stack web developer by building dynamic apps with MongoDB, Express, React, and Node.js.",
    tagline: "Full Stack Development",
    bannerImage: "src/assets/mern.png",
    path: "/course-2",
  },
  {
    title: "Python Programming",
    description:
      "Unlock the power of Python to build applications, automate tasks, and solve real-world problems.",
    tagline: "Python Development",
    bannerImage: "src/assets/python.png",
    path: "/course-3",
  },
  {
    title: "QA Fundamentals & Testing",
    description:
      "Learn essential QA concepts and testing techniques to ensure high-quality software delivery.",
    tagline: "Software Testing",
    bannerImage: "src/assets/testing.png",
    path: "/course-4",
  },
];

const header = (imageUrl) => <img alt="Card Banner" src={imageUrl} />;

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
            <div key={course.id} className="lg:col-3 md:col-6 sm:col-12 mt-3 ">
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
