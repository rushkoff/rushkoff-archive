import{r as l,j as n,a as M,b as o,F as N,A as S,X as C,R as E,l as R,u as k,c as s,s as L,p as z,i as D}from"./index-23a81fc9.js";function V(e,t){const[a,d]=l.useState(e);return l.useEffect(()=>{const u=setTimeout(()=>{d(e)},t);return()=>{clearTimeout(u)}},[e,t]),a}function $(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}))}const j=l.forwardRef($),p=j,b=e=>({message:e.message,position:e.position&&{endColumn:e.position.end.column,startColumn:e.position.start.column,startLineNumber:e.position.start.line,endLineNumber:e.position.end.line}}),O=e=>{if(!e)return"";const t=b(e);return t?`${t.message}${t.position?` at line: ${t.position.startLineNumber}, column: ${t.position.startColumn}`:""}`:null};function F({error:e}){const t=O(e);return n(M,{className:"relative",children:()=>o(N,{children:[o(S,{className:`p-2 shaodw-lg border ${e?"":" opacity-0 hidden "}`,children:[n("span",{className:"sr-only",children:"Errors"}),n(p,{className:"h-5 w-5 text-red-400","aria-hidden":"true"})]}),n(C,{enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:n(E,{className:"absolute top-8 w-[300px] -right-3 z-10 mt-3 px-4 sm:px-0",children:n("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:n("div",{className:"rounded-md bg-red-50 p-4 overflow-scroll",children:o("div",{className:"flex",children:[n("div",{className:"flex-shrink-0",children:n(p,{className:"h-5 w-5 text-red-400","aria-hidden":"true"})}),n("div",{className:"ml-3",children:n("h3",{className:"text-sm font-medium text-red-800 whitespace-pre-wrap",children:t})})]})})})})})]})})}const X=()=>("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16));R.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.31.1/min/vs"}});const H=e=>{const t=k(),a=s.useRef(null),[d,u]=s.useState(100),m=s.useMemo(()=>X(),[]),g=e.field,y=s.useMemo(()=>{const r=L(e.input.value,g,i=>i);return typeof e.input.value=="string"?e.input.value:r},[]),[f,w]=s.useState(y),[c,h]=s.useState(null),v=V(f,500);s.useEffect(()=>{const r=z(f,g,i=>i);if(r.children[0]&&r.children[0].type==="invalid_markdown"){const i=r.children[0];h(i)}else h(null);e.input.onChange(r)},[JSON.stringify(v)]),s.useEffect(()=>{if(a.current)if(c){const r=b(c);t.editor.setModelMarkers(a.current.getModel(),m,[{...r.position,message:r.message,severity:8}])}else t.editor.setModelMarkers(a.current.getModel(),m,[])},[JSON.stringify(c),a.current]),s.useEffect(()=>{t&&(t.languages.typescript.typescriptDefaults.setEagerModelSync(!0),t.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}))},[t]);function x(r,i){a.current=r,r.onDidContentSizeChange(()=>{u(Math.min(Math.max(100,r.getContentHeight()),1e3)),r.layout()})}return o("div",{className:"relative",children:[o("div",{className:"sticky top-1 w-full flex justify-between mb-2 z-50 max-w-full bg-white",children:[n(T,{onClick:()=>e.setRawMode(!1),children:"View in rich-text editor 📝"}),n(F,{error:c})]}),n("div",{style:{height:`${d}px`},children:n(D,{path:m,onMount:x,options:{scrollBeyondLastLine:!1,tabSize:2,disableLayerHinting:!0,accessibilitySupport:"off",codeLens:!1,wordWrap:"on",minimap:{enabled:!1},fontSize:14,lineHeight:2,formatOnPaste:!0,lineNumbers:"on",lineNumbersMinChars:2,formatOnType:!0,fixedOverflowWidgets:!0,folding:!1,renderLineHighlight:"none",scrollbar:{verticalScrollbarSize:4,horizontalScrollbarSize:4,alwaysConsumeMouseWheel:!1}},language:"markdown",value:f,onChange:r=>{try{w(r)}catch(i){console.log("error",i)}}})})]})},T=e=>n("button",{className:`${e.align==="left"?"rounded-l-md border-r-0":"rounded-r-md border-l-0"} flex justify-center w-full shadow rounded-md bg-white cursor-pointer relative inline-flex items-center px-2 py-2 border border-gray-200 hover:text-white text-sm font-medium transition-all ease-out duration-150 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500`,type:"button",onClick:e.onClick,children:n("span",{className:"text-sm font-semibold tracking-wide align-baseline mr-1",children:e.children})}),B=H;export{B as default};
