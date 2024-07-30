import * as React from "react";
import { QAIEmail } from "../../interfaces/form";

interface EmailTemplateProps {
  input: QAIEmail;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  input,
}) => (
  <div dir="rtl">
    <h1>حياكم الله في موقع مستقبلي 🙋🏻</h1>
    <h2>تم الإجابة عن تساؤلكم حول، {input.question}</h2>
    <h3>الإجابة: {input.answer}</h3>
    <p>لمزيد من المعلومات:</p>
    <a href="https://www.mostaqbli.co/">الموقع الإلكتروني</a>
  </div>
);
