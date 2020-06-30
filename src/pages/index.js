import React from "react"
import { graphql } from "gatsby"
// import Gthis.Editor from 'grapesjs-react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import Layout from '../components/layout'
import "grapesjs-blocks-basic";
import './index.css'
// import { BuilderComponent } from '@builder.io/react';

export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.btnTapped = this.btnTapped.bind(this);
  }

  editor = null;
  html = () => {
    return (<div>
      <br></br><a id='h1qert' href="http://google.com">Link</a>
    </div>)
  }

  btnTapped = () => {
    this.editor = grapesjs.init({
      container: '#gjs',
      height: '400px',
      storageManager: { type: 'none' },
      plugins: ['gjs-blocks-basic'],
      allowScripts: 1,
      components: html,
      // panels: {
      //   defaults: []
      // },
      blockManager: {
        appendTo: '#blocks'
      },
      // styleManager: {
      //   sectors: [{
      //     name: 'Dimension',
      //     buildProps: ['height', 'min-height', 'width', 'min-height']
      //   }, {
      //     name: 'Extra',
      //     buildProps: ['background-color', 'box-shadow']
      //   }]
      // }
    })
    // this.editor.setStyle(`
    //   .gjs-four-color{color: red;}
    //   .gjs-two-color{color: blue;}
    //   .gjs-one-bg{background-color: blue;}
    // `);

    let blockManager = this.editor.BlockManager
    blockManager.add('my-first-block', {
      label: '2 Columns',
      content: '<div class="my-block" id="h1qert">This is a simple block</div>'
      // content: html
    });
  }

  editCustomBlock = () => {
    this.editor.BlockManager.get('my-first-block').set({
      label: '2 Columns',
      content: html
    })
    const modal = this.editor.Modal;
    modal.open({
      title: 'TItle',
      content: '<div>abd</div>'
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.btnTapped}>Only Editor</button>
        <button onClick={this.editCustomBlock}>Edit Block</button>
        <div id='gjs'></div>
        <Layout>
          <h1 id='h1qert'>qwert</h1>
          <div id={'blocks'}></div>
        </Layout>
      </div>
    );
  }
}

// export const query = graphql`
//   query {
//     allBuilderModels {
//       # (optional) example custom "header" component model, if you have one
//       header(limit: 1, options: { cachebust: true }) {
//         content
//       }
//       # Manually grab the page content matching "/example"
//       # For Gatsby content, we want to make sure to always get fresh (cachebusted) content
//       page(limit: 1, options: { cachebust: true }) {
//         content
//       }
//     }
//   }
// `;

const html = `

<style>
h1 {color:red;}
p {color:blue;}
.gjs-four-color {color: red;}
.gjs-two-color {color: blue;}
.gjs-one-bg {background-color: blue;}
</style>
<p>Display some text when the checkbox is checked:</p>

<label for="myCheck">Checkbox:</label> 
<input type="checkbox" id="myCheck" onclick="myFunction()">

<p id="text" style="display:none">Checkbox is CHECKED!</p>


<h1>This is a heading</h1>
<p>This is a paragraph.</p>

<script>
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
</script>

`