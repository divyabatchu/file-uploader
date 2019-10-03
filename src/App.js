import React from 'react';
//import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Upload1 from './Upload1.js';
//import "react-pdf/dist/Page/AnnotationLayer.css";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);


class App extends React.Component{
  render(){
  return (
    <div className="App">
     <header className="App-header">
  
   <h1 className="App-title">Welcome to React</h1>
  </header>
  
  <FilePond allowMultiple={true}/>
  <Upload1/>
    </div>
  
  );
}
}

export default App;
