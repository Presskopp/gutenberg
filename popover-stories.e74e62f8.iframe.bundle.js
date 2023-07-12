"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7394,2753],{"./packages/components/src/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/element/build-module/raw-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>RawHTML});var _react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function RawHTML({children,...props}){let rawHtml="";return _react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).forEach((child=>{"string"==typeof child&&""!==child.trim()&&(rawHtml+=child)})),(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{dangerouslySetInnerHTML:{__html:rawHtml},...props})}},"./packages/element/build-module/serialize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var is_plain_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),change_case__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js"),_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/escape-html/build-module/index.js"),_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_raw_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/element/build-module/raw-html.js");const{Provider,Consumer}=(0,_react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),ForwardRef=(0,_react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((()=>null)),ATTRIBUTES_TYPES=new Set(["string","boolean","number"]),SELF_CLOSING_TAGS=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),BOOLEAN_ATTRIBUTES=new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),ENUMERATED_ATTRIBUTES=new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),CSS_PROPERTIES_SUPPORTS_UNITLESS=new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"]);function hasPrefix(string,prefixes){return prefixes.some((prefix=>0===string.indexOf(prefix)))}function isInternalAttribute(attribute){return"key"===attribute||"children"===attribute}function getNormalAttributeValue(attribute,value){return"style"===attribute?function renderStyle(style){if(!(0,is_plain_object__WEBPACK_IMPORTED_MODULE_4__.P)(style))return style;let result;for(const property in style){const value=style[property];if(null==value)continue;result?result+=";":result="";result+=getNormalStylePropertyName(property)+":"+getNormalStylePropertyValue(property,value)}return result}(value):value}const SVG_ATTRIBUTE_WITH_DASHES_LIST=["accentHeight","alignmentBaseline","arabicForm","baselineShift","capHeight","clipPath","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","dominantBaseline","enableBackground","fillOpacity","fillRule","floodColor","floodOpacity","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","horizAdvX","horizOriginX","imageRendering","letterSpacing","lightingColor","markerEnd","markerMid","markerStart","overlinePosition","overlineThickness","paintOrder","panose1","pointerEvents","renderingIntent","shapeRendering","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","textAnchor","textDecoration","textRendering","underlinePosition","underlineThickness","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","vectorEffect","vertAdvY","vertOriginX","vertOriginY","wordSpacing","writingMode","xmlnsXlink","xHeight"].reduce(((map,attribute)=>(map[attribute.toLowerCase()]=attribute,map)),{}),CASE_SENSITIVE_SVG_ATTRIBUTES=["allowReorder","attributeName","attributeType","autoReverse","baseFrequency","baseProfile","calcMode","clipPathUnits","contentScriptType","contentStyleType","diffuseConstant","edgeMode","externalResourcesRequired","filterRes","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","suppressContentEditableWarning","suppressHydrationWarning","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector"].reduce(((map,attribute)=>(map[attribute.toLowerCase()]=attribute,map)),{}),SVG_ATTRIBUTES_WITH_COLONS=["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns:xlink"].reduce(((map,attribute)=>(map[attribute.replace(":","").toLowerCase()]=attribute,map)),{});function getNormalAttributeName(attribute){switch(attribute){case"htmlFor":return"for";case"className":return"class"}const attributeLowerCase=attribute.toLowerCase();return CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase]?CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase]:SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]?(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]):SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase]?SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase]:attributeLowerCase}function getNormalStylePropertyName(property){return property.startsWith("--")?property:hasPrefix(property,["ms","O","Moz","Webkit"])?"-"+(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(property):(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(property)}function getNormalStylePropertyValue(property,value){return"number"!=typeof value||0===value||CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)?value:value+"px"}function renderElement(element,context,legacyContext={}){if(null==element||!1===element)return"";if(Array.isArray(element))return renderChildren(element,context,legacyContext);switch(typeof element){case"string":return(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__.r)(element);case"number":return element.toString()}const{type,props}=element;switch(type){case _react__WEBPACK_IMPORTED_MODULE_0__.StrictMode:case _react__WEBPACK_IMPORTED_MODULE_0__.Fragment:return renderChildren(props.children,context,legacyContext);case _raw_html__WEBPACK_IMPORTED_MODULE_3__.Z:const{children,...wrapperProps}=props;return renderNativeComponent(Object.keys(wrapperProps).length?"div":null,{...wrapperProps,dangerouslySetInnerHTML:{__html:children}},context,legacyContext)}switch(typeof type){case"string":return renderNativeComponent(type,props,context,legacyContext);case"function":return type.prototype&&"function"==typeof type.prototype.render?function renderComponent(Component,props,context,legacyContext={}){const instance=new Component(props,legacyContext);"function"==typeof instance.getChildContext&&Object.assign(legacyContext,instance.getChildContext());const html=renderElement(instance.render(),context,legacyContext);return html}(type,props,context,legacyContext):renderElement(type(props,legacyContext),context,legacyContext)}switch(type&&type.$$typeof){case Provider.$$typeof:return renderChildren(props.children,props.value,legacyContext);case Consumer.$$typeof:return renderElement(props.children(context||type._currentValue),context,legacyContext);case ForwardRef.$$typeof:return renderElement(type.render(props),context,legacyContext)}return""}function renderNativeComponent(type,props,context,legacyContext={}){let content="";if("textarea"===type&&props.hasOwnProperty("value")){content=renderChildren(props.value,context,legacyContext);const{value,...restProps}=props;props=restProps}else props.dangerouslySetInnerHTML&&"string"==typeof props.dangerouslySetInnerHTML.__html?content=props.dangerouslySetInnerHTML.__html:void 0!==props.children&&(content=renderChildren(props.children,context,legacyContext));if(!type)return content;const attributes=function renderAttributes(props){let result="";for(const key in props){const attribute=getNormalAttributeName(key);if(!(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__.$b)(attribute))continue;let value=getNormalAttributeValue(key,props[key]);if(!ATTRIBUTES_TYPES.has(typeof value))continue;if(isInternalAttribute(key))continue;const isBooleanAttribute=BOOLEAN_ATTRIBUTES.has(attribute);if(isBooleanAttribute&&!1===value)continue;const isMeaningfulAttribute=isBooleanAttribute||hasPrefix(key,["data-","aria-"])||ENUMERATED_ATTRIBUTES.has(attribute);("boolean"!=typeof value||isMeaningfulAttribute)&&(result+=" "+attribute,isBooleanAttribute||("string"==typeof value&&(value=(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__.kb)(value)),result+='="'+value+'"'))}return result}(props);return SELF_CLOSING_TAGS.has(type)?"<"+type+attributes+"/>":"<"+type+attributes+">"+content+"</"+type+">"}function renderChildren(children,context,legacyContext={}){let result="";children=Array.isArray(children)?children:[children];for(let i=0;i<children.length;i++){result+=renderElement(children[i],context,legacyContext)}return result}const __WEBPACK_DEFAULT_EXPORT__=renderElement},"./packages/escape-html/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kb:()=>escapeAttribute,N2:()=>escapeEditableHTML,r:()=>escapeHTML,$b:()=>isValidAttributeName});const REGEXP_INVALID_ATTRIBUTE_NAME=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;function escapeAmpersand(value){return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function escapeLessThan(value){return value.replace(/</g,"&lt;")}function escapeAttribute(value){return function __unstableEscapeGreaterThan(value){return value.replace(/>/g,"&gt;")}(function escapeQuotationMark(value){return value.replace(/"/g,"&quot;")}(escapeAmpersand(value)))}function escapeHTML(value){return escapeLessThan(escapeAmpersand(value))}function escapeEditableHTML(value){return escapeLessThan(value.replace(/&/g,"&amp;"))}function isValidAttributeName(name){return!REGEXP_INVALID_ATTRIBUTE_NAME.test(name)}},"./packages/components/src/popover/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,Unstyled:()=>Unstyled,AllPlacements:()=>AllPlacements,DynamicHeight:()=>DynamicHeight,WithSlotOutsideIframe:()=>WithSlotOutsideIframe});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/block-editor/build-module/index.js"),_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/button/index.tsx"),_slot_fill__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/slot-fill/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/popover/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AVAILABLE_PLACEMENTS=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","overlay"],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Popover",component:___WEBPACK_IMPORTED_MODULE_2__.J2,argTypes:{anchor:{control:{type:null}},anchorRef:{control:{type:null}},anchorRect:{control:{type:null}},children:{control:{type:null}},focusOnMount:{control:{type:"select"},options:["firstElement",!0,!1]},getAnchorRect:{control:{type:null}},onClose:{action:"onClose"},onFocusOutside:{action:"onFocusOutside"},__unstableSlotName:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/popover",controls:{expanded:!0}}},PopoverWithAnchor=args=>{const anchorRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{padding:"8px",background:"salmon"},ref:anchorRef,children:"Popover's anchor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.J2,{...args,anchorRef})]})};PopoverWithAnchor.displayName="PopoverWithAnchor";const Template=args=>{const[isVisible,setIsVisible]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),buttonRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)((()=>{buttonRef.current?.scrollIntoView?.({block:"center",inline:"center"})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_4__.ZP,{variant:"secondary",onClick:()=>{setIsVisible((state=>!state))},ref:buttonRef,children:["Toggle Popover",isVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.J2,{...args})]})})};Template.displayName="Template";const Default=Template.bind({});Default.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})};const Unstyled=Template.bind({});Unstyled.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),variant:"unstyled"};const AllPlacements=({children,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{minWidth:"600px",marginLeft:"auto",marginRight:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Resize / scroll the viewport to test the behavior of the popovers when they reach the viewport boundaries."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:AVAILABLE_PLACEMENTS.map((p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PopoverWithAnchor,{placement:p,...args,resize:"overlay"===p||args.resize,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("small",{children:["(placement: ",p,")"]})})]},p)))})]});AllPlacements.displayName="AllPlacements",AllPlacements.parameters={controls:{exclude:["placement","position"]}},AllPlacements.args={...Default.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),noArrow:!1,offset:10,resize:!1,flip:!1};const DynamicHeight=({children,...args})=>{const[height,setHeight]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(200);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{padding:"20px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_4__.ZP,{variant:"primary",onClick:()=>setHeight(height+100),style:{marginRight:"20px"},children:"Increase Size"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_4__.ZP,{variant:"primary",onClick:()=>setHeight(height-100),children:"Decrease Size"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"When the height of the popover exceeds the available space in the canvas, a scrollbar inside the popover should appear."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.J2,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height,background:"#eee",padding:"20px"},children})})})]})};DynamicHeight.displayName="DynamicHeight",DynamicHeight.args={...Default.args,children:"Content with dynamic height"};const WithSlotOutsideIframe=args=>{const anchorRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),slotName="popover-with-slot-outside-iframe";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_slot_fill__WEBPACK_IMPORTED_MODULE_5__.zt,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.J2.Slot,{name:slotName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.lP,{style:{width:"100%",height:"400px",border:"0",outline:"1px solid purple"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{height:"200vh",paddingTop:"10vh"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{padding:"8px",background:"salmon",maxWidth:"200px",marginTop:"100px",marginLeft:"auto",marginRight:"auto"},ref:anchorRef,children:"Popover's anchor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.J2,{...args,__unstableSlotName:slotName,anchorRef})]})})]})})};WithSlotOutsideIframe.displayName="WithSlotOutsideIframe",WithSlotOutsideIframe.args={...Default.args};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/popover/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/popover/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);