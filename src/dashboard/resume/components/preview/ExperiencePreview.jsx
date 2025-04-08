import React from "react";

function ExperiencePreview({ resumeInfo }) {
  // console.log(resumeInfo)
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>

      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2 className="font-bold text-sm">{experience?.title}</h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span className="ml-2 text-gray-600 text-xs">
              ({experience?.startDate} TO {" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate})
            </span>
          </h2>
          {/* <p className="text-xs my-2">
            {experience.workSummery}
          </p> */}
          <div dangerouslySetInnerHTML={{__html:experience?.workSummery}}/>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
