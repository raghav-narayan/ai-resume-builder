import React, { useState } from "react";
import PersonalDetails from "./forms/PersonalDetails";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "./ThemeColor";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnableNext] = useState(true);
  const {resumeId} = useParams()
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-5">
          <Link to={'/dashboard'}>
          <Button><Home/></Button> 
          </Link>
            <ThemeColor/>        
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size={"sm"}
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            className="flex gap-2"
            size="sm"
            disabled={!enabledNext}
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Conditional Form Section Rendering */}
      {activeFormIndex === 1 ? (
        <PersonalDetails enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 2 ? (
        <Summary enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 3 ? (
        <Experience enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 4 ? (
        <Education />
      ) : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <Navigate to={'/my-resume/'+resumeId+'/view'} />
      ) : null}
    </div>
  );
}

export default FormSection;
