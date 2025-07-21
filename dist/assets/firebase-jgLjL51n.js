import{o as ph,_ as vr}from"./vendor-core-DIwa_jSW.js";var No={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(t[l],t[h],t[d],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new mh;const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const _=u<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yh=function(n){const e=nc(n);return sc.encodeByteArray(e,!0)},ws=function(n){return yh(n).replace(/\./g,"")},ic=function(n){try{return sc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=()=>vh().__FIREBASE_DEFAULTS__,_h=()=>{if(typeof process>"u"||typeof No>"u")return;const n=No.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Eh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ic(n[1]);return e&&JSON.parse(e)},wr=()=>{try{return wh()||_h()||Eh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rc=n=>{var e,t;return(t=(e=wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oc=n=>{const e=rc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ac=()=>{var n;return(n=wr())===null||n===void 0?void 0:n.config},cc=n=>{var e;return(e=wr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ws(JSON.stringify(t)),ws(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function Sh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ch(){const n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function bh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="FirebaseError";class Re extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Rh,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Nh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Re(i,a,s)}}function Nh(n,e){return n.replace(Dh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Dh=/\{\$([^}]+)}/g;function Oh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Do(r)&&Do(o)){if(!_s(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Do(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function tn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function nn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ph(n,e){const t=new Lh(n,e);return t.subscribe.bind(t)}class Lh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Mh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ti),i.error===void 0&&(i.error=Ti),i.complete===void 0&&(i.complete=Ti);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ti(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ih;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fh(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uh(n){return n===rt?void 0:n}function Fh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const $h={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Bh=N.INFO,jh={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},qh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=jh[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _r{constructor(e){this.name=e,this._logLevel=Bh,this._logHandler=qh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Hh(n){const e=n.getComponent();return e?.type==="VERSION"}const Bi="@firebase/app",Oo="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new _r("@firebase/app"),Kh="@firebase/app-compat",Gh="@firebase/analytics-compat",Wh="@firebase/analytics",Qh="@firebase/app-check-compat",Yh="@firebase/app-check",Xh="@firebase/auth",Jh="@firebase/auth-compat",Zh="@firebase/database",ed="@firebase/database-compat",td="@firebase/functions",nd="@firebase/functions-compat",sd="@firebase/installations",id="@firebase/installations-compat",rd="@firebase/messaging",od="@firebase/messaging-compat",ad="@firebase/performance",cd="@firebase/performance-compat",ud="@firebase/remote-config",ld="@firebase/remote-config-compat",hd="@firebase/storage",dd="@firebase/storage-compat",fd="@firebase/firestore",pd="@firebase/firestore-compat",gd="firebase",md="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]",yd={[Bi]:"fire-core",[Kh]:"fire-core-compat",[Wh]:"fire-analytics",[Gh]:"fire-analytics-compat",[Yh]:"fire-app-check",[Qh]:"fire-app-check-compat",[Xh]:"fire-auth",[Jh]:"fire-auth-compat",[Zh]:"fire-rtdb",[ed]:"fire-rtdb-compat",[td]:"fire-fn",[nd]:"fire-fn-compat",[sd]:"fire-iid",[id]:"fire-iid-compat",[rd]:"fire-fcm",[od]:"fire-fcm-compat",[ad]:"fire-perf",[cd]:"fire-perf-compat",[ud]:"fire-rc",[ld]:"fire-rc-compat",[hd]:"fire-gcs",[dd]:"fire-gcs-compat",[fd]:"fire-fst",[pd]:"fire-fst-compat","fire-js":"fire-js",[gd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map,qi=new Map;function vd(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ft(n){const e=n.name;if(qi.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;qi.set(e,n);for(const t of Es.values())vd(t,n);return!0}function qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ge=new Ln("app","Firebase",wd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=md;function Ed(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ji,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ge.create("bad-app-name",{appName:String(i)});if(t||(t=ac()),!t)throw Ge.create("no-options");const r=Es.get(i);if(r){if(_s(t,r.options)&&_s(s,r.config))return r;throw Ge.create("duplicate-app",{appName:i})}const o=new Vh(i);for(const c of qi.values())o.addComponent(c);const a=new _d(t,s,o);return Es.set(i,a),a}function Er(n=ji){const e=Es.get(n);if(!e&&n===ji&&ac())return Ed();if(!e)throw Ge.create("no-app",{appName:n});return e}function Te(n,e,t){var s;let i=(s=yd[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}ft(new Ye(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebase-heartbeat-database",Td=1,gn="firebase-heartbeat-store";let Si=null;function lc(){return Si||(Si=ph(Id,Td,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gn)}}}).catch(n=>{throw Ge.create("idb-open",{originalErrorMessage:n.message})})),Si}async function Sd(n){try{return await(await lc()).transaction(gn).objectStore(gn).get(hc(n))}catch(e){if(e instanceof Re)dt.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:e?.message});dt.warn(t.message)}}}async function Po(n,e){try{const s=(await lc()).transaction(gn,"readwrite");await s.objectStore(gn).put(e,hc(n)),await s.done}catch(t){if(t instanceof Re)dt.warn(t.message);else{const s=Ge.create("idb-set",{originalErrorMessage:t?.message});dt.warn(s.message)}}}function hc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=1024,Cd=30*24*60*60*1e3;class kd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Cd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lo(),{heartbeatsToSend:t,unsentEntries:s}=bd(this._heartbeatsCache.heartbeats),i=ws(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lo(){return new Date().toISOString().substring(0,10)}function bd(n,e=Ad){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Mo(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Mo(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Rd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?bh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mo(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n){ft(new Ye("platform-logger",e=>new zh(e),"PRIVATE")),ft(new Ye("heartbeat",e=>new kd(e),"PRIVATE")),Te(Bi,Oo,n),Te(Bi,Oo,"esm2017"),Te("fire-js","")}Nd("");function dc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dd=dc,fc=new Ln("auth","Firebase",dc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new _r("@firebase/auth");function Od(n,...e){Is.logLevel<=N.WARN&&Is.warn(`Auth (${wt}): ${n}`,...e)}function hs(n,...e){Is.logLevel<=N.ERROR&&Is.error(`Auth (${wt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...e){throw Ir(n,...e)}function Se(n,...e){return Ir(n,...e)}function Pd(n,e,t){const s=Object.assign(Object.assign({},Dd()),{[e]:t});return new Ln("auth","Firebase",s).create(e,{appName:n.name})}function Ir(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return fc.create(n,...e)}function I(n,e,...t){if(!n)throw Ir(e,...t)}function De(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hs(e),new Error(e)}function Me(n,e){n||De(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ld(){return xo()==="http:"||xo()==="https:"}function xo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ld()||Sh()||"connection"in navigator)?navigator.onLine:!0}function xd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Me(t>e,"Short delay should be less than long delay!"),this.isMobile=Th()||Ah()}get(){return Md()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e){Me(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new xn(3e4,6e4);function et(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $e(n,e,t,s,i={}){return gc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Mn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),pc.fetch()(mc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function gc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ud),e);try{const i=new Vd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw es(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw es(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw es(n,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pd(n,l,u);ye(n,l)}}catch(i){if(i instanceof Re)throw i;ye(n,"network-request-failed",{message:String(i)})}}async function Un(n,e,t,s,i={}){const r=await $e(n,e,t,s,i);return"mfaPendingCredential"in r&&ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}function mc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Tr(n.config,i):`${n.config.apiScheme}://${i}`}class Vd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Se(this.auth,"network-request-failed")),Fd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Se(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(n,e){return $e(n,"POST","/v1/accounts:delete",e)}async function Bd(n,e){return $e(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jd(n,e=!1){const t=H(n),s=await t.getIdToken(e),i=Sr(s);I(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:un(Ai(i.auth_time)),issuedAtTime:un(Ai(i.iat)),expirationTime:un(Ai(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Ai(n){return Number(n)*1e3}function Sr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return hs("JWT malformed, contained fewer than 3 sections"),null;try{const i=ic(t);return i?JSON.parse(i):(hs("Failed to decode base64 JWT payload"),null)}catch(i){return hs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function qd(n){const e=Sr(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Re&&zd(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function zd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=un(this.lastLoginAt),this.creationTime=un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Mt(n,Bd(t,{idToken:s}));I(i?.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Wd(r.providerUserInfo):[],a=Gd(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!a?.length,l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yc(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Kd(n){const e=H(n);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gd(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Wd(n){return n.map(e=>{var{providerId:t}=e,s=vr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(n,e){const t=await gc(n,{},async()=>{const s=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=mc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Qd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new mn;return s&&(I(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(I(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=vr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Mt(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jd(this,e)}reload(){return Kd(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ts(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mt(this,$d(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,u,l;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,g=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:M,isAnonymous:he,providerData:pe,stsTokenManager:st}=t;I(L&&st,e,"internal-error");const it=mn.fromJSON(this.name,st);I(typeof L=="string",e,"internal-error"),Be(h,e.name),Be(d,e.name),I(typeof M=="boolean",e,"internal-error"),I(typeof he=="boolean",e,"internal-error"),Be(g,e.name),Be(_,e.name),Be(T,e.name),Be(w,e.name),Be(P,e.name),Be(V,e.name);const Tt=new ut({uid:L,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:he,photoURL:_,phoneNumber:g,tenantId:T,stsTokenManager:it,createdAt:P,lastLoginAt:V});return pe&&Array.isArray(pe)&&(Tt.providerData=pe.map(fh=>Object.assign({},fh))),w&&(Tt._redirectEventId=w),Tt}static async _fromIdTokenResponse(e,t,s=!1){const i=new mn;i.updateFromServerResponse(t);const r=new ut({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ts(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Map;function Oe(n){Me(n instanceof Function,"Expected a class definition");let e=Uo.get(n);return e?(Me(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uo.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vc.type="NONE";const Fo=vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n,e,t){return`firebase:${n}:${e}:${t}`}class Rt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,r),this.fullPersistenceKey=ds("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Rt(Oe(Fo),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Oe(Fo);const o=ds(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=ut._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Rt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Rt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tc(e))return"Blackberry";if(Sc(e))return"Webos";if(Ar(e))return"Safari";if((e.includes("chrome/")||_c(e))&&!e.includes("edge/"))return"Chrome";if(Ic(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function wc(n=oe()){return/firefox\//i.test(n)}function Ar(n=oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _c(n=oe()){return/crios\//i.test(n)}function Ec(n=oe()){return/iemobile/i.test(n)}function Ic(n=oe()){return/android/i.test(n)}function Tc(n=oe()){return/blackberry/i.test(n)}function Sc(n=oe()){return/webos/i.test(n)}function zs(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yd(n=oe()){var e;return zs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xd(){return Ch()&&document.documentMode===10}function Ac(n=oe()){return zs(n)||Ic(n)||Sc(n)||Tc(n)||/windows phone/i.test(n)||Ec(n)}function Jd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,e=[]){let t;switch(n){case"Browser":t=Vo(oe());break;case"Worker":t=`${Vo(oe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wt}/${s}`}async function kc(n,e){return $e(n,"GET","/v2/recaptchaConfig",et(n,e))}function $o(n){return n!==void 0&&n.enterprise!==void 0}class bc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Rc(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Se("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Zd().appendChild(s)})}function ef(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tf="https://www.google.com/recaptcha/enterprise.js?render=",nf="recaptcha-enterprise",sf="NO_RECAPTCHA";class Nc{constructor(e){this.type=nf,this.auth=zt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{kc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bc(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;$o(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(sf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&$o(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rc(tf+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ss(n,e,t,s=!1){const i=new Nc(n);let r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bo(this),this.idTokenSubscription=new Bo(this),this.beforeStateQueue=new rf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?H(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}async initializeRecaptchaConfig(){const e=await kc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new bc(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Nc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Od(`Error while retrieving App Check token: ${t.error}`),t?.token}}function zt(n){return H(n)}class Bo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ph(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n,e){const t=qs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(_s(r,e??{}))return i;ye(i,"already-initialized")}return t.initialize({options:e})}function cf(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Oe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function uf(n,e,t){const s=zt(n);I(s._canInitEmulator,s,"emulator-config-failed"),I(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Dc(e),{host:o,port:a}=lf(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),hf()}function Dc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lf(n){const e=Dc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:jo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:jo(o)}}}function jo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,t){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}async function df(n,e){return $e(n,"POST","/v1/accounts:update",e)}async function ff(n,e){return $e(n,"POST","/v1/accounts:update",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n,e){return Un(n,"POST","/v1/accounts:signInWithPassword",et(n,e))}async function pf(n,e){return $e(n,"POST","/v1/accounts:sendOobCode",et(n,e))}async function gf(n,e){return pf(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n,e){return Un(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}async function yf(n,e){return Un(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Cr{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new yn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new yn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Ss(e,s,"signInWithPassword");return Ci(e,i)}else return Ci(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Ss(e,s,"signInWithPassword");return Ci(e,r)}else return Promise.reject(i)});case"emailLink":return mf(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return df(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yf(e,{idToken:t,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(n,e){return Un(n,"POST","/v1/accounts:signInWithIdp",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="http://localhost";class pt extends Cr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=vr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new pt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Nt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:vf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _f(n){const e=tn(nn(n)).link,t=e?tn(nn(e)).deep_link_id:null,s=tn(nn(n)).deep_link_id;return(s?tn(nn(s)).link:null)||s||t||e||n}class kr{constructor(e){var t,s,i,r,o,a;const c=tn(nn(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=wf((i=c.mode)!==null&&i!==void 0?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=_f(e);try{return new kr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(e,t){return yn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kr.parseLink(t);return I(s,"argument-error"),yn._fromEmailAndCode(e,s.code,s.tenantId)}}Ht.PROVIDER_ID="password";Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Fn{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return qe.credential(t,s)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Fn{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Fn{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return He.credential(t,s)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(n,e){return Un(n,"POST","/v1/accounts:signUp",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ut._fromIdTokenResponse(e,s,i),o=qo(s);return new gt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=qo(s);return new gt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function qo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Re{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new As(e,t,s,i)}}function Pc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(n,r,e,s):r})}async function Ef(n,e,t=!1){const s=await Mt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gt._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Mt(n,Pc(s,i,e,n),t);I(r.idToken,s,"internal-error");const o=Sr(r.idToken);I(o,s,"internal-error");const{sub:a}=o;return I(n.uid===a,s,"user-mismatch"),gt._forOperation(n,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&ye(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(n,e,t=!1){const s="signIn",i=await Pc(n,s,e),r=await gt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Tf(n,e){return Lc(zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e,t){var s;I(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),I(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(I(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(I(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function _w(n,e){await ff(H(n),{oobCode:e})}async function Ew(n,e,t){var s;const i=zt(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await Ss(i,r,"signUpPassword");o=ki(i,u)}else o=ki(i,r).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Ss(i,r,"signUpPassword");return ki(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await gt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Iw(n,e,t){return Tf(H(n),Ht.credential(e,t))}async function Tw(n,e){const t=H(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Sf(t.auth,i,e);const{email:r}=await gf(t.auth,i);r!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(n,e){return $e(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=H(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Mt(s,Af(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Cf(n,e,t,s){return H(n).onIdTokenChanged(e,t,s)}function kf(n,e,t){return H(n).beforeAuthStateChanged(e,t)}function Aw(n,e,t,s){return H(n).onAuthStateChanged(e,t,s)}function Cw(n){return H(n).signOut()}const Cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){const n=oe();return Ar(n)||zs(n)}const Rf=1e3,Nf=10;class xc extends Mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bf()&&Jd(),this.fallbackToPolling=Ac(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Xd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nf):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Rf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xc.type="LOCAL";const Df=xc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uc.type="SESSION";const Fc=Uc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Hs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),c=await Of(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=br("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function Lf(n){Ae().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function Mf(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xf(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Uf(){return Vc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="firebaseLocalStorageDb",Ff=1,ks="firebaseLocalStorage",Bc="fbase_key";class Vn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ks(n,e){return n.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function Vf(){const n=indexedDB.deleteDatabase($c);return new Vn(n).toPromise()}function Hi(){const n=indexedDB.open($c,Ff);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ks,{keyPath:Bc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ks)?e(s):(s.close(),await Vf(),e(await Hi()))})})}async function zo(n,e,t){const s=Ks(n,!0).put({[Bc]:e,value:t});return new Vn(s).toPromise()}async function $f(n,e){const t=Ks(n,!1).get(e),s=await new Vn(t).toPromise();return s===void 0?null:s.value}function Ho(n,e){const t=Ks(n,!0).delete(e);return new Vn(t).toPromise()}const Bf=800,jf=3;class jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(Uf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mf(),!this.activeServiceWorker)return;this.sender=new Pf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hi();return await zo(e,Cs,"1"),await Ho(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>zo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>$f(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ho(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ks(i,!1).getAll();return new Vn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jc.type="LOCAL";const qf=jc;new xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,e){return e?Oe(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Cr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hf(n){return Lc(n.auth,new Rr(n),n.bypassAuthState)}function Kf(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),If(t,new Rr(n),n.bypassAuthState)}async function Gf(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Ef(t,new Rr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hf;case"linkViaPopup":case"linkViaRedirect":return Gf;case"reauthViaPopup":case"reauthViaRedirect":return Kf;default:ye(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new xn(2e3,1e4);class kt extends qc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=br();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wf.get())};e()}}kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="pendingRedirect",fs=new Map;class Yf extends qc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const s=await Xf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xf(n,e){const t=ep(e),s=Zf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Jf(n,e){fs.set(n._key(),e)}function Zf(n){return Oe(n._redirectPersistence)}function ep(n){return ds(Qf,n.config.apiKey,n.name)}async function tp(n,e,t=!1){const s=zt(n),i=zf(s,e),o=await new Yf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=10*60*1e3;class sp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ip(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!zc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Se(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=np&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ko(e))}saveEventToCache(e){this.cachedEventUids.add(Ko(e)),this.lastProcessedEventTime=Date.now()}}function Ko(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ip(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(n,e={}){return $e(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ap=/^https?/;async function cp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rp(n);for(const t of e)try{if(up(t))return}catch{}ye(n,"unauthorized-domain")}function up(n){const e=zi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!ap.test(t))return!1;if(op.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new xn(3e4,6e4);function Go(){const n=Ae().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hp(n){return new Promise((e,t)=>{var s,i,r;function o(){Go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Go(),t(Se(n,"network-request-failed"))},timeout:lp.get()})}if(!((i=(s=Ae().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ae().gapi)===null||r===void 0)&&r.load)o();else{const a=ef("iframefcb");return Ae()[a]=()=>{gapi.load?o():t(Se(n,"network-request-failed"))},Rc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ps=null,e})}let ps=null;function dp(n){return ps=ps||hp(n),ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new xn(5e3,15e3),pp="__/auth/iframe",gp="emulator/auth/iframe",mp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vp(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Tr(e,gp):`https://${n.config.authDomain}/${pp}`,s={apiKey:e.apiKey,appName:n.name,v:wt},i=yp.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Mn(s).slice(1)}`}async function wp(n){const e=await dp(n),t=Ae().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:vp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mp,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Se(n,"network-request-failed"),a=Ae().setTimeout(()=>{r(o)},fp.get());function c(){Ae().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ep=500,Ip=600,Tp="_blank",Sp="http://localhost";class Wo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ap(n,e,t,s=Ep,i=Ip){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_p),{width:s.toString(),height:i.toString(),top:r,left:o}),u=oe().toLowerCase();t&&(a=_c(u)?Tp:t),wc(u)&&(e=e||Sp,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Yd(u)&&a!=="_self")return Cp(e||"",a),new Wo(null);const h=window.open(e||"",a,l);I(h,n,"popup-blocked");try{h.focus()}catch{}return new Wo(h)}function Cp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="__/auth/handler",bp="emulator/auth/handler",Rp=encodeURIComponent("fac");async function Qo(n,e,t,s,i,r){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:wt,eventId:i};if(e instanceof Oc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Oh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries({}))o[l]=h}if(e instanceof Fn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Rp}=${encodeURIComponent(c)}`:"";return`${Np(n)}?${Mn(a).slice(1)}${u}`}function Np({config:n}){return n.emulator?Tr(n,bp):`https://${n.authDomain}/${kp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="webStorageSupport";class Dp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fc,this._completeRedirectFn=tp,this._overrideRedirectResult=Jf}async _openPopup(e,t,s,i){var r;Me((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Qo(e,t,s,zi(),i);return Ap(e,o,br())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Qo(e,t,s,zi(),i);return Lf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Me(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wp(e),s=new sp(e);return t.register("authEvent",i=>(I(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bi,{type:bi},i=>{var r;const o=(r=i?.[0])===null||r===void 0?void 0:r[bi];o!==void 0&&t(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ac()||Ar()||zs()}}const Op=Dp;var Yo="@firebase/auth",Xo="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mp(n){ft(new Ye("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cc(n)},u=new of(s,i,r,c);return cf(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ft(new Ye("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(s=>new Pp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(Yo,Xo,Lp(n)),Te(Yo,Xo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=5*60,Up=cc("authIdTokenMaxAge")||xp;let Jo=null;const Fp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Up)return;const i=t?.token;Jo!==i&&(Jo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kw(n=Er()){const e=qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=af(n,{popupRedirectResolver:Op,persistence:[qf,Df,Fc]}),s=cc("authTokenSyncURL");if(s){const r=Fp(s);kf(t,r,()=>r(t.currentUser)),Cf(t,o=>r(o))}const i=rc("auth");return i&&uf(t,`http://${i}`),t}Mp("Browser");var Vp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Nr=Nr||{},A=Vp||self;function Gs(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ws(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function $p(n,e,t){return n.call.apply(n.bind,arguments)}function Bp(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function se(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?se=$p:se=Bp,se.apply(null,arguments)}function ts(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Q(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function tt(){this.s=this.s,this.o=this.o}var jp=0;tt.prototype.s=!1;tt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),jp!=0)};tt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Dr(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Zo(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Gs(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function ie(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var qp=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",()=>{},e),A.removeEventListener("test",()=>{},e)}catch{}return n}();function vn(n){return/^[\s\xa0]*$/.test(n)}function Qs(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function _e(n){return Qs().indexOf(n)!=-1}function Or(n){return Or[" "](n),n}Or[" "]=function(){};function zp(n,e){var t=Ug;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Hp=_e("Opera"),xt=_e("Trident")||_e("MSIE"),Kc=_e("Edge"),Ki=Kc||xt,Gc=_e("Gecko")&&!(Qs().toLowerCase().indexOf("webkit")!=-1&&!_e("Edge"))&&!(_e("Trident")||_e("MSIE"))&&!_e("Edge"),Kp=Qs().toLowerCase().indexOf("webkit")!=-1&&!_e("Edge");function Wc(){var n=A.document;return n?n.documentMode:void 0}var Gi;e:{var Ri="",Ni=function(){var n=Qs();if(Gc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Kc)return/Edge\/([\d\.]+)/.exec(n);if(xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Kp)return/WebKit\/(\S+)/.exec(n);if(Hp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ni&&(Ri=Ni?Ni[1]:""),xt){var Di=Wc();if(Di!=null&&Di>parseFloat(Ri)){Gi=String(Di);break e}}Gi=Ri}var Wi;if(A.document&&xt){var ea=Wc();Wi=ea||parseInt(Gi,10)||void 0}else Wi=void 0;var Gp=Wi;function wn(n,e){if(ie.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Gc){e:{try{Or(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Wp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&wn.$.h.call(this)}}Q(wn,ie);var Wp={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ys="closure_listenable_"+(1e6*Math.random()|0),Qp=0;function Yp(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.la=i,this.key=++Qp,this.fa=this.ia=!1}function Xs(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Pr(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Xp(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Qc(n){const e={};for(const t in n)e[t]=n[t];return e}const ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yc(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<ta.length;r++)t=ta[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Js(n){this.src=n,this.g={},this.h=0}Js.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Yi(n,e,s,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Yp(e,this.src,r,!!s,i),e.ia=t,n.push(e)),e};function Qi(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=Hc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Xs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Yi(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==s)return i}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),Oi={};function Xc(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xc(n,e[r],t,s,i);return null}return t=eu(t),n&&n[Ys]?n.O(e,t,Ws(s)?!!s.capture:!1,i):Jp(n,e,t,!1,s,i)}function Jp(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Ws(i)?!!i.capture:!!i,a=xr(n);if(a||(n[Lr]=a=new Js(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=Zp(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)qp||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(Zc(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Zp(){function n(t){return e.call(n.src,n.listener,t)}const e=eg;return n}function Jc(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Jc(n,e[r],t,s,i);else s=Ws(s)?!!s.capture:!!s,t=eu(t),n&&n[Ys]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Yi(r,t,s,i),-1<t&&(Xs(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=xr(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Yi(e,t,s,i)),(t=-1<n?e[n]:null)&&Mr(t))}function Mr(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ys])Qi(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Zc(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=xr(e))?(Qi(t,n),t.h==0&&(t.src=null,e[Lr]=null)):Xs(n)}}}function Zc(n){return n in Oi?Oi[n]:Oi[n]="on"+n}function eg(n,e){if(n.fa)n=!0;else{e=new wn(e,this);var t=n.listener,s=n.la||n.src;n.ia&&Mr(n),n=t.call(s,e)}return n}function xr(n){return n=n[Lr],n instanceof Js?n:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(n){return typeof n=="function"?n:(n[Pi]||(n[Pi]=function(e){return n.handleEvent(e)}),n[Pi])}function W(){tt.call(this),this.i=new Js(this),this.S=this,this.J=null}Q(W,tt);W.prototype[Ys]=!0;W.prototype.removeEventListener=function(n,e,t,s){Jc(this,n,e,t,s)};function J(n,e){var t,s=n.J;if(s)for(t=[];s;s=s.J)t.push(s);if(n=n.S,s=e.type||e,typeof e=="string")e=new ie(e,n);else if(e instanceof ie)e.target=e.target||n;else{var i=e;e=new ie(s,n),Yc(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=ns(o,s,!0,e)&&i}if(o=e.g=n,i=ns(o,s,!0,e)&&i,i=ns(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=ns(o,s,!1,e)&&i}W.prototype.N=function(){if(W.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Xs(t[s]);delete n.g[e],n.h--}}this.J=null};W.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};W.prototype.P=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function ns(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Qi(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ur=A.JSON.stringify;class tg{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ng(){var n=Fr;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class sg{constructor(){this.h=this.g=null}add(e,t){const s=tu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var tu=new tg(()=>new ig,n=>n.reset());class ig{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function rg(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function og(n){A.setTimeout(()=>{throw n},0)}let _n,En=!1,Fr=new sg,nu=()=>{const n=A.Promise.resolve(void 0);_n=()=>{n.then(ag)}};var ag=()=>{for(var n;n=ng();){try{n.h.call(n.g)}catch(t){og(t)}var e=tu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}En=!1};function Zs(n,e){W.call(this),this.h=n||1,this.g=e||A,this.j=se(this.qb,this),this.l=Date.now()}Q(Zs,W);m=Zs.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(Vr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vr(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}m.N=function(){Zs.$.N.call(this),Vr(this),delete this.g};function $r(n,e,t){if(typeof n=="function")t&&(n=se(n,t));else if(n&&typeof n.handleEvent=="function")n=se(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function su(n){n.g=$r(()=>{n.g=null,n.i&&(n.i=!1,su(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class cg extends tt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(n){tt.call(this),this.h=n,this.g={}}Q(In,tt);var na=[];function iu(n,e,t,s){Array.isArray(t)||(t&&(na[0]=t.toString()),t=na);for(var i=0;i<t.length;i++){var r=Xc(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function ru(n){Pr(n.g,function(e,t){this.g.hasOwnProperty(t)&&Mr(e)},n),n.g={}}In.prototype.N=function(){In.$.N.call(this),ru(this)};In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ei(){this.g=!0}ei.prototype.Ea=function(){this.g=!1};function ug(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function lg(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function bt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+dg(n,t)+(s?" "+s:"")})}function hg(n,e){n.info(function(){return"TIMEOUT: "+e})}ei.prototype.info=function(){};function dg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ur(t)}catch{return e}}var _t={},sa=null;function ti(){return sa=sa||new W}_t.Ta="serverreachability";function ou(n){ie.call(this,_t.Ta,n)}Q(ou,ie);function Tn(n){const e=ti();J(e,new ou(e))}_t.STAT_EVENT="statevent";function au(n,e){ie.call(this,_t.STAT_EVENT,n),this.stat=e}Q(au,ie);function ce(n){const e=ti();J(e,new au(e,n))}_t.Ua="timingevent";function cu(n,e){ie.call(this,_t.Ua,n),this.size=e}Q(cu,ie);function $n(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var ni={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Br(){}Br.prototype.h=null;function ia(n){return n.h||(n.h=n.i())}function lu(){}var Bn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jr(){ie.call(this,"d")}Q(jr,ie);function qr(){ie.call(this,"c")}Q(qr,ie);var Xi;function si(){}Q(si,Br);si.prototype.g=function(){return new XMLHttpRequest};si.prototype.i=function(){return{}};Xi=new si;function jn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.W=s||1,this.U=new In(this),this.P=fg,n=Ki?125:void 0,this.V=new Zs(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hu}function hu(){this.i=null,this.g="",this.h=!1}var fg=45e3,Ji={},bs={};m=jn.prototype;m.setTimeout=function(n){this.P=n};function Zi(n,e,t){n.L=1,n.v=ri(xe(e)),n.s=t,n.S=!0,du(n,null)}function du(n,e){n.G=Date.now(),qn(n),n.A=xe(n.v);var t=n.A,s=n.W;Array.isArray(s)||(s=[String(s)]),_u(t.i,"t",s),n.C=0,t=n.l.J,n.h=new hu,n.g=Bu(n.l,t?e:null,!n.s),0<n.O&&(n.M=new cg(se(n.Pa,n,n.g),n.O)),iu(n.U,n.g,"readystatechange",n.nb),e=n.I?Qc(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Tn(),ug(n.j,n.u,n.A,n.m,n.W,n.s)}m.nb=function(n){n=n.target;const e=this.M;e&&Ee(n)==3?e.l():this.Pa(n)};m.Pa=function(n){try{if(n==this.g)e:{const l=Ee(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ki||this.g&&(this.h.h||this.g.ja()||ca(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Tn(3):Tn(2)),ii(this);var t=this.g.da();this.ca=t;t:if(fu(this)){var s=ca(this.g);n="";var i=s.length,r=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ot(this),ln(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,lg(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vn(a)){var u=a;break t}}u=null}if(t=u)bt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,er(this,t);else{this.i=!1,this.o=3,ce(12),ot(this),ln(this);break e}}this.S?(pu(this,l,o),Ki&&this.i&&l==3&&(iu(this.U,this.V,"tick",this.mb),this.V.start())):(bt(this.j,this.m,o,null),er(this,o)),l==4&&ot(this),this.i&&!this.J&&(l==4?Uu(this.l,this):(this.i=!1,qn(this)))}else Lg(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),ot(this),ln(this)}}}catch{}finally{}};function fu(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function pu(n,e,t){let s=!0,i;for(;!n.J&&n.C<t.length;)if(i=pg(n,t),i==bs){e==4&&(n.o=4,ce(14),s=!1),bt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Ji){n.o=4,ce(15),bt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else bt(n.j,n.m,i,null),er(n,i);fu(n)&&i!=bs&&i!=Ji&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ce(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Qr(e),e.M=!0,ce(11))):(bt(n.j,n.m,t,"[Invalid Chunked Response]"),ot(n),ln(n))}m.mb=function(){if(this.g){var n=Ee(this.g),e=this.g.ja();this.C<e.length&&(ii(this),pu(this,n,e),this.i&&n!=4&&qn(this))}};function pg(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?bs:(t=Number(e.substring(t,s)),isNaN(t)?Ji:(s+=1,s+t>e.length?bs:(e=e.slice(s,s+t),n.C=s+t,e)))}m.cancel=function(){this.J=!0,ot(this)};function qn(n){n.Y=Date.now()+n.P,gu(n,n.P)}function gu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=$n(se(n.lb,n),e)}function ii(n){n.B&&(A.clearTimeout(n.B),n.B=null)}m.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(hg(this.j,this.A),this.L!=2&&(Tn(),ce(17)),ot(this),this.o=2,ln(this)):gu(this,this.Y-n)};function ln(n){n.l.H==0||n.J||Uu(n.l,n)}function ot(n){ii(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Vr(n.V),ru(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function er(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||tr(t.i,n))){if(!n.K&&tr(t.i,n)&&t.H==3){try{var s=t.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Ds(t),ci(t);else break e;Wr(t),ce(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=$n(se(t.ib,t),6e3));if(1>=Tu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else at(t,11)}else if((n.K||t.g==n)&&Ds(t),!vn(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.L=s,t.l.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(zr(r,r.h),r.h=null))}if(s.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,x(s.I,s.F,T))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),s=t;var o=n;if(s.wa=$u(s,s.J?s.pa:null,s.Y),o.K){Su(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(ii(a),qn(a)),s.g=o}else Mu(s);0<t.j.length&&ui(t)}else u[0]!="stop"&&u[0]!="close"||at(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?at(t,7):Gr(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Tn(4)}catch{}}function gg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Gs(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function mg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Gs(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function mu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Gs(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=mg(n),s=gg(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof lt){this.h=n.h,Rs(this,n.j),this.s=n.s,this.g=n.g,Ns(this,n.m),this.l=n.l;var e=n.i,t=new Sn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ra(this,t),this.o=n.o}else n&&(e=String(n).match(yu))?(this.h=!1,Rs(this,e[1]||"",!0),this.s=sn(e[2]||""),this.g=sn(e[3]||"",!0),Ns(this,e[4]),this.l=sn(e[5]||"",!0),ra(this,e[6]||"",!0),this.o=sn(e[7]||"")):(this.h=!1,this.i=new Sn(null,this.h))}lt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(rn(e,oa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(rn(e,oa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(rn(t,t.charAt(0)=="/"?_g:wg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",rn(t,Ig)),n.join("")};function xe(n){return new lt(n)}function Rs(n,e,t){n.j=t?sn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ns(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ra(n,e,t){e instanceof Sn?(n.i=e,Tg(n.i,n.h)):(t||(e=rn(e,Eg)),n.i=new Sn(e,n.h))}function x(n,e,t){n.i.set(e,t)}function ri(n){return x(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function sn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function rn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,vg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function vg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var oa=/[#\/\?@]/g,wg=/[#\?:]/g,_g=/[#\?]/g,Eg=/[#\?@]/g,Ig=/#/g;function Sn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function nt(n){n.g||(n.g=new Map,n.h=0,n.i&&yg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}m=Sn.prototype;m.add=function(n,e){nt(this),this.i=null,n=Kt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function vu(n,e){nt(n),e=Kt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function wu(n,e){return nt(n),e=Kt(n,e),n.g.has(e)}m.forEach=function(n,e){nt(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};m.ta=function(){nt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};m.Z=function(n){nt(this);let e=[];if(typeof n=="string")wu(this,n)&&(e=e.concat(this.g.get(Kt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};m.set=function(n,e){return nt(this),this.i=null,n=Kt(this,n),wu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};m.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function _u(n,e,t){vu(n,e),0<t.length&&(n.i=null,n.g.set(Kt(n,e),Dr(t)),n.h+=t.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function Kt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Tg(n,e){e&&!n.j&&(nt(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(vu(this,s),_u(this,i,t))},n)),n.j=e}var Sg=class{constructor(n,e){this.g=n,this.map=e}};function Eu(n){this.l=n||Ag,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ag=10;function Iu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Tu(n){return n.h?1:n.g?n.g.size:0}function tr(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function zr(n,e){n.g?n.g.add(e):n.h=e}function Su(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Eu.prototype.cancel=function(){if(this.i=Au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Au(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Dr(n.i)}var Cg=class{stringify(n){return A.JSON.stringify(n,void 0)}parse(n){return A.JSON.parse(n,void 0)}};function kg(){this.g=new Cg}function bg(n,e,t){const s=t||"";try{mu(n,function(i,r){let o=i;Ws(i)&&(o=Ur(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Rg(n,e){const t=new ei;if(A.Image){const s=new Image;s.onload=ts(ss,t,s,"TestLoadImage: loaded",!0,e),s.onerror=ts(ss,t,s,"TestLoadImage: error",!1,e),s.onabort=ts(ss,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=ts(ss,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function ss(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function zn(n){this.l=n.fc||null,this.j=n.ob||!1}Q(zn,Br);zn.prototype.g=function(){return new oi(this.l,this.j)};zn.prototype.i=function(n){return function(){return n}}({});function oi(n,e){W.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Hr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(oi,W);var Hr=0;m=oi.prototype;m.open=function(n,e){if(this.readyState!=Hr)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,An(this)};m.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=Hr};m.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Cu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}m.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Hn(this):An(this),this.readyState==3&&Cu(this)}};m.Za=function(n){this.g&&(this.response=this.responseText=n,Hn(this))};m.Ya=function(n){this.g&&(this.response=n,Hn(this))};m.ka=function(){this.g&&Hn(this)};function Hn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,An(n)}m.setRequestHeader=function(n,e){this.v.append(n,e)};m.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function An(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Ng=A.JSON.parse;function B(n){W.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ku,this.L=this.M=!1}Q(B,W);var ku="",Dg=/^https?$/i,Og=["POST","PUT"];m=B.prototype;m.Oa=function(n){this.M=n};m.ha=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?ia(this.u):ia(Xi),this.g.onreadystatechange=se(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){aa(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=A.FormData&&n instanceof A.FormData,!(0<=Hc(Og,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Nu(this),0<this.B&&((this.L=Pg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=se(this.ua,this)):this.A=$r(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){aa(this,r)}};function Pg(n){return xt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}m.ua=function(){typeof Nr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function aa(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,bu(n),ai(n)}function bu(n){n.F||(n.F=!0,J(n,"complete"),J(n,"error"))}m.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,J(this,"complete"),J(this,"abort"),ai(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ai(this,!0)),B.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?Ru(this):this.kb())};m.kb=function(){Ru(this)};function Ru(n){if(n.h&&typeof Nr<"u"&&(!n.C[1]||Ee(n)!=4||n.da()!=2)){if(n.v&&Ee(n)==4)$r(n.La,0,n);else if(J(n,"readystatechange"),Ee(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=o===0){var i=String(n.I).match(yu)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),s=!Dg.test(i?i.toLowerCase():"")}t=s}if(t)J(n,"complete"),J(n,"success");else{n.m=6;try{var r=2<Ee(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",bu(n)}}finally{ai(n)}}}}function ai(n,e){if(n.g){Nu(n);const t=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||J(n,"ready");try{t.onreadystatechange=s}catch{}}}function Nu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}m.isActive=function(){return!!this.g};function Ee(n){return n.g?n.g.readyState:0}m.da=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Ng(e)}};function ca(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case ku:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Lg(n){const e={};n=(n.g&&2<=Ee(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(vn(n[s]))continue;var t=rg(n[s]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[i]||[];e[i]=r,r.push(t)}Xp(e,function(s){return s.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Du(n){let e="";return Pr(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Kr(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Du(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):x(n,e,t))}function Zt(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ou(n){this.Ga=0,this.j=[],this.l=new ei,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Zt("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Zt("baseRetryDelayMs",5e3,n),this.hb=Zt("retryDelaySeedMs",1e4,n),this.eb=Zt("forwardChannelMaxRetries",2,n),this.xa=Zt("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Eu(n&&n.concurrentRequestLimit),this.Ja=new kg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=Ou.prototype;m.ra=8;m.H=1;function Gr(n){if(Pu(n),n.H==3){var e=n.W++,t=xe(n.I);if(x(t,"SID",n.K),x(t,"RID",e),x(t,"TYPE","terminate"),Kn(n,t),e=new jn(n,n.l,e),e.L=2,e.v=ri(xe(t)),t=!1,A.navigator&&A.navigator.sendBeacon)try{t=A.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=Bu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qn(e)}Vu(n)}function ci(n){n.g&&(Qr(n),n.g.cancel(),n.g=null)}function Pu(n){ci(n),n.u&&(A.clearTimeout(n.u),n.u=null),Ds(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function ui(n){if(!Iu(n.i)&&!n.m){n.m=!0;var e=n.Na;_n||nu(),En||(_n(),En=!0),Fr.add(e,n),n.C=0}}function Mg(n,e){return Tu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=$n(se(n.Na,n,e),Fu(n,n.C)),n.C++,!0)}m.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new jn(this,this.l,n);let r=this.s;if(this.U&&(r?(r=Qc(r),Yc(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var s=this.j[t];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Lu(this,i,e),t=xe(this.I),x(t,"RID",n),x(t,"CVER",22),this.F&&x(t,"X-HTTP-Session-Id",this.F),Kn(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Du(r)))+"&"+e:this.o&&Kr(t,this.o,r)),zr(this.i,i),this.bb&&x(t,"TYPE","init"),this.P?(x(t,"$req",e),x(t,"SID","null"),i.aa=!0,Zi(i,t,null)):Zi(i,t,e),this.H=2}}else this.H==3&&(n?ua(this,n):this.j.length==0||Iu(this.i)||ua(this))};function ua(n,e){var t;e?t=e.m:t=n.W++;const s=xe(n.I);x(s,"SID",n.K),x(s,"RID",t),x(s,"AID",n.V),Kn(n,s),n.o&&n.s&&Kr(s,n.o,n.s),t=new jn(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Lu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),zr(n.i,t),Zi(t,s,e)}function Kn(n,e){n.na&&Pr(n.na,function(t,s){x(e,s,t)}),n.h&&mu({},function(t,s){x(e,s,t)})}function Lu(n,e,t){t=Math.min(n.j.length,t);var s=n.h?se(n.h.Va,n.h,n):null;e:{var i=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=r,0>u)r=Math.max(0,i[c].g-100),a=!1;else try{bg(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,s}function Mu(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;_n||nu(),En||(_n(),En=!0),Fr.add(e,n),n.A=0}}function Wr(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=$n(se(n.Ma,n),Fu(n,n.A)),n.A++,!0)}m.Ma=function(){if(this.u=null,xu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=$n(se(this.jb,this),n)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),ci(this),xu(this))};function Qr(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function xu(n){n.g=new jn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=xe(n.wa);x(e,"RID","rpc"),x(e,"SID",n.K),x(e,"AID",n.V),x(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&x(e,"TO",n.qa),x(e,"TYPE","xmlhttp"),Kn(n,e),n.o&&n.s&&Kr(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=ri(xe(e)),t.s=null,t.S=!0,du(t,n)}m.ib=function(){this.v!=null&&(this.v=null,ci(this),Wr(this),ce(19))};function Ds(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Uu(n,e){var t=null;if(n.g==e){Ds(n),Qr(n),n.g=null;var s=2}else if(tr(n.i,e))t=e.F,Su(n.i,e),s=1;else return;if(n.H!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;s=ti(),J(s,new cu(s,t)),ui(n)}else Mu(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&Mg(n,e)||s==2&&Wr(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:at(n,5);break;case 4:at(n,10);break;case 3:at(n,6);break;default:at(n,2)}}}function Fu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function at(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var s=se(n.pb,n);t||(t=new lt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Rs(t,"https"),ri(t)),Rg(t.toString(),s)}else ce(2);n.H=0,n.h&&n.h.za(e),Vu(n),Pu(n)}m.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function Vu(n){if(n.H=0,n.ma=[],n.h){const e=Au(n.i);(e.length!=0||n.j.length!=0)&&(Zo(n.ma,e),Zo(n.ma,n.j),n.i.i.length=0,Dr(n.j),n.j.length=0),n.h.ya()}}function $u(n,e,t){var s=t instanceof lt?xe(t):new lt(t);if(s.g!="")e&&(s.g=e+"."+s.g),Ns(s,s.m);else{var i=A.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new lt(null);s&&Rs(r,s),e&&(r.g=e),i&&Ns(r,i),t&&(r.l=t),s=r}return t=n.F,e=n.Da,t&&e&&x(s,t,e),x(s,"VER",n.ra),Kn(n,s),s}function Bu(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new B(new zn({ob:!0})):new B(n.va),e.Oa(n.J),e}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function ju(){}m=ju.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Os(){if(xt&&!(10<=Number(Gp)))throw Error("Environmental error: no available transport.")}Os.prototype.g=function(n,e){return new le(n,e)};function le(n,e){W.call(this),this.g=new Ou(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!vn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Gt(this)}Q(le,W);le.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=$u(n,null,n.Y),ui(n)};le.prototype.close=function(){Gr(this.g)};le.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ur(n),n=t);e.j.push(new Sg(e.fb++,n)),e.H==3&&ui(e)};le.prototype.N=function(){this.g.h=null,delete this.j,Gr(this.g),delete this.g,le.$.N.call(this)};function qu(n){jr.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Q(qu,jr);function zu(){qr.call(this),this.status=1}Q(zu,qr);function Gt(n){this.g=n}Q(Gt,ju);Gt.prototype.Ba=function(){J(this.g,"a")};Gt.prototype.Aa=function(n){J(this.g,new qu(n))};Gt.prototype.za=function(n){J(this.g,new zu)};Gt.prototype.ya=function(){J(this.g,"b")};function xg(){this.blockSize=-1}function ve(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Q(ve,xg);ve.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Li(n,e,t){t||(t=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)s[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var r=n.g[3],o=e+(r^t&(i^r))+s[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(t^i))+s[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^r)+s[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~r))+s[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+r&4294967295}ve.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=t;)Li(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(s[i++]=n.charCodeAt(r++),i==this.blockSize){Li(this,s),i=0;break}}else for(;r<e;)if(s[i++]=n[r++],i==this.blockSize){Li(this,s),i=0;break}}this.h=i,this.i+=e};ve.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var s=0;32>s;s+=8)n[t++]=this.g[e]>>>s&255;return n};function O(n,e){this.h=e;for(var t=[],s=!0,i=n.length-1;0<=i;i--){var r=n[i]|0;s&&r==e||(t[i]=r,s=!1)}this.g=t}var Ug={};function Yr(n){return-128<=n&&128>n?zp(n,function(e){return new O([e|0],0>e?-1:0)}):new O([n|0],0>n?-1:0)}function Ie(n){if(isNaN(n)||!isFinite(n))return Dt;if(0>n)return X(Ie(-n));for(var e=[],t=1,s=0;n>=t;s++)e[s]=n/t|0,t*=nr;return new O(e,0)}function Hu(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return X(Hu(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ie(Math.pow(e,8)),s=Dt,i=0;i<n.length;i+=8){var r=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+r),e);8>r?(r=Ie(Math.pow(e,r)),s=s.R(r).add(Ie(o))):(s=s.R(t),s=s.add(Ie(o)))}return s}var nr=4294967296,Dt=Yr(0),sr=Yr(1),la=Yr(16777216);m=O.prototype;m.ea=function(){if(de(this))return-X(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var s=this.D(t);n+=(0<=s?s:nr+s)*e,e*=nr}return n};m.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Pe(this))return"0";if(de(this))return"-"+X(this).toString(n);for(var e=Ie(Math.pow(n,6)),t=this,s="";;){var i=Ls(t,e).g;t=Ps(t,i.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Pe(t))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};m.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Pe(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function de(n){return n.h==-1}m.X=function(n){return n=Ps(this,n),de(n)?-1:Pe(n)?0:1};function X(n){for(var e=n.g.length,t=[],s=0;s<e;s++)t[s]=~n.g[s];return new O(t,~n.h).add(sr)}m.abs=function(){return de(this)?X(this):this};m.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(n.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,t[i]=o<<16|r}return new O(t,t[t.length-1]&-2147483648?-1:0)};function Ps(n,e){return n.add(X(e))}m.R=function(n){if(Pe(this)||Pe(n))return Dt;if(de(this))return de(n)?X(this).R(X(n)):X(X(this).R(n));if(de(n))return X(this.R(X(n)));if(0>this.X(la)&&0>n.X(la))return Ie(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],s=0;s<2*e;s++)t[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<n.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*s+2*i]+=o*c,is(t,2*s+2*i),t[2*s+2*i+1]+=r*c,is(t,2*s+2*i+1),t[2*s+2*i+1]+=o*a,is(t,2*s+2*i+1),t[2*s+2*i+2]+=r*a,is(t,2*s+2*i+2)}for(s=0;s<e;s++)t[s]=t[2*s+1]<<16|t[2*s];for(s=e;s<2*e;s++)t[s]=0;return new O(t,0)};function is(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function en(n,e){this.g=n,this.h=e}function Ls(n,e){if(Pe(e))throw Error("division by zero");if(Pe(n))return new en(Dt,Dt);if(de(n))return e=Ls(X(n),e),new en(X(e.g),X(e.h));if(de(e))return e=Ls(n,X(e)),new en(X(e.g),e.h);if(30<n.g.length){if(de(n)||de(e))throw Error("slowDivide_ only works with positive integers.");for(var t=sr,s=e;0>=s.X(n);)t=ha(t),s=ha(s);var i=St(t,1),r=St(s,1);for(s=St(s,2),t=St(t,2);!Pe(s);){var o=r.add(s);0>=o.X(n)&&(i=i.add(t),r=o),s=St(s,1),t=St(t,1)}return e=Ps(n,i.R(e)),new en(i,e)}for(i=Dt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),s=Math.ceil(Math.log(t)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Ie(t),o=r.R(e);de(o)||0<o.X(n);)t-=s,r=Ie(t),o=r.R(e);Pe(r)&&(r=sr),i=i.add(r),n=Ps(n,o)}return new en(i,n)}m.gb=function(n){return Ls(this,n).h};m.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)&n.D(s);return new O(t,this.h&n.h)};m.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)|n.D(s);return new O(t,this.h|n.h)};m.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)^n.D(s);return new O(t,this.h^n.h)};function ha(n){for(var e=n.g.length+1,t=[],s=0;s<e;s++)t[s]=n.D(s)<<1|n.D(s-1)>>>31;return new O(t,n.h)}function St(n,e){var t=e>>5;e%=32;for(var s=n.g.length-t,i=[],r=0;r<s;r++)i[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new O(i,n.h)}Os.prototype.createWebChannel=Os.prototype.g;le.prototype.send=le.prototype.u;le.prototype.open=le.prototype.m;le.prototype.close=le.prototype.close;ni.NO_ERROR=0;ni.TIMEOUT=8;ni.HTTP_ERROR=6;uu.COMPLETE="complete";lu.EventType=Bn;Bn.OPEN="a";Bn.CLOSE="b";Bn.ERROR="c";Bn.MESSAGE="d";W.prototype.listen=W.prototype.O;B.prototype.listenOnce=B.prototype.P;B.prototype.getLastError=B.prototype.Sa;B.prototype.getLastErrorCode=B.prototype.Ia;B.prototype.getStatus=B.prototype.da;B.prototype.getResponseJson=B.prototype.Wa;B.prototype.getResponseText=B.prototype.ja;B.prototype.send=B.prototype.ha;B.prototype.setWithCredentials=B.prototype.Oa;ve.prototype.digest=ve.prototype.l;ve.prototype.reset=ve.prototype.reset;ve.prototype.update=ve.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=Ie;O.fromString=Hu;var Fg=function(){return new Os},Vg=function(){return ti()},Mi=ni,$g=uu,Bg=_t,da={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jg=zn,rs=lu,qg=B,zg=ve,Ot=O;const fa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new _r("@firebase/firestore");function pa(){return mt.logLevel}function v(n,...e){if(mt.logLevel<=N.DEBUG){const t=e.map(Xr);mt.debug(`Firestore (${Wt}): ${n}`,...t)}}function Ue(n,...e){if(mt.logLevel<=N.ERROR){const t=e.map(Xr);mt.error(`Firestore (${Wt}): ${n}`,...t)}}function Ut(n,...e){if(mt.logLevel<=N.WARN){const t=e.map(Xr);mt.warn(`Firestore (${Wt}): ${n}`,...t)}}function Xr(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n="Unexpected state"){const e=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+n;throw Ue(e),new Error(e)}function F(n,e){n||S()}function k(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Re{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ee.UNAUTHENTICATED))}shutdown(){}}class Kg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Gg{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new We;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new We,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new We)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(F(typeof s.accessToken=="string"),new Ku(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new ee(e)}}class Wg{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qg{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new Wg(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xg{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.T=t.token,new Yg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Jg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function D(n,e){return n<e?-1:n>e?1:0}function Ft(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new K(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new K(0,0))}static max(){return new C(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,s){t===void 0?t=0:t>e.length&&S(),s===void 0?s=e.length-t:s>e.length-t&&S(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class U extends Cn{construct(e,t,s){return new U(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new U(t)}static emptyPath(){return new U([])}}const Zg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends Cn{construct(e,t,s){return new ne(e,t,s)}static isValidIdentifier(e){return Zg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(t)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(U.fromString(e))}static fromName(e){return new E(U.fromString(e).popFirst(5))}static empty(){return new E(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new U(e.slice()))}}function em(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new K(t+1,0):new K(t,s));return new Xe(i,E.empty(),e)}function tm(n){return new Xe(n.readTime,n.key,-1)}class Xe{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Xe(C.min(),E.empty(),-1)}static max(){return new Xe(C.max(),E.empty(),-1)}}function nm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=E.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class im{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==sm)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,s)=>{t(e)})}static reject(e){return new p((t,s)=>{s(e)})}static waitFor(e){return new p((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=p.resolve(!1);for(const s of e)t=t.next(i=>i?p.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new p((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,t){return new p((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function Wn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Jr.ct=-1;function li(n){return n==null}function Ms(n){return n===0&&1/n==-1/0}function rm(n){return typeof n=="number"&&Number.isInteger(n)&&!Ms(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.comparator=e,this.root=t||Y.EMPTY}insert(e,t){return new $(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Y.BLACK,null,null))}remove(e){return new $(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Y.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new os(this.root,e,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new os(this.root,e,this.comparator,!0)}}class os{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Y{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Y.RED,this.left=i??Y.EMPTY,this.right=r??Y.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Y(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Y.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Y.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}Y.EMPTY=null,Y.RED=!0,Y.BLACK=!1;Y.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,s,i){return this}insert(n,e,t){return new Y(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.comparator=e,this.data=new $(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ma(this.data.getIterator())}getIteratorFrom(e){return new ma(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new re(this.comparator);return t.data=e,t}}class ma{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.fields=e,e.sort(ne.comparator)}static empty(){return new ge([])}unionWith(e){let t=new re(ne.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ft(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qu("Invalid base64 string: "+i):i}}(e);return new ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const om=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(n){if(F(!!n),typeof n=="string"){let e=0;const t=om.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:q(n.seconds),nanos:q(n.nanos)}}function q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?ae.fromBase64String(n):ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function eo(n){const e=n.mapValue.fields.__previous_value__;return Zr(e)?eo(e):e}function kn(n){const e=Je(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t,s,i,r,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class bn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={mapValue:{}};function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zr(n)?4:cm(n)?9007199254740991:10:S()}function ke(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kn(n).isEqual(kn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Je(s.timestampValue),o=Je(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return yt(s.bytesValue).isEqual(yt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return q(s.geoPointValue.latitude)===q(i.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return q(s.integerValue)===q(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=q(s.doubleValue),o=q(i.doubleValue);return r===o?Ms(r)===Ms(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Ft(n.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ga(r)!==ga(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ke(r[a],o[a])))return!1;return!0}(n,e);default:return S()}}function Rn(n,e){return(n.values||[]).find(t=>ke(t,e))!==void 0}function Vt(n,e){if(n===e)return 0;const t=vt(n),s=vt(e);if(t!==s)return D(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=q(i.integerValue||i.doubleValue),a=q(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return ya(n.timestampValue,e.timestampValue);case 4:return ya(kn(n),kn(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,r){const o=yt(i),a=yt(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=D(q(i.latitude),q(r.latitude));return o!==0?o:D(q(i.longitude),q(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Vt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===as.mapValue&&r===as.mapValue)return 0;if(i===as.mapValue)return 1;if(r===as.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Vt(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function ya(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Je(n),s=Je(e),i=D(t.seconds,s.seconds);return i!==0?i:D(t.nanos,s.nanos)}function $t(n){return ir(n)}function ir(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Je(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?yt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,E.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ir(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ir(s.fields[a])}`;return r+"}"}(n.mapValue):S();var e,t}function va(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function rr(n){return!!n&&"integerValue"in n}function to(n){return!!n&&"arrayValue"in n}function wa(n){return!!n&&"nullValue"in n}function _a(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gs(n){return!!n&&"mapValue"in n}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=hn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.value=e}static empty(){return new fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hn(t)}setAll(e){let t=ne.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=hn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];gs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Qt(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new fe(hn(this.value))}}function Yu(n){const e=[];return Qt(n.fields,(t,s)=>{const i=new ne([t]);if(gs(s)){const r=Yu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ge(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new te(e,0,C.min(),C.min(),C.min(),fe.empty(),0)}static newFoundDocument(e,t,s,i){return new te(e,1,t,C.min(),s,i,0)}static newNoDocument(e,t){return new te(e,2,t,C.min(),C.min(),fe.empty(),0)}static newUnknownDocument(e,t){return new te(e,3,t,C.min(),C.min(),fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.position=e,this.inclusive=t}}function Ea(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),t.key):s=Vt(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ia(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t="asc"){this.field=e,this.dir=t}}function um(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{}class z extends Xu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new hm(e,t,s):t==="array-contains"?new pm(e,s):t==="in"?new gm(e,s):t==="not-in"?new mm(e,s):t==="array-contains-any"?new ym(e,s):new z(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new dm(e,s):new fm(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Vt(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison(Vt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class we extends Xu{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new we(e,t)}matches(e){return Ju(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ju(n){return n.op==="and"}function Zu(n){return lm(n)&&Ju(n)}function lm(n){for(const e of n.filters)if(e instanceof we)return!1;return!0}function or(n){if(n instanceof z)return n.field.canonicalString()+n.op.toString()+$t(n.value);if(Zu(n))return n.filters.map(e=>or(e)).join(",");{const e=n.filters.map(t=>or(t)).join(",");return`${n.op}(${e})`}}function el(n,e){return n instanceof z?function(t,s){return s instanceof z&&t.op===s.op&&t.field.isEqual(s.field)&&ke(t.value,s.value)}(n,e):n instanceof we?function(t,s){return s instanceof we&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&el(r,s.filters[o]),!0):!1}(n,e):void S()}function tl(n){return n instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${$t(e.value)}`}(n):n instanceof we?function(e){return e.op.toString()+" {"+e.getFilters().map(tl).join(" ,")+"}"}(n):"Filter"}class hm extends z{constructor(e,t,s){super(e,t,s),this.key=E.fromName(s.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class dm extends z{constructor(e,t){super(e,"in",t),this.keys=nl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fm extends z{constructor(e,t){super(e,"not-in",t),this.keys=nl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>E.fromName(s.referenceValue))}class pm extends z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return to(t)&&Rn(t.arrayValue,this.value)}}class gm extends z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rn(this.value.arrayValue,t)}}class mm extends z{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Rn(this.value.arrayValue,t)}}class ym extends z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!to(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Rn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Ta(n,e=null,t=[],s=[],i=null,r=null,o=null){return new vm(n,e,t,s,i,r,o)}function no(n){const e=k(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>or(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>$t(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>$t(s)).join(",")),e.dt=t}return e.dt}function so(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!um(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!el(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ia(n.startAt,e.startAt)&&Ia(n.endAt,e.endAt)}function ar(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function wm(n,e,t,s,i,r,o,a){return new Qn(n,e,t,s,i,r,o,a)}function hi(n){return new Qn(n)}function Sa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sl(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function io(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function il(n){return n.collectionGroup!==null}function Pt(n){const e=k(n);if(e.wt===null){e.wt=[];const t=io(e),s=sl(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new dn(t)),e.wt.push(new dn(ne.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new dn(ne.keyField(),r))}}}return e.wt}function Fe(n){const e=k(n);if(!e._t)if(e.limitType==="F")e._t=Ta(e.path,e.collectionGroup,Pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Pt(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new dn(r.field,o))}const s=e.endAt?new xs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xs(e.startAt.position,e.startAt.inclusive):null;e._t=Ta(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function cr(n,e){e.getFirstInequalityField(),io(n);const t=n.filters.concat([e]);return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ur(n,e,t){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function di(n,e){return so(Fe(n),Fe(e))&&n.limitType===e.limitType}function rl(n){return`${no(Fe(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>tl(s)).join(", ")}]`),li(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>$t(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>$t(s)).join(",")),`Target(${t})`}(Fe(n))}; limitType=${n.limitType})`}function fi(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):E.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of Pt(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=Ea(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,Pt(t),s)||t.endAt&&!function(i,r,o){const a=Ea(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,Pt(t),s))}(n,e)}function _m(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ol(n){return(e,t)=>{let s=!1;for(const i of Pt(n)){const r=Em(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Em(n,e,t){const s=n.field.isKeyField()?E.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Vt(a,c):S()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qt(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Wu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new $(E.comparator);function Ve(){return Im}const al=new $(E.comparator);function on(...n){let e=al;for(const t of n)e=e.insert(t.key,t);return e}function cl(n){let e=al;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ct(){return fn()}function ul(){return fn()}function fn(){return new Yt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Tm=new $(E.comparator),Sm=new re(E.comparator);function b(...n){let e=Sm;for(const t of n)e=e.add(t);return e}const Am=new re(D);function Cm(){return Am}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ms(e)?"-0":e}}function hl(n){return{integerValue:""+n}}function km(n,e){return rm(e)?hl(e):ll(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}function bm(n,e,t){return n instanceof Nn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zr(i)&&(i=eo(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof Dn?fl(n,e):n instanceof On?pl(n,e):function(s,i){const r=dl(s,i),o=Aa(r)+Aa(s.gt);return rr(r)&&rr(s.gt)?hl(o):ll(s.serializer,o)}(n,e)}function Rm(n,e,t){return n instanceof Dn?fl(n,e):n instanceof On?pl(n,e):t}function dl(n,e){return n instanceof Us?rr(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Nn extends pi{}class Dn extends pi{constructor(e){super(),this.elements=e}}function fl(n,e){const t=gl(e);for(const s of n.elements)t.some(i=>ke(i,s))||t.push(s);return{arrayValue:{values:t}}}class On extends pi{constructor(e){super(),this.elements=e}}function pl(n,e){let t=gl(e);for(const s of n.elements)t=t.filter(i=>!ke(i,s));return{arrayValue:{values:t}}}class Us extends pi{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Aa(n){return q(n.integerValue||n.doubleValue)}function gl(n){return to(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.field=e,this.transform=t}}function Dm(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Dn&&s instanceof Dn||t instanceof On&&s instanceof On?Ft(t.elements,s.elements,ke):t instanceof Us&&s instanceof Us?ke(t.gt,s.gt):t instanceof Nn&&s instanceof Nn}(n.transform,e.transform)}class Om{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gi{}function ml(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vl(n.key,Le.none()):new Yn(n.key,n.data,Le.none());{const t=n.data,s=fe.empty();let i=new re(ne.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Et(n.key,s,new ge(i.toArray()),Le.none())}}function Pm(n,e,t){n instanceof Yn?function(s,i,r){const o=s.value.clone(),a=ka(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Et?function(s,i,r){if(!ms(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ka(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(yl(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function pn(n,e,t,s){return n instanceof Yn?function(i,r,o,a){if(!ms(i.precondition,r))return o;const c=i.value.clone(),u=ba(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Et?function(i,r,o,a){if(!ms(i.precondition,r))return o;const c=ba(i.fieldTransforms,a,r),u=r.data;return u.setAll(yl(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(i,r,o){return ms(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function Lm(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=dl(s.transform,i||null);r!=null&&(t===null&&(t=fe.empty()),t.set(s.field,r))}return t||null}function Ca(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Ft(t,s,(i,r)=>Dm(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yn extends gi{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Et extends gi{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ka(n,e,t){const s=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Rm(o,a,t[i]))}return s}function ba(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,bm(r,o,e))}return s}class vl extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mm extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Pm(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=pn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=pn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ul();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=ml(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),b())}isEqual(e){return this.batchId===e.batchId&&Ft(this.mutations,e.mutations,(t,s)=>Ca(t,s))&&Ft(this.baseMutations,e.baseMutations,(t,s)=>Ca(t,s))}}class ro{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){F(e.mutations.length===s.length);let i=Tm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ro(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,R;function Vm(n){switch(n){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function wl(n){if(n===void 0)return Ue("GRPC error has no .code"),f.UNKNOWN;switch(n){case j.OK:return f.OK;case j.CANCELLED:return f.CANCELLED;case j.UNKNOWN:return f.UNKNOWN;case j.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case j.INTERNAL:return f.INTERNAL;case j.UNAVAILABLE:return f.UNAVAILABLE;case j.UNAUTHENTICATED:return f.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case j.NOT_FOUND:return f.NOT_FOUND;case j.ALREADY_EXISTS:return f.ALREADY_EXISTS;case j.PERMISSION_DENIED:return f.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case j.ABORTED:return f.ABORTED;case j.OUT_OF_RANGE:return f.OUT_OF_RANGE;case j.UNIMPLEMENTED:return f.UNIMPLEMENTED;case j.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(R=j||(j={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return cs}static getOrCreateInstance(){return cs===null&&(cs=new oo),cs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let cs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Ot([4294967295,4294967295],0);function Ra(n){const e=$m().encode(n),t=new zg;return t.update(e),new Uint8Array(t.digest())}function Na(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ot([t,s],0),new Ot([i,r],0)]}class ao{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new an(`Invalid padding: ${t}`);if(s<0)throw new an(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new an(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ot.fromNumber(this.It)}Et(e,t,s){let i=e.add(t.multiply(Ot.fromNumber(s)));return i.compare(Bm)===1&&(i=new Ot([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Ra(e),[s,i]=Na(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new ao(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Ra(e),[s,i]=Na(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Xn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new mi(C.min(),i,new $(D),Ve(),b())}}class Xn{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Xn(s,t,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,s,i){this.Pt=e,this.removedTargetIds=t,this.key=s,this.bt=i}}class _l{constructor(e,t){this.targetId=e,this.Vt=t}}class El{constructor(e,t,s=ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Da{constructor(){this.St=0,this.Dt=Pa(),this.Ct=ae.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=b(),t=b(),s=b();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:S()}}),new Xn(this.Ct,this.xt,e,t,s)}Ft(){this.Nt=!1,this.Dt=Pa()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class jm{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ve(),this.zt=Oa(),this.Wt=new $(D)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const s=this.Zt(t);switch(e.state){case 0:this.te(t)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(t);break;case 3:this.te(t)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),s.$t(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((s,i)=>{this.te(i)&&t(i)})}ne(e){var t;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(ar(o))if(i===0){const a=new E(o.path);this.Yt(s,a,te.newNoDocument(a,C.min()))}else F(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(t=oo.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,g,_,T,w,P;const V={localCacheCount:l,existenceFilterCount:h.count},L=h.unchangedNames;return L&&(V.bloomFilter={applied:u===0,hashCount:(d=L?.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(T=(_=(g=L?.bits)===null||g===void 0?void 0:g.bitmap)===null||_===void 0?void 0:_.length)!==null&&T!==void 0?T:0,padding:(P=(w=L?.bits)===null||w===void 0?void 0:w.padding)!==null&&P!==void 0?P:0}),V}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=yt(r).toUint8Array()}catch(l){if(l instanceof Qu)return Ut("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new ao(c,o,a)}catch(l){return Ut(l instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&ar(a.target)){const c=new E(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,te.newNoDocument(c,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let s=b();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new mi(e,t,this.Wt,this.jt,s);return this.jt=Ve(),this.zt=Oa(),this.Wt=new $(D),i}Jt(e,t){if(!this.te(e))return;const s=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,s),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),s&&(this.jt=this.jt.insert(t,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Da,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new re(D),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Da),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Oa(){return new $(E.comparator)}function Pa(){return new $(E.comparator)}const qm={asc:"ASCENDING",desc:"DESCENDING"},zm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hm={and:"AND",or:"OR"};class Km{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hr(n,e){return n.useProto3Json||li(e)?e:{value:e}}function Fs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Il(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Gm(n,e){return Fs(n,e.toTimestamp())}function Ce(n){return F(!!n),C.fromTimestamp(function(e){const t=Je(e);return new K(t.seconds,t.nanos)}(n))}function co(n,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Tl(n){const e=U.fromString(n);return F(kl(e)),e}function dr(n,e){return co(n.databaseId,e.path)}function xi(n,e){const t=Tl(e);if(t.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(Sl(t))}function fr(n,e){return co(n.databaseId,e)}function Wm(n){const e=Tl(n);return e.length===4?U.emptyPath():Sl(e)}function pr(n){return new U(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sl(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function La(n,e,t){return{name:dr(n,e),fields:t.value.mapValue.fields}}function Qm(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(F(u===void 0||typeof u=="string"),ae.fromBase64String(u||"")):(F(u===void 0||u instanceof Uint8Array),ae.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:wl(c.code);return new y(u,c.message||"")}(o);t=new El(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=xi(n,s.document.name),r=Ce(s.document.updateTime),o=s.document.createTime?Ce(s.document.createTime):C.min(),a=new fe({mapValue:{fields:s.document.fields}}),c=te.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];t=new ys(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=xi(n,s.document),r=s.readTime?Ce(s.readTime):C.min(),o=te.newNoDocument(i,r),a=s.removedTargetIds||[];t=new ys([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=xi(n,s.document),r=s.removedTargetIds||[];t=new ys([],r,i,null)}else{if(!("filter"in e))return S();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Fm(i,r),a=s.targetId;t=new _l(a,o)}}return t}function Ym(n,e){let t;if(e instanceof Yn)t={update:La(n,e.key,e.value)};else if(e instanceof vl)t={delete:dr(n,e.key)};else if(e instanceof Et)t={update:La(n,e.key,e.data),updateMask:ry(e.fieldMask)};else{if(!(e instanceof Mm))return S();t={verify:dr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Nn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Dn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof On)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Us)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw S()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(n,e.precondition)),t}function Xm(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?Ce(s.updateTime):Ce(i);return r.isEqual(C.min())&&(r=Ce(i)),new Om(r,s.transformResults||[])}(t,e))):[]}function Jm(n,e){return{documents:[fr(n,e.path)]}}function Zm(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=fr(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=fr(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Cl(we.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:At(l.field),direction:ny(l.dir)}}(u))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=hr(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function ey(n){let e=Wm(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){F(s===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];t.where&&(r=function(l){const h=Al(l);return h instanceof we&&Zu(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new dn(Ct(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,li(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new xs(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new xs(d,h)}(t.endAt)),wm(e,i,o,r,a,"F",c,u)}function ty(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Al(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ct(e.unaryFilter.field);return z.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Ct(e.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ct(e.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ct(e.unaryFilter.field);return z.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return z.create(Ct(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return we.create(e.compositeFilter.filters.map(t=>Al(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function ny(n){return qm[n]}function sy(n){return zm[n]}function iy(n){return Hm[n]}function At(n){return{fieldPath:n.canonicalString()}}function Ct(n){return ne.fromServerFormat(n.fieldPath)}function Cl(n){return n instanceof z?function(e){if(e.op==="=="){if(_a(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NAN"}};if(wa(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_a(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NOT_NAN"}};if(wa(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:At(e.field),op:sy(e.op),value:e.value}}}(n):n instanceof we?function(e){const t=e.getFilters().map(s=>Cl(s));return t.length===1?t[0]:{compositeFilter:{op:iy(e.op),filters:t}}}(n):S()}function ry(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,s,i,r=C.min(),o=C.min(),a=ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ke(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.fe=e}}function ay(n){const e=ey({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ur(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.rn=new uy}addToCollectionParentIndex(e,t){return this.rn.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(Xe.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(Xe.min())}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class uy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new re(U.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new re(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Bt(0)}static Mn(){return new Bt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.changes=new Yt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&pn(s.mutation,i,ge.empty(),K.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,b()).next(()=>s))}getLocalViewOfDocuments(e,t,s=b()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=on();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ct();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,b()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=Ve();const o=fn(),a=fn();return t.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Et)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),pn(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,ge.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new hy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=fn();let i=new $((o,a)=>o-a),r=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=s.get(c)||ge.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||b()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ul();l.forEach(d=>{if(!r.has(d)){const g=ml(t.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):il(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):p.resolve(ct());let a=-1,c=r;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,b())).next(l=>({batchId:a,changes:cl(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new E(t)).next(s=>{let i=on();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=on();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Qn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,te.newInvalidDocument(u)))});let o=on();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&pn(u.mutation,c,ge.empty(),K.now()),fi(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return p.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var s;return this.cs.set(t.id,{id:(s=t).id,version:s.version,createTime:Ce(s.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(s){return{name:s.name,query:ay(s.bundledQuery),readTime:Ce(s.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.overlays=new $(E.comparator),this.ls=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ct();return p.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.we(e,t,r)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const i=ct(),r=t.length+1,o=new E(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new $((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=ct(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}we(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Um(t,s));let r=this.ls.get(t);r===void 0&&(r=b(),this.ls.set(t,r)),this.ls.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.fs=new re(G.ds),this.ws=new re(G._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const s=new G(e,t);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ys(new G(e,t))}ps(e,t){e.forEach(s=>this.removeReference(s,t))}Is(e){const t=new E(new U([])),s=new G(t,e),i=new G(t,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new E(new U([])),s=new G(t,e),i=new G(t,e+1);let r=b();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new G(e,0),s=this.fs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class G{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return E.comparator(e.key,t.key)||D(e.As,t.As)}static _s(e,t){return D(e.As,t.As)||E.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new re(G.ds)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xm(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new G(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.bs(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new G(t,0),i=new G(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new re(D);return t.forEach(i=>{const r=new G(i,0),o=new G(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),p.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new G(new E(r),0);let a=new re(D);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),p.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return p.forEach(t.mutations,i=>{const r=new G(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,t){const s=new G(t,0),i=this.Rs.firstAfterOrEqual(s);return p.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.Ds=e,this.docs=new $(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():te.newInvalidDocument(t))}getEntries(e,t){let s=Ve();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():te.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ve();const o=t.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nm(tm(l),s)<=0||(i.has(l.key)||fi(t,l))&&(r=r.insert(l.key,l.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,t,s,i){S()}Cs(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new yy(this)}getSize(e){return p.resolve(this.size)}}class yy extends ly{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.persistence=e,this.xs=new Yt(t=>no(t),so),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Ns=0,this.ks=new uo,this.targetCount=0,this.Ms=Bt.kn()}forEachTarget(e,t){return this.xs.forEach((s,i)=>t(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ns&&(this.Ns=t),p.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Bt(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Fn(t),p.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.xs.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.ks.gs(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.ks.ps(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ks.Es(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.$s={},this.overlays={},this.Os=new Jr(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new vy(this),this.indexManager=new cy,this.remoteDocumentCache=function(s){return new my(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new oy(t),this.qs=new fy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new py,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.$s[e.toKey()];return s||(s=new gy(t,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,s){v("MemoryPersistence","Starting transaction:",e);const i=new _y(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,t){return p.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,t)))}}class _y extends im{constructor(e){super(),this.currentSequenceNumber=e}}class lo{constructor(e){this.persistence=e,this.Qs=new uo,this.js=null}static zs(e){return new lo(e)}get Ws(){if(this.js)return this.js;throw S()}addReference(e,t,s){return this.Qs.addReference(s,t),this.Ws.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.Qs.removeReference(s,t),this.Ws.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),p.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ws,s=>{const i=E.fromPath(s);return this.Hs(e,i).next(r=>{r||t.removeEntry(i,C.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(s=>{s?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return p.or([()=>p.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Fi=s,this.Bi=i}static Li(e,t){let s=b(),i=b();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ho(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Ki(e,t).next(r=>r||this.Gi(e,t,i,s)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(Sa(t))return p.resolve(null);let s=Fe(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ur(t,null,"F"),s=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=b(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,ur(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,s,i){return Sa(t)||i.isEqual(C.min())?this.Qi(e,t):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(t,r);return this.zi(t,o,s,i)?this.Qi(e,t):(pa()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lr(t)),this.Wi(e,o,t,em(i,-1)))})}ji(e,t){let s=new re(ol(e));return t.forEach((i,r)=>{fi(e,r)&&(s=s.add(r))}),s}zi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,t){return pa()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",lr(t)),this.Ui.getDocumentsMatchingQuery(e,t,Xe.min())}Wi(e,t,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,s,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new $(D),this.Yi=new Yt(r=>no(r),so),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dy(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Ty(n,e,t,s){return new Iy(n,e,t,s)}async function bl(n,e){const t=k(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.tr(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=b();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Sy(n,e){const t=k(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(_=>{const T=c.docVersions.get(g);F(T!==null),_.version.compareTo(T)<0&&(l.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=b();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Rl(n){const e=k(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function Ay(n,e){const t=k(n),s=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,l.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(ae.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),i=i.insert(h,g),function(_,T,w){return _.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,l)&&a.push(t.Bs.updateTargetData(r,g))});let c=Ve(),u=b();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Cy(r,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!s.isEqual(C.min())){const l=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.Ji=i,r))}function Cy(n,e,t){let s=b(),i=b();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Ve();return t.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function ky(n,e){const t=k(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function by(n,e){const t=k(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Bs.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):t.Bs.allocateTargetId(s).next(o=>(i=new Ke(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(s.targetId,s),t.Yi.set(e,s.targetId)),s})}async function gr(n,e,t){const s=k(n),i=s.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Ma(n,e,t){const s=k(n);let i=C.min(),r=b();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=k(a),h=l.Yi.get(u);return h!==void 0?p.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(s,o,Fe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,t?i:C.min(),t?r:b())).next(a=>(Ry(s,_m(e),a),{documents:a,ir:r})))}function Ry(n,e,t){let s=n.Xi.get(e)||C.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Xi.set(e,s)}class xa{constructor(){this.activeTargetIds=Cm()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ny{constructor(){this.Hr=new xa,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,s){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new xa,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us=null;function Ui(){return us===null?us=268435456+Math.round(2147483648*Math.random()):us++,"0x"+us.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class Ly extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,s,i,r){const o=Ui(),a=this.To(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(e,a,c,s).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ut("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(e,t,s,i,r,o){return this.Io(e,t,s,i,r)}Eo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,t){const s=Oy[e];return`${this.mo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,s,i){const r=Ui();return new Promise((o,a)=>{const c=new qg;c.setWithCredentials(!0),c.listenOnce($g.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mi.NO_ERROR:const l=c.getResponseJson();v(Z,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case Mi.TIMEOUT:v(Z,`RPC '${e}' ${r} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Mi.HTTP_ERROR:const h=c.getStatus();if(v(Z,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d?.error;if(g&&g.status&&g.message){const _=function(T){const w=T.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(w)>=0?w:f.UNKNOWN}(g.status);a(new y(_,g.message))}else a(new y(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v(Z,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);v(Z,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}Ro(e,t,s){const i=Ui(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fg(),a=Vg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new jg({})),this.Eo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const l=r.join("");v(Z,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,g=!1;const _=new Py({ro:w=>{g?v(Z,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(v(Z,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),v(Z,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),T=(w,P,V)=>{w.listen(P,L=>{try{V(L)}catch(M){setTimeout(()=>{throw M},0)}})};return T(h,rs.EventType.OPEN,()=>{g||v(Z,`RPC '${e}' stream ${i} transport opened.`)}),T(h,rs.EventType.CLOSE,()=>{g||(g=!0,v(Z,`RPC '${e}' stream ${i} transport closed`),_.wo())}),T(h,rs.EventType.ERROR,w=>{g||(g=!0,Ut(Z,`RPC '${e}' stream ${i} transport errored:`,w),_.wo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),T(h,rs.EventType.MESSAGE,w=>{var P;if(!g){const V=w.data[0];F(!!V);const L=V,M=L.error||((P=L[0])===null||P===void 0?void 0:P.error);if(M){v(Z,`RPC '${e}' stream ${i} received error:`,M);const he=M.status;let pe=function(it){const Tt=j[it];if(Tt!==void 0)return wl(Tt)}(he),st=M.message;pe===void 0&&(pe=f.INTERNAL,st="Unknown error status: "+he+" with message "+M.message),g=!0,_.wo(new y(pe,st)),h.close()}else v(Z,`RPC '${e}' stream ${i} received:`,V),_._o(V)}}),T(a,Bg.STAT_EVENT,w=>{w.stat===da.PROXY?v(Z,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===da.NOPROXY&&v(Z,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function Fi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){return new Km(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,s,i,r,o,a,c){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Nl(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Ue(t.toString()),Ue("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===t&&this.Zo(s,i)},s=>{e(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,t){const s=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class My extends Dl{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=Qm(this.serializer,e),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?Ce(r.readTime):C.min()}(e);return this.listener.nu(t,s)}su(e){const t={};t.database=pr(this.serializer),t.addTarget=function(i,r){let o;const a=r.target;if(o=ar(a)?{documents:Jm(i,a)}:{query:Zm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Il(i,r.resumeToken);const c=hr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(C.min())>0){o.readTime=Fs(i,r.snapshotVersion.toTimestamp());const c=hr(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=ty(this.serializer,e);s&&(t.labels=s),this.Wo(t)}iu(e){const t={};t.database=pr(this.serializer),t.removeTarget=e,this.Wo(t)}}class xy extends Dl{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=Xm(e.writeResults,e.commitTime),s=Ce(e.commitTime);return this.listener.cu(s,t)}return F(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=pr(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ym(this.serializer,s))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}vo(e,t,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Fy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ue(t),this.mu=!1):v("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{It(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c.vu.add(4),await Jn(c),c.bu.set("Unknown"),c.vu.delete(4),await vi(c)}(this))})}),this.bu=new Fy(s,i)}}async function vi(n){if(It(n))for(const e of n.Ru)await e(!0)}async function Jn(n){for(const e of n.Ru)await e(!1)}function Ol(n,e){const t=k(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),go(t)?po(t):Xt(t).Ko()&&fo(t,e))}function Pl(n,e){const t=k(n),s=Xt(t);t.Au.delete(e),s.Ko()&&Ll(t,e),t.Au.size===0&&(s.Ko()?s.jo():It(t)&&t.bu.set("Unknown"))}function fo(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(C.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xt(n).su(e)}function Ll(n,e){n.Vu.qt(e),Xt(n).iu(e)}function po(n){n.Vu=new jm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Xt(n).start(),n.bu.gu()}function go(n){return It(n)&&!Xt(n).Uo()&&n.Au.size>0}function It(n){return k(n).vu.size===0}function Ml(n){n.Vu=void 0}async function $y(n){n.Au.forEach((e,t)=>{fo(n,e)})}async function By(n,e){Ml(n),go(n)?(n.bu.Iu(e),po(n)):n.bu.set("Unknown")}async function jy(n,e,t){if(n.bu.set("Online"),e instanceof El&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(n,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vs(n,s)}else if(e instanceof ys?n.Vu.Ht(e):e instanceof _l?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(C.min()))try{const s=await Rl(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ae.EMPTY_BYTE_STRING,u.snapshotVersion)),Ll(i,a);const l=new Ke(u.target,a,c,u.sequenceNumber);fo(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Vs(n,s)}}async function Vs(n,e,t){if(!Wn(e))throw e;n.vu.add(1),await Jn(n),n.bu.set("Offline"),t||(t=()=>Rl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await vi(n)})}function xl(n,e){return e().catch(t=>Vs(n,t,e))}async function wi(n){const e=k(n),t=Ze(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;qy(e);)try{const i=await ky(e.localStore,s);if(i===null){e.Eu.length===0&&t.jo();break}s=i.batchId,zy(e,i)}catch(i){await Vs(e,i)}Ul(e)&&Fl(e)}function qy(n){return It(n)&&n.Eu.length<10}function zy(n,e){n.Eu.push(e);const t=Ze(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Ul(n){return It(n)&&!Ze(n).Uo()&&n.Eu.length>0}function Fl(n){Ze(n).start()}async function Hy(n){Ze(n).hu()}async function Ky(n){const e=Ze(n);for(const t of n.Eu)e.uu(t.mutations)}async function Gy(n,e,t){const s=n.Eu.shift(),i=ro.from(s,e,t);await xl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await wi(n)}async function Wy(n,e){e&&Ze(n).ou&&await async function(t,s){if(i=s.code,Vm(i)&&i!==f.ABORTED){const r=t.Eu.shift();Ze(t).Qo(),await xl(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await wi(t)}var i}(n,e),Ul(n)&&Fl(n)}async function Fa(n,e){const t=k(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=It(t);t.vu.add(3),await Jn(t),s&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await vi(t)}async function Qy(n,e){const t=k(n);e?(t.vu.delete(2),await vi(t)):e||(t.vu.add(2),await Jn(t),t.bu.set("Unknown"))}function Xt(n){return n.Su||(n.Su=function(e,t,s){const i=k(e);return i.fu(),new My(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:$y.bind(null,n),ao:By.bind(null,n),nu:jy.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),go(n)?po(n):n.bu.set("Unknown")):(await n.Su.stop(),Ml(n))})),n.Su}function Ze(n){return n.Du||(n.Du=function(e,t,s){const i=k(e);return i.fu(),new xy(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:Hy.bind(null,n),ao:Wy.bind(null,n),au:Ky.bind(null,n),cu:Gy.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await wi(n)):(await n.Du.stop(),n.Eu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new mo(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yo(n,e){if(Ue("AsyncQueue",`${e}: ${n}`),Wn(n))return new y(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||E.comparator(t.key,s.key):(t,s)=>E.comparator(t.key,s.key),this.keyedMap=on(),this.sortedSet=new $(this.comparator)}static emptySet(e){return new Lt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Lt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.Cu=new $(E.comparator)}track(e){const t=e.doc.key,s=this.Cu.get(t);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(t):e.type===1&&s.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):S():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,s)=>{e.push(s)}),e}}class jt{constructor(e,t,s,i,r,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new jt(e,t,Lt.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&di(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Nu=void 0,this.listeners=[]}}class Xy{constructor(){this.queries=new Yt(e=>rl(e),di),this.onlineState="Unknown",this.ku=new Set}}async function Vl(n,e){const t=k(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Yy),i)try{r.Nu=await t.onListen(s)}catch(o){const a=yo(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&vo(t)}async function $l(n,e){const t=k(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function Jy(n,e){const t=k(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&vo(t)}function Zy(n,e,t){const s=k(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function vo(n){n.ku.forEach(e=>{e.next()})}class Bl{constructor(e,t,s){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new jt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=jt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.key=e}}class ql{constructor(e){this.key=e}}class ev{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=b(),this.mutatedKeys=b(),this.tc=ol(e),this.ec=new Lt(this.tc)}get nc(){return this.Yu}sc(e,t){const s=t?t.ic:new Va,i=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),g=fi(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?_!==T&&(s.track({type:3,doc:g}),w=!0):this.rc(d,g)||(s.track({type:2,doc:g}),w=!0,(c&&this.tc(g,c)>0||u&&this.tc(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),w=!0):d&&!g&&(s.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(g?(o=o.add(g),r=T?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((u,l)=>function(h,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return g(h)-g(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(s);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new jt(this.query,e.ec,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Va,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=b(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const t=[];return e.forEach(s=>{this.Zu.has(s)||t.push(new ql(s))}),this.Zu.forEach(s=>{e.has(s)||t.push(new jl(s))}),t}hc(e){this.Yu=e.ir,this.Zu=b();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return jt.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class tv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class nv{constructor(e){this.key=e,this.fc=!1}}class sv{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Yt(a=>rl(a),di),this._c=new Map,this.mc=new Set,this.gc=new $(E.comparator),this.yc=new Map,this.Ic=new uo,this.Tc={},this.Ec=new Map,this.Ac=Bt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function iv(n,e){const t=pv(n);let s,i;const r=t.wc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await by(t.localStore,Fe(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await rv(t,e,s,a==="current",o.resumeToken),t.isPrimaryClient&&Ol(t.remoteStore,o)}return i}async function rv(n,e,t,s,i){n.Rc=(h,d,g)=>async function(_,T,w,P){let V=T.view.sc(w);V.zi&&(V=await Ma(_.localStore,T.query,!1).then(({documents:he})=>T.view.sc(he,V)));const L=P&&P.targetChanges.get(T.targetId),M=T.view.applyChanges(V,_.isPrimaryClient,L);return Ba(_,T.targetId,M.cc),M.snapshot}(n,h,d,g);const r=await Ma(n.localStore,e,!0),o=new ev(e,r.ir),a=o.sc(r.documents),c=Xn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ba(n,t,u.cc);const l=new tv(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function ov(n,e){const t=k(n),s=t.wc.get(e),i=t._c.get(s.targetId);if(i.length>1)return t._c.set(s.targetId,i.filter(r=>!di(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await gr(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Pl(t.remoteStore,s.targetId),mr(t,s.targetId)}).catch(Gn)):(mr(t,s.targetId),await gr(t.localStore,s.targetId,!0))}async function av(n,e,t){const s=gv(n);try{const i=await function(r,o){const a=k(r),c=K.now(),u=o.reduce((d,g)=>d.add(g.key),b());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Ve(),_=b();return a.Zi.getEntries(d,u).next(T=>{g=T,g.forEach((w,P)=>{P.isValidDocument()||(_=_.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(T=>{l=T;const w=[];for(const P of o){const V=Lm(P,l.get(P.key).overlayedDocument);V!=null&&w.push(new Et(P.key,V,Yu(V.value.mapValue),Le.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(T=>{h=T;const w=T.applyToLocalDocumentSet(l,_);return a.documentOverlayCache.saveOverlays(d,T.batchId,w)})}).then(()=>({batchId:h.batchId,changes:cl(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new $(D)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Zn(s,i.changes),await wi(s.remoteStore)}catch(i){const r=yo(i,"Failed to persist write");t.reject(r)}}async function zl(n,e){const t=k(n);try{const s=await Ay(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.yc.get(r);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?F(o.fc):i.removedDocuments.size>0&&(F(o.fc),o.fc=!1))}),await Zn(t,s,e)}catch(s){await Gn(s)}}function $a(n,e,t){const s=k(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=k(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&vo(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cv(n,e,t){const s=k(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new $(E.comparator);o=o.insert(r,te.newNoDocument(r,C.min()));const a=b().add(r),c=new mi(C.min(),new Map,new $(D),o,a);await zl(s,c),s.gc=s.gc.remove(r),s.yc.delete(e),wo(s)}else await gr(s.localStore,e,!1).then(()=>mr(s,e,t)).catch(Gn)}async function uv(n,e){const t=k(n),s=e.batch.batchId;try{const i=await Sy(t.localStore,e);Kl(t,s,null),Hl(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Zn(t,i)}catch(i){await Gn(i)}}async function lv(n,e,t){const s=k(n);try{const i=await function(r,o){const a=k(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(F(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Kl(s,e,t),Hl(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Zn(s,i)}catch(i){await Gn(i)}}function Hl(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function Kl(n,e,t){const s=k(n);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function mr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n._c.get(e))n.wc.delete(s),t&&n.dc.Pc(s,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(s=>{n.Ic.containsKey(s)||Gl(n,s)})}function Gl(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(Pl(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),wo(n))}function Ba(n,e,t){for(const s of t)s instanceof jl?(n.Ic.addReference(s.key,e),hv(n,s)):s instanceof ql?(v("SyncEngine","Document no longer in limbo: "+s.key),n.Ic.removeReference(s.key,e),n.Ic.containsKey(s.key)||Gl(n,s.key)):S()}function hv(n,e){const t=e.key,s=t.path.canonicalString();n.gc.get(t)||n.mc.has(s)||(v("SyncEngine","New document in limbo: "+t),n.mc.add(s),wo(n))}function wo(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new E(U.fromString(e)),s=n.Ac.next();n.yc.set(s,new nv(t)),n.gc=n.gc.insert(t,s),Ol(n.remoteStore,new Ke(Fe(hi(t.path)),s,"TargetPurposeLimboResolution",Jr.ct))}}async function Zn(n,e,t){const s=k(n),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){i.push(u);const l=ho.Li(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const u=k(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Wn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,_)}}}(s.localStore,r))}async function dv(n,e){const t=k(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await bl(t.localStore,e);t.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,r))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zn(t,s.er)}}function fv(n,e){const t=k(n),s=t.yc.get(e);if(s&&s.fc)return b().add(s.key);{let i=b();const r=t._c.get(e);if(!r)return i;for(const o of r){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function pv(n){const e=k(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cv.bind(null,e),e.dc.nu=Jy.bind(null,e.eventManager),e.dc.Pc=Zy.bind(null,e.eventManager),e}function gv(n){const e=k(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lv.bind(null,e),e}class ja{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ty(this.persistence,new Ey,e.initialUser,this.serializer)}createPersistence(e){return new wy(lo.zs,this.serializer)}createSharedClientState(e){return new Ny}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$a(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dv.bind(null,this.syncEngine),await Qy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Xy}createDatastore(e){const t=yi(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ly(i));var i;return function(r,o,a,c){return new Uy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>$a(this.syncEngine,a,0),o=Ua.D()?new Ua:new Dy,new Vy(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,u){const l=new sv(s,i,r,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=k(e);v("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Jn(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ue("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ee.UNAUTHENTICATED,this.clientId=Gu.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yo(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vi(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await bl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qa(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wv(n);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>Fa(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Fa(e.remoteStore,r)),n._onlineComponents=e}function vv(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!vv(t))throw t;Ut("Error using user provided cache. Falling back to memory cache: "+t),await Vi(n,new ja)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Vi(n,new ja);return n._offlineComponents}async function Ql(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await qa(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await qa(n,new mv))),n._onlineComponents}function _v(n){return Ql(n).then(e=>e.syncEngine)}async function yr(n){const e=await Ql(n),t=e.eventManager;return t.onListen=iv.bind(null,e.syncEngine),t.onUnlisten=ov.bind(null,e.syncEngine),t}function Ev(n,e,t={}){const s=new We;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new Wl({next:h=>{r.enqueueAndForget(()=>$l(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Bl(hi(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Vl(i,l)}(await yr(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n,e,t){if(!t)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Iv(n,e,t,s){if(e===!0&&s===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ha(n){if(!E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ka(n){if(E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _i(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_i(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Iv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yl((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,t.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,s}}class Ei{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ga({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ga(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Hg;switch(t.type){case"firstParty":return new Qg(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=za.get(e);t&&(v("ComponentProvider","Removing Datastore"),za.delete(e),t.terminate())}(this),Promise.resolve()}}function Tv(n,e,t,s={}){var i;const r=(n=ht(n,Ei))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ee.MOCK_USER;else{a=uc(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ee(u)}n._authCredentials=new Kg(new Ku(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}}class Jt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class Qe extends Jt{constructor(e,t,s){super(e,t,hi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new E(e))}withConverter(e){return new Qe(this.firestore,e,this._path)}}function bw(n,e,...t){if(n=H(n),Xl("collection","path",e),n instanceof Ei){const s=U.fromString(e,...t);return Ka(s),new Qe(n,null,s)}{if(!(n instanceof ue||n instanceof Qe))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(U.fromString(e,...t));return Ka(s),new Qe(n.firestore,null,s)}}function Sv(n,e,...t){if(n=H(n),arguments.length===1&&(e=Gu.A()),Xl("doc","path",e),n instanceof Ei){const s=U.fromString(e,...t);return Ha(s),new ue(n,null,new E(s))}{if(!(n instanceof ue||n instanceof Qe))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(U.fromString(e,...t));return Ha(s),new ue(n.firestore,n instanceof Qe?n.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Nl(this,"async_queue_retry"),this.Xc=()=>{const t=Fi();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Fi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Fi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new We;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ue("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=t,t}enqueueAfterDelay(e,t,s){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=mo.createAndSchedule(this,e,t,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Wa(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Pn extends Ei{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Av,this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jl(this),this._firestoreClient.terminate()}}function Rw(n,e){const t=typeof n=="object"?n:Er(),s=typeof n=="string"?n:"(default)",i=qs(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=oc("firestore");r&&Tv(i,...r)}return i}function _o(n){return n._firestoreClient||Jl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Jl(n){var e,t,s;const i=n._freezeSettings(),r=function(o,a,c,u){return new am(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Yl(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new yv(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(ae.fromBase64String(e))}catch(t){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qt(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=/^__.*__$/;class kv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Et(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yn(e,this.data,t,this.fieldTransforms)}}function Zl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class So{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new So(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return $s(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Zl(this.ca)&&Cv.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class bv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||yi(e)}ya(e,t,s,i=!1){return new So({ca:e,methodName:t,ga:s,path:ne.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eh(n){const e=n._freezeSettings(),t=yi(n._databaseId);return new bv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Rv(n,e,t,s,i,r={}){const o=n.ya(r.merge||r.mergeFields?2:0,e,t,i);sh("Data must be an object, but it was:",o,s);const a=th(s,o);let c,u;if(r.merge)c=new ge(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=Dv(e,h,t);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pv(l,d)||l.push(d)}c=new ge(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new kv(new fe(a),c,u)}class Ao extends Io{_toFieldTransform(e){return new Nm(e.path,new Nn)}isEqual(e){return e instanceof Ao}}function Nv(n,e,t,s=!1){return Co(t,n.ya(s?4:3,e))}function Co(n,e){if(nh(n=H(n)))return sh("Unsupported field value:",e,n),th(n,e);if(n instanceof Io)return function(t,s){if(!Zl(s.ca))throw s._a(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=Co(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=H(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return km(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=K.fromDate(t);return{timestampValue:Fs(s.serializer,i)}}if(t instanceof K){const i=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Fs(s.serializer,i)}}if(t instanceof To)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof qt)return{bytesValue:Il(s.serializer,t._byteString)};if(t instanceof ue){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:co(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s._a(`Unsupported field value: ${_i(t)}`)}(n,e)}function th(n,e){const t={};return Wu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qt(n,(s,i)=>{const r=Co(i,e.ha(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function nh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof To||n instanceof qt||n instanceof ue||n instanceof Io)}function sh(n,e,t){if(!nh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=_i(t);throw s==="an object"?e._a(n+" a custom object"):e._a(n+" "+s)}}function Dv(n,e,t){if((e=H(e))instanceof Eo)return e._internalPath;if(typeof e=="string")return ih(n,e);throw $s("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ov=new RegExp("[~\\*/\\[\\]]");function ih(n,e,t){if(e.search(Ov)>=0)throw $s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Eo(...e.split("."))._internalPath}catch{throw $s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $s(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new y(f.INVALID_ARGUMENT,a+n+c)}function Pv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ko("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lv extends rh{data(){return super.data()}}function ko(n,e){return typeof e=="string"?ih(n,e):e instanceof Eo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bo{}class xv extends bo{}function Nw(n,e,...t){let s=[];e instanceof bo&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof Ro).length,o=i.filter(a=>a instanceof Ii).length;if(r>1||r>0&&o>0)throw new y(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Ii extends xv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ii(e,t,s)}_apply(e){const t=this._parse(e);return oh(e._query,t),new Jt(e.firestore,e.converter,cr(e._query,t))}_parse(e){const t=eh(e.firestore);return function(i,r,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ya(l,u);const d=[];for(const g of l)d.push(Qa(a,i,g));h={arrayValue:{values:d}}}else h=Qa(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ya(l,u),h=Nv(o,r,l,u==="in"||u==="not-in");return z.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Dw(n,e,t){const s=e,i=ko("where",n);return Ii._create(i,s,t)}class Ro extends bo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ro(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:we.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)oh(r,a),r=cr(r,a)}(e._query,t),new Jt(e.firestore,e.converter,cr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qa(n,e,t){if(typeof(t=H(t))=="string"){if(t==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!il(e)&&t.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(U.fromString(t));if(!E.isDocumentKey(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return va(n,new E(s))}if(t instanceof ue)return va(n,t._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_i(t)}.`)}function Ya(n,e){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oh(n,e){if(e.isInequality()){const s=io(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=sl(n);r!==null&&Uv(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Uv(n,e,t){if(!t.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Fv{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Qt(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new To(q(e.latitude),q(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=eo(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(kn(e));default:return null}}convertTimestamp(e){const t=Je(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=U.fromString(e);F(kl(s));const i=new bn(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(t)||Ue(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ah extends rh{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ko("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class vs extends ah{data(e={}){return super.data(e)}}class $v{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new vs(this._firestore,this._userDataWriter,s.key,s,new cn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new vs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new vs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new cn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Bv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){n=ht(n,ue);const e=ht(n.firestore,Pn);return Ev(_o(e),n._key).then(t=>uh(e,n,t))}class ch extends Fv{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function Pw(n,e){const t=ht(n.firestore,Pn),s=Sv(n),i=Vv(n.converter,e);return jv(t,[Rv(eh(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Le.exists(!1))]).then(()=>s)}function Lw(n,...e){var t,s,i;n=H(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wa(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Wa(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof ue)u=ht(n.firestore,Pn),l=hi(n._key.path),c={next:h=>{e[o]&&e[o](uh(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ht(n,Jt);u=ht(h.firestore,Pn),l=h._query;const d=new ch(u);c={next:g=>{e[o]&&e[o](new $v(u,d,h,g))},error:e[o+1],complete:e[o+2]},Mv(n._query)}return function(h,d,g,_){const T=new Wl(_),w=new Bl(d,T,g);return h.asyncQueue.enqueueAndForget(async()=>Vl(await yr(h),w)),()=>{T.Dc(),h.asyncQueue.enqueueAndForget(async()=>$l(await yr(h),w))}}(_o(u),l,a,c)}function jv(n,e){return function(t,s){const i=new We;return t.asyncQueue.enqueueAndForget(async()=>av(await _v(t),s,i)),i.promise}(_o(n),e)}function uh(n,e,t){const s=t.docs.get(e._key),i=new ch(n);return new ah(n,i,e._key,s,new cn(t.hasPendingWrites,t.fromCache),e.converter)}function Mw(){return new Ao("serverTimestamp")}(function(n,e=!0){(function(t){Wt=t})(wt),ft(new Ye("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Pn(new Gg(t.getProvider("auth-internal")),new Xg(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Te(fa,"3.13.0",n),Te(fa,"3.13.0","esm2017")})();var qv="firebase",zv="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te(qv,zv,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="firebasestorage.googleapis.com",Hv="storageBucket",Kv=2*60*1e3,Gv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Re{constructor(e,t,s=0){super($i(e),`Firebase Storage: ${t} (${$i(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $i(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function $i(n){return"storage/"+n}function Wv(){const n="An unknown error occurred, please check the error payload for server response.";return new Ne(be.UNKNOWN,n)}function Qv(){return new Ne(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yv(){return new Ne(be.CANCELED,"User canceled the upload/download.")}function Xv(n){return new Ne(be.INVALID_URL,"Invalid URL '"+n+"'.")}function Jv(n){return new Ne(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Xa(n){return new Ne(be.INVALID_ARGUMENT,n)}function hh(){return new Ne(be.APP_DELETED,"The Firebase app was deleted.")}function Zv(n){return new Ne(be.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=me.makeFromUrl(e,t)}catch{return new me(e,"")}if(s.path==="")return s;throw Jv(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},T=t===lh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,w="([^?#]*)",P=new RegExp(`^https?://${T}/${i}/${w}`,"i"),L=[{regex:a,indices:c,postModify:r},{regex:g,indices:_,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<L.length;M++){const he=L[M],pe=he.regex.exec(e);if(pe){const st=pe[he.indices.bucket];let it=pe[he.indices.path];it||(it=""),s=new me(st,it),he.postModify(s);break}}if(s==null)throw Xv(e);return s}}class ew{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,n(g,c())},w)}function d(){r&&clearTimeout(r)}function g(w,...P){if(u){d();return}if(w){d(),l.call(null,w,...P);return}if(c()||o){d(),l.call(null,w,...P);return}s<64&&(s*=2);let L;a===1?(a=2,L=0):L=(s+Math.random())*1e3,h(L)}let _=!1;function T(w){_||(_=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,T(!0)},t),T}function nw(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n){return n!==void 0}function Ja(n,e,t,s){if(s<e)throw Xa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Xa(`Invalid value for '${n}'. Expected ${t} or less.`)}function iw(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Bs||(Bs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,s,i,r,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ls(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Bs.NO_ERROR,c=r.getStatus();if(!a||rw(c,this.additionalRetryCodes_)&&this.retry){const l=r.getErrorCode()===Bs.ABORT;s(!1,new ls(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ls(u,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sw(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Wv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?hh():Yv();o(c)}else{const c=Qv();o(c)}};this.canceled_?t(!1,new ls(!1,null,!0)):this.backoffId_=tw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ls{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function aw(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function cw(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uw(n,e){e&&(n["X-Firebase-GMPID"]=e)}function lw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function hw(n,e,t,s,i,r,o=!0){const a=iw(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return uw(u,e),aw(u,t),cw(u,r),lw(u,s),new ow(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function fw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this._service=e,t instanceof me?this._location=t:this._location=me.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new js(e,t)}get root(){const e=new me(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fw(this._location.path)}get storage(){return this._service}get parent(){const e=dw(this._location.path);if(e===null)return null;const t=new me(this._location.bucket,e);return new js(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Zv(e)}}function Za(n,e){const t=e?.[Hv];return t==null?null:me.makeFromBucketSpec(t,n)}function pw(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:uc(i,n.app.options.projectId))}class gw{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=lh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kv,this._maxUploadRetryTime=Gv,this._requests=new Set,i!=null?this._bucket=me.makeFromBucketSpec(i,this._host):this._bucket=Za(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=me.makeFromBucketSpec(this._url,e):this._bucket=Za(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ja("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ja("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new ew(hh());{const o=hw(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const ec="@firebase/storage",tc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="storage";function xw(n=Er(),e){n=H(n);const s=qs(n,dh).getImmediate({identifier:e}),i=oc("storage");return i&&mw(s,...i),s}function mw(n,e,t,s={}){pw(n,e,t,s)}function yw(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new gw(t,s,i,e,wt)}function vw(){ft(new Ye(dh,yw,"PUBLIC").setMultipleInstances(!0)),Te(ec,tc,""),Te(ec,tc,"esm2017")}vw();export{qe as G,Lw as I,Rw as P,Nw as R,bw as _,xw as a,Sv as b,Ow as c,Ew as d,Iw as e,Cw as f,kw as g,Dw as h,Ed as i,_w as j,K as k,Mw as l,Aw as o,Pw as p,Tw as s,Sw as u};
