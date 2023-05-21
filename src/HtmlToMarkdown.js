import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/base';
import Button from '@mui/base/Button';

const HTMLToMarkdownConverter = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');

  const convertHTMLToMarkdown = async () => {
    try {
      const response = await fetch('https://mham7.pythonanywhere.com//convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: htmlContent }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
  
      const data = await response.json();
      setMarkdownContent(data.markdown);
      setHtmlContent(data.markdown);
      window.alert("HTML converted to Markdown");
    } catch (error) {
      console.error(error);
      window.alert("HTML to Markdown conversion failed");
    }
  };
  
  return (
    <div>
      <TextareaAutosize

        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
        style={{ margin: '0 auto', display: 'block' }}

      />
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button
      variant="outlined"
      color="secondary"
      onClick={convertHTMLToMarkdown}
      style={{ 
        backgroundColor: '#89CFF0',
        color: '#FFFFFF',
        fontSize: '18px',
        borderRadius: '20px',
        padding: '10px 20px',
        boxShadow: 'none',
        width:'250px',
        
        }}>
            Convert
            </Button>
      <br/>
      <br/>
      </div>
    </div>
  );
};

export default HTMLToMarkdownConverter;
