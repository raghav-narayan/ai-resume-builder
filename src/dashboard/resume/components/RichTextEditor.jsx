import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react';
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar
} from 'react-simple-wysiwyg';
import { AIChatSession } from './../../../../service/AIModel';
import { toast } from 'sonner';

const PROMPT = 'position title: {positionTitle}, give 5-7 bullet points for resume, return only <ul><li> HTML content.';

function RichTextEditor({ onRichTextEditorChange, index, value }) {
  const { resumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const GenerateSummaryFromAI = async () => {
    if (!resumeInfo?.experience?.[index]?.title) {
      toast('Please Add Position Title');
      return;
    }

    setLoading(true);
    try {
      const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);
      const result = await AIChatSession.sendMessage(prompt);
      const resp = await result.response.text();

      const cleaned = resp.replace(/^\[|\]$/g, '').trim(); // remove [ ] if present
      onRichTextEditorChange({ target: { value: cleaned } }); // 👈 update parent
    } catch (err) {
      toast.error('Failed to generate summary');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummaryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : <><Brain className="h-4 w-4" /> Generate from AI</>}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => onRichTextEditorChange(e)}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
