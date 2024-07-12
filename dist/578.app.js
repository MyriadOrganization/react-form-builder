"use strict";(self.webpackChunkReactFormBuilder=self.webpackChunkReactFormBuilder||[]).push([[578],{7578:(e,t,l)=>{l.r(t),l.d(t,{default:()=>g});var a=l(5671),n=l(3144),o=l(136),s=l(2963),r=l(1120),i=l(359),c=l.n(i),m=l(7453),p=l(9041),d=l(9265),h=l.n(d),u=l(5108),E=l(9333),v=l.n(E),f=l(4152);var b=function(e){(0,o.Z)(m,e);var t,l,i=(t=m,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,r.Z)(t);if(l){var n=(0,r.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;return(0,a.Z)(this,m),(t=i.call(this,e)).state={element:t.props.element,data:t.props.data,dirty:!1},t}return(0,n.Z)(m,[{key:"_setValue",value:function(e){return e.replace(/[^A-Z0-9]+/gi,"_").toLowerCase()}},{key:"editOption",value:function(e,t){var l=this.state.element,a=l.options[e].value!==this._setValue(l.options[e].text)?l.options[e].value:this._setValue(t.target.value);l.options[e].text=t.target.value,l.options[e].value=a,this.setState({element:l,dirty:!0})}},{key:"editValue",value:function(e,t){var l=this.state.element,a=""===t.target.value?this._setValue(l.options[e].text):t.target.value;l.options[e].value=a,this.setState({element:l,dirty:!0})}},{key:"editOptionCorrect",value:function(e,t){var l=this.state.element;l.options[e].hasOwnProperty("correct")?delete l.options[e].correct:l.options[e].correct=!0,this.setState({element:l}),this.props.updateElement.call(this.props.preview,l)}},{key:"updateOption",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"addOption",value:function(e){var t=this.state.element;t.options.splice(e+1,0,{value:"",text:"",key:v().uuid()}),this.props.updateElement.call(this.props.preview,t)}},{key:"removeOption",value:function(e){var t=this.state.element;t.options.splice(e,1),this.props.updateElement.call(this.props.preview,t)}},{key:"render",value:function(){var e=this;return this.state.dirty&&(this.state.element.dirty=!0),c().createElement("div",{className:"dynamic-option-list"},c().createElement("ul",null,c().createElement("li",null,c().createElement("div",{className:"row"},c().createElement("div",{className:"col-sm-6"},c().createElement("b",null,c().createElement(f.Z,{id:"options"}))),this.props.canHaveOptionValue&&c().createElement("div",{className:"col-sm-2"},c().createElement("b",null,c().createElement(f.Z,{id:"value"}))),this.props.canHaveOptionValue&&this.props.canHaveOptionCorrect&&c().createElement("div",{className:"col-sm-4"},c().createElement("b",null,c().createElement(f.Z,{id:"correct"}))))),this.props.element.options.map((function(t,l){var a="edit_".concat(t.key),n=t.value!==e._setValue(t.text)?t.value:"";return c().createElement("li",{className:"clearfix",key:a},c().createElement("div",{className:"row"},c().createElement("div",{className:"col-sm-6"},c().createElement("input",{tabIndex:l+1,className:"form-control",style:{width:"100%"},type:"text",name:"text_".concat(l),placeholder:"Option text",value:t.text,onBlur:e.updateOption.bind(e),onChange:e.editOption.bind(e,l)})),e.props.canHaveOptionValue&&c().createElement("div",{className:"col-sm-2"},c().createElement("input",{className:"form-control",type:"text",name:"value_".concat(l),value:n,onChange:e.editValue.bind(e,l)})),e.props.canHaveOptionValue&&e.props.canHaveOptionCorrect&&c().createElement("div",{className:"col-sm-1"},c().createElement("input",{className:"form-control",type:"checkbox",value:"1",onChange:e.editOptionCorrect.bind(e,l),checked:t.hasOwnProperty("correct")})),c().createElement("div",{className:"col-sm-3"},c().createElement("div",{className:"dynamic-options-actions-buttons"},c().createElement("button",{onClick:e.addOption.bind(e,l),className:"btn btn-success"},c().createElement("i",{className:"fas fa-plus-circle"})),l>0&&c().createElement("button",{onClick:e.removeOption.bind(e,l),className:"btn btn-danger"},c().createElement("i",{className:"fas fa-minus-circle"}))))))}))))}}]),m}(c().Component),y=l(2083);var N={options:["inline","list","textAlign","fontSize","link","history"],inline:{inDropdown:!1,className:void 0,options:["bold","italic","underline","superscript","subscript"]}},g=function(e){(0,o.Z)(d,e);var t,l,i=(t=d,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,r.Z)(t);if(l){var n=(0,r.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),(t=i.call(this,e)).state={element:t.props.element,data:t.props.data,dirty:!1},t}return(0,n.Z)(d,[{key:"toggleRequired",value:function(){}},{key:"editElementProp",value:function(e,t,l){var a=this,n=this.state.element;n[e]=l.target[t],this.setState({element:n,dirty:!0},(function(){"checked"===t&&a.updateElement()}))}},{key:"onEditorStateChange",value:function(e,t,l){var a=h()((0,p.convertToRaw)(l.getCurrentContent())).replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/&nbsp;/g," ").replace(/(?:\r\n|\r|\n)/g," "),n=this.state.element;n[t]=a,this.setState({element:n,dirty:!0})}},{key:"updateElement",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"convertFromHTML",value:function(e){var t=(0,p.convertFromHTML)(e);if(!t.contentBlocks||!t.contentBlocks.length)return p.EditorState.createEmpty();var l=p.ContentState.createFromBlockArray(t);return p.EditorState.createWithContent(l)}},{key:"addOptions",value:function(){var e=this,t=document.getElementById("optionsApiUrl").value;t&&(0,y.U)(t).then((function(t){e.props.element.options=[];var l=e.props.element.options;t.forEach((function(e){e.key=v().uuid(),l.push(e)}));var a=e.state.element;e.setState({element:a,dirty:!0})}))}},{key:"render",value:function(){this.state.dirty&&(this.props.element.dirty=!0);var e,t=!!this.props.element.hasOwnProperty("required")&&this.props.element.required,l=!!this.props.element.hasOwnProperty("readOnly")&&this.props.element.readOnly,a=!!this.props.element.hasOwnProperty("defaultToday")&&this.props.element.defaultToday,n=!!this.props.element.hasOwnProperty("showTimeSelect")&&this.props.element.showTimeSelect,o=!!this.props.element.hasOwnProperty("showTimeSelectOnly")&&this.props.element.showTimeSelectOnly,s=!!this.props.element.hasOwnProperty("showTimeInput")&&this.props.element.showTimeInput,r=!!this.props.element.hasOwnProperty("inline")&&this.props.element.inline,i=!!this.props.element.hasOwnProperty("bold")&&this.props.element.bold,p=!!this.props.element.hasOwnProperty("italic")&&this.props.element.italic,d=!!this.props.element.hasOwnProperty("center")&&this.props.element.center,h=!!this.props.element.hasOwnProperty("pageBreakBefore")&&this.props.element.pageBreakBefore,E=!!this.props.element.hasOwnProperty("alternateForm")&&this.props.element.alternateForm,v=this.props.element,y=v.canHavePageBreakBefore,g=v.canHaveAlternateForm,k=v.canHaveDisplayHorizontal,w=v.canHaveOptionCorrect,x=v.canHaveOptionValue,P="Image"===this.state.element.element||"Camera"===this.state.element.element,O=this.props.files.length?this.props.files:[];return(O.length<1||O.length>0&&""!==O[0].id)&&O.unshift({id:"",file_name:""}),this.props.element.hasOwnProperty("content")&&(e=this.convertFromHTML(this.props.element.content)),this.props.element.hasOwnProperty("label")&&(e=this.convertFromHTML(this.props.element.label)),c().createElement("div",null,c().createElement("div",{className:"clearfix"},c().createElement("h4",{className:"float-left"},this.props.element.text),c().createElement("i",{className:"float-right fas fa-times dismiss-edit",onClick:this.props.manualEditModeOff})),this.props.element.hasOwnProperty("content")&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label"},c().createElement(f.Z,{id:"text-to-display"}),":"),c().createElement(u.Editor,{toolbar:N,defaultEditorState:e,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"content"),stripPastedStyles:!0})),this.props.element.hasOwnProperty("file_path")&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"fileSelect"},c().createElement(f.Z,{id:"choose-file"}),":"),c().createElement(Select,{id:"fileSelect",className:"form-control",defaultValue:this.props.element.file_path,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"file_path","value")},O.map((function(e){var t="file_".concat(e.id);return c().createElement("option",{value:e.id,key:t},e.file_name)})))),this.props.element.hasOwnProperty("href")&&c().createElement("div",{className:"form-group"},c().createElement(m.Z,{type:"text",className:"form-control",defaultValue:this.props.element.href,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"href","value")})),this.props.element.hasOwnProperty("label")&&c().createElement("div",{className:"form-group"},c().createElement("label",null,c().createElement(f.Z,{id:"display-label"})),c().createElement(u.Editor,{toolbar:N,defaultEditorState:e,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"label"),stripPastedStyles:!0}),c().createElement("br",null),c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"is-required",className:"custom-control-input",type:"checkbox",checked:t,value:!0,onChange:this.editElementProp.bind(this,"required","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"is-required"},c().createElement(f.Z,{id:"required"}))),this.props.element.hasOwnProperty("readOnly")&&c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"is-read-only",className:"custom-control-input",type:"checkbox",checked:l,value:!0,onChange:this.editElementProp.bind(this,"readOnly","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"is-read-only"},c().createElement(f.Z,{id:"read-only"}))),this.props.element.hasOwnProperty("defaultToday")&&c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"is-default-to-today",className:"custom-control-input",type:"checkbox",checked:a,value:!0,onChange:this.editElementProp.bind(this,"defaultToday","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"is-default-to-today"},c().createElement(f.Z,{id:"default-to-today"}),"?")),this.props.element.hasOwnProperty("showTimeSelect")&&c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"show-time-select",className:"custom-control-input",type:"checkbox",checked:n,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelect","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"show-time-select"},c().createElement(f.Z,{id:"show-time-select"}),"?")),n&&this.props.element.hasOwnProperty("showTimeSelectOnly")&&c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"show-time-select-only",className:"custom-control-input",type:"checkbox",checked:o,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelectOnly","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"show-time-select-only"},c().createElement(f.Z,{id:"show-time-select-only"}),"?")),this.props.element.hasOwnProperty("showTimeInput")&&c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"show-time-input",className:"custom-control-input",type:"checkbox",checked:s,value:!0,onChange:this.editElementProp.bind(this,"showTimeInput","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"show-time-input"},c().createElement(f.Z,{id:"show-time-input"}),"?")),("RadioButtons"===this.state.element.element||"Checkboxes"===this.state.element.element)&&k&&c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"display-horizontal",className:"custom-control-input",type:"checkbox",checked:r,value:!0,onChange:this.editElementProp.bind(this,"inline","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"display-horizontal"},c().createElement(f.Z,{id:"display-horizontal"})))),this.props.element.hasOwnProperty("src")&&c().createElement("div",null,c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"srcInput"},c().createElement(f.Z,{id:"link-to"}),":"),c().createElement("input",{id:"srcInput",type:"text",className:"form-control",defaultValue:this.props.element.src,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"src","value")}))),P&&c().createElement("div",null,c().createElement("div",{className:"form-group"},c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"do-center",className:"custom-control-input",type:"checkbox",checked:d,value:!0,onChange:this.editElementProp.bind(this,"center","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"do-center"},c().createElement(f.Z,{id:"center"}),"?"))),c().createElement("div",{className:"row"},c().createElement("div",{className:"col-sm-3"},c().createElement("label",{className:"control-label",htmlFor:"elementWidth"},c().createElement(f.Z,{id:"width"}),":"),c().createElement("input",{id:"elementWidth",type:"text",className:"form-control",defaultValue:this.props.element.width,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"width","value")})),c().createElement("div",{className:"col-sm-3"},c().createElement("label",{className:"control-label",htmlFor:"elementHeight"},c().createElement(f.Z,{id:"height"}),":"),c().createElement("input",{id:"elementHeight",type:"text",className:"form-control",defaultValue:this.props.element.height,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"height","value")})))),"FileUpload"===this.state.element.element&&c().createElement("div",null,c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"fileType"},c().createElement(f.Z,{id:"choose-file-type"}),":"),c().createElement("select",{id:"fileType",className:"form-control",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"fileType","value")},[{type:"image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",typeName:"All File Type"},{type:"image",typeName:"Image"},{type:"application/pdf",typeName:"PDF"},{type:"application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",typeName:"Word"},{type:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",typeName:"Excel"},{type:"application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",typeName:"Powerpoint"},{type:"video/mp4,video/x-m4v,video/*",typeName:"Videos"}].map((function(e,t){return c().createElement("option",{value:e.type,key:t},e.typeName)}))))),"Signature"===this.state.element.element&&this.props.element.readOnly?c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"variableKey"},c().createElement(f.Z,{id:"variable-key"}),":"),c().createElement("input",{id:"variableKey",type:"text",className:"form-control",defaultValue:this.props.element.variableKey,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"variableKey","value")}),c().createElement("p",{className:"help-block"},c().createElement(f.Z,{id:"variable-key-desc"}),".")):c().createElement("div",null),y&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label"},c().createElement(f.Z,{id:"print-options"})),c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"page-break-before-element",className:"custom-control-input",type:"checkbox",checked:h,value:!0,onChange:this.editElementProp.bind(this,"pageBreakBefore","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"page-break-before-element"},c().createElement(f.Z,{id:"page-break-before-elements"}),"?"))),g&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label"},c().createElement(f.Z,{id:"alternate-signature-page"})),c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"display-on-alternate",className:"custom-control-input",type:"checkbox",checked:E,value:!0,onChange:this.editElementProp.bind(this,"alternateForm","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"display-on-alternate"},c().createElement(f.Z,{id:"display-on-alternate-signature-page"}),"?"))),this.props.element.hasOwnProperty("step")&&c().createElement("div",{className:"form-group"},c().createElement("div",{className:"form-group-range"},c().createElement("label",{className:"control-label",htmlFor:"rangeStep"},c().createElement(f.Z,{id:"step"})),c().createElement("input",{id:"rangeStep",type:"number",className:"form-control",defaultValue:this.props.element.step,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"step","value")}))),this.props.element.hasOwnProperty("min_value")&&c().createElement("div",{className:"form-group"},c().createElement("div",{className:"form-group-range"},c().createElement("label",{className:"control-label",htmlFor:"rangeMin"},c().createElement(f.Z,{id:"min"})),c().createElement("input",{id:"rangeMin",type:"number",className:"form-control",defaultValue:this.props.element.min_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_value","value")}),c().createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.min_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_label","value")}))),this.props.element.hasOwnProperty("max_value")&&c().createElement("div",{className:"form-group"},c().createElement("div",{className:"form-group-range"},c().createElement("label",{className:"control-label",htmlFor:"rangeMax"},c().createElement(f.Z,{id:"max"})),c().createElement("input",{id:"rangeMax",type:"number",className:"form-control",defaultValue:this.props.element.max_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_value","value")}),c().createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.max_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_label","value")}))),this.props.element.hasOwnProperty("default_value")&&c().createElement("div",{className:"form-group"},c().createElement("div",{className:"form-group-range"},c().createElement("label",{className:"control-label",htmlFor:"defaultSelected"},c().createElement(f.Z,{id:"default-selected"})),c().createElement("input",{id:"defaultSelected",type:"number",className:"form-control",defaultValue:this.props.element.default_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"default_value","value")}))),this.props.element.hasOwnProperty("static")&&this.props.element.static&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label"},c().createElement(f.Z,{id:"text-style"})),c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"do-bold",className:"custom-control-input",type:"checkbox",checked:i,value:!0,onChange:this.editElementProp.bind(this,"bold","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"do-bold"},c().createElement(f.Z,{id:"bold"}))),c().createElement("div",{className:"custom-control custom-checkbox"},c().createElement("input",{id:"do-italic",className:"custom-control-input",type:"checkbox",checked:p,value:!0,onChange:this.editElementProp.bind(this,"italic","checked")}),c().createElement("label",{className:"custom-control-label",htmlFor:"do-italic"},c().createElement(f.Z,{id:"italic"})))),this.props.element.showDescription&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"questionDescription"},c().createElement(f.Z,{id:"description"})),c().createElement(m.Z,{type:"text",className:"form-control",id:"questionDescription",defaultValue:this.props.element.description,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"description","value")})),this.props.showCorrectColumn&&this.props.element.canHaveAnswer&&!this.props.element.hasOwnProperty("options")&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"correctAnswer"},c().createElement(f.Z,{id:"correct-answer"})),c().createElement("input",{id:"correctAnswer",type:"text",className:"form-control",defaultValue:this.props.element.correct,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"correct","value")})),this.props.element.canPopulateFromApi&&this.props.element.hasOwnProperty("options")&&c().createElement("div",{className:"form-group"},c().createElement("label",{className:"control-label",htmlFor:"optionsApiUrl"},c().createElement(f.Z,{id:"populate-options-from-api"})),c().createElement("div",{className:"row"},c().createElement("div",{className:"col-sm-6"},c().createElement("input",{className:"form-control",style:{width:"100%"},type:"text",id:"optionsApiUrl",placeholder:"http://localhost:8080/api/optionsdata"})),c().createElement("div",{className:"col-sm-6"},c().createElement("button",{onClick:this.addOptions.bind(this),className:"btn btn-success"},c().createElement(f.Z,{id:"populate"}))))),this.props.element.hasOwnProperty("options")&&c().createElement(b,{showCorrectColumn:this.props.showCorrectColumn,canHaveOptionCorrect:w,canHaveOptionValue:x,data:this.props.preview.state.data,updateElement:this.props.updateElement,preview:this.props.preview,element:this.props.element,key:this.props.element.options.length}),c().createElement("button",{onClick:this.props.manualEditModeOff,className:"btn btn-success"},"SAVE"))}}]),d}(c().Component);g.defaultProps={className:"edit-element-fields"}}}]);