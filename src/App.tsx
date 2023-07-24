import {useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

import './App.css'
import axios from 'axios';
import { Content } from './component/content';

function App() {
  const [value, setValue] = useState<string | undefined>("**Hello world!!!**");

  const sendFile = async () => {
    console.log(JSON.stringify({content:value}));

    // const response = await fetch('http://localhost:3000/content');
   const response = await axios.post('http://localhost:3000/content',{content:value});

    console.log(response)

  }

return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        preview='edit'
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      <button onClick={sendFile}>SAVE</button>
      <Content/>
    </div>
  );
}

export default App
