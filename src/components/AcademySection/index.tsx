import React from "react";

interface Lesson {
  title: string;
  subtitle: string;
}

interface AcademySectionProps {
  lessons: Lesson[];
  buttonColor: string;
  sectionTitle: string;
}

const AcademySection: React.FC<AcademySectionProps> = ({
  lessons,
  buttonColor,
  sectionTitle,
}) => {
  return (
    <>
      <h2 className="w-full text-start text-2xl font-bold text-white my-6">
        {sectionTitle}
      </h2>
      <div className="flex flex-wrap justify-between items-center gap-5">
        {lessons.map((lesson, index) => {
          const [numberPart, titlePart] = lesson.title.split(". ");
          return (
            <div
              key={index}
              className="bg-black text-white py-5 pl-5 pr-12 rounded-[20px] w-full lg:w-[49%] h-[320px] flex flex-col items-start justify-center border-2 border-[#F4F4F4]"
            >
              <div className="text-[30px] font-semibold mb-2 font-[Poppins] text-[#C6C6C6]">
                {numberPart}.
              </div>
              <div
                className="px-2 text-center rounded-full text-[16px] font-medium mb-2 font-[Poppins]"
                style={{ backgroundColor: buttonColor }}
              >
                {titlePart}
              </div>
              <div className="font-[Poppins] text-[25px] font-semibold mb-4">
                {lesson.subtitle}
              </div>
              <p className="text-white py-2 px-4 font-[Poppins] text-[14px] cursor-pointer">
                Check lesson &gt;
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AcademySection;
