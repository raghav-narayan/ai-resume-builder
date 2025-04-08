import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React,{useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import { toast } from "sonner";

function Education() {
  const [loading, setLoading] = useState(false)
  const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)
  const params = useParams()
  const [educationalList, setEducationalList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  useEffect(() => {
    resumeInfo && setEducationalList(resumeInfo?.education)
  },[])

  const handleChange = (event, index) => {
    const newEntries = educationalList.slice()
    const {name,value} = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries)
  }

  const addNewEducation = () => {
    setEducationalList([...educationalList,{
      universtyName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    }])
  }

  const removeEducation = () => {
    setEducationalList((prev) => prev.slice(0, -1));
  }

  const onSave = () => {
    setLoading(true)
    const data = {
      data:{education:educationalList}
    }

    GlobalApi.UpdateResumeDetail(params.resumeId,data).then(resp => {
      console.log(resp)
      setLoading(false)
      toast('Details Updated')
    }, (error) => {
      setLoading(false)
      toast('Server Error, Please try again')
    } )
  }
  useEffect(() => {
    setResumeInfo({...resumeInfo,
      education: educationalList
  })
  }, [educationalList])

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add your educational background</p>

      <div>
        {educationalList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
              <div className="col-span-2">
                <label htmlFor="">University Name</label>
                <Input name="universityName" onChange = {(e) => handleChange(e,index)}
                 defaultValue = {item?.universityName}/>
              </div>
              <div>
                <label htmlFor="">Degree</label>
                <Input name="degree" onChange = {(e) => handleChange(e,index)} defaultValue = {item?.universityName}/>
              </div>
              <div>
                <label htmlFor="">Major</label>
                <Input name="major" onChange = {(e) => handleChange(e,index)} defaultValue = {item?.major} />
              </div>
              <div>
                <label htmlFor="">Start Date</label>
                <Input name="startDate" type="date" onChange = {(e) => handleChange(e,index)}  defaultValue = {item?.startDate}/>
              </div>
              <div>
                <label htmlFor="">End Date</label>
                <Input name="endDate" type="date" onChange = {(e) => handleChange(e,index)} defaultValue = {item?.endDate}/>
              </div>
              <div className="col-span-2">
                <label htmlFor="">Description</label>
                <Textarea name="description" onChange = {(e) => handleChange(e,index)} defaultValue = {item?.description}/>
              </div>
            </div>

            <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={addNewEducation}
            className="text-primary"
          >
            + Add More Education
          </Button>
          <Button
            variant="outline"
            onClick={removeEducation}
            className="text-primary"
          >
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={onSave}>
          {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
        </Button>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
