"use strict";(self.webpackChunklib_demo=self.webpackChunklib_demo||[]).push([[308],{688:(Dn,ut,c)=>{c.r(ut),c.d(ut,{ConfigurationsModule:()=>Mn});var w=c(368),r=c(48),fe=c(932),dt=c(736),ct=c(132),me=c(520),ht=c(392),pt=c(224),ge=c(845);function F(e,n){return new me._(t=>{const i=e.length;if(0===i)return void t.complete();const o=new Array(i);let s=0,a=0;for(let d=0;d<i;d++){const V=(0,ct.Q)(e[d]);let y=!1;t.add(V.subscribe({next:M=>{y||(y=!0,a++),o[d]=M},error:M=>t.error(M),complete:()=>{s++,(s===i||!y)&&(a===i&&t.next(n?n.reduce((M,bn,An)=>(M[bn]=o[An],M),{}):o),t.complete())}}))}})}let ft=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.GI1(r.q87),r.GI1(r.GMv))};static#e=this.\u0275dir=r.Sc5({type:e})}return e})(),g=(()=>{class e extends ft{static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=r.otF(e)))(o||e)}})();static#e=this.\u0275dir=r.Sc5({type:e,features:[r.eg9]})}return e})();const h=new r.UbH(""),ye={provide:h,useExisting:(0,r.wd)(()=>R),multi:!0};let R=(()=>{class e extends g{writeValue(t){this.setProperty("checked",t)}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=r.otF(e)))(o||e)}})();static#e=this.\u0275dir=r.Sc5({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,o){1&i&&r.qCj("change",function(a){return o.onChange(a.target.checked)})("blur",function(){return o.onTouched()})},features:[r.M5G([ye]),r.eg9]})}return e})();const ve={provide:h,useExisting:(0,r.wd)(()=>S),multi:!0},Ve=new r.UbH("");let S=(()=>{class e extends ft{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ce(){const e=(0,w.uy)()?(0,w.uy)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.GI1(r.q87),r.GI1(r.GMv),r.GI1(Ve,8))};static#e=this.\u0275dir=r.Sc5({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){1&i&&r.qCj("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[r.M5G([ve]),r.eg9]})}return e})();const l=new r.UbH(""),f=new r.UbH("");function At(e){return null!=e}function Dt(e){return(0,r.w5$)(e)?(0,ct.Q)(e):e}function Et(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function wt(e,n){return n.map(t=>t(e))}function Ft(e){return e.map(n=>function be(e){return!e.validate}(n)?n:t=>n.validate(t))}function H(e){return null!=e?function St(e){if(!e)return null;const n=e.filter(At);return 0==n.length?null:function(t){return Et(wt(t,n))}}(Ft(e)):null}function L(e){return null!=e?function Ot(e){if(!e)return null;const n=e.filter(At);return 0==n.length?null:function(t){return function _e(...e){if(1===e.length){const n=e[0];if((0,ht.c)(n))return F(n,null);if((0,ge.Y)(n)&&Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);return F(t.map(i=>n[i]),t)}}if("function"==typeof e[e.length-1]){const n=e.pop();return F(e=1===e.length&&(0,ht.c)(e[0])?e[0]:e,null).pipe((0,pt.k)(t=>n(...t)))}return F(e,null)}(wt(t,n).map(Dt)).pipe((0,pt.k)(Et))}}(Ft(e)):null}function xt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function W(e){return e?Array.isArray(e)?e:[e]:[]}function x(e,n){return Array.isArray(e)?e.includes(n):e===n}function It(e,n){const t=W(n);return W(e).forEach(o=>{x(t,o)||t.push(o)}),t}function kt(e,n){return W(n).filter(t=>!x(e,t))}class Bt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=L(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class u extends Bt{get formDirective(){return null}get path(){return null}}class m extends Bt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Tt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Pt=(()=>{class e extends Tt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.GI1(m,2))};static#e=this.\u0275dir=r.Sc5({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){2&i&&r.eAK("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[r.eg9]})}return e})();const b="VALID",N="INVALID",v="PENDING",A="DISABLED";function I(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class z{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===N}get pending(){return this.status==v}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(It(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(It(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(kt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(kt(n,this._rawAsyncValidators))}hasValidator(n){return x(this._rawValidators,n)}hasAsyncValidator(n){return x(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=v,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=A,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=b,this._forEachChild(i=>{i.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===v)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const t=Dt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r._w7,this.statusChanges=new r._w7}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(N)?N:b}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){I(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Fe(e){return Array.isArray(e)?H(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Se(e){return Array.isArray(e)?L(e):e||null}(this._rawAsyncValidators)}}const C=new r.UbH("CallSetDisabledState",{providedIn:"root",factory:()=>k}),k="always";function D(e,n,t=k){(function K(e,n){const t=function Gt(e){return e._rawValidators}(e);null!==n.validator?e.setValidators(xt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const i=function Nt(e){return e._rawAsyncValidators}(e);null!==n.asyncValidator?e.setAsyncValidators(xt(i,n.asyncValidator)):"function"==typeof i&&e.setAsyncValidators([i]);const o=()=>e.updateValueAndValidity();P(n._rawValidators,o),P(n._rawAsyncValidators,o)})(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Ge(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Lt(e,n)})}(e,n),function Ie(e,n){const t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Ne(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Lt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function xe(e,n){if(n.valueAccessor.setDisabledState){const t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function P(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Lt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function qt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function $t(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}Promise.resolve();const Yt=class extends z{constructor(n=null,t,i){super(function $(e){return(I(e)?e.validators:e)||null}(t),function Y(e,n){return(I(n)?n.asyncValidators:e)||null}(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=$t(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){qt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){qt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){$t(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Le={provide:m,useExisting:(0,r.wd)(()=>et)},Kt=Promise.resolve();let et=(()=>{class e extends m{constructor(t,i,o,s,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new Yt,this._registered=!1,this.name="",this.update=new r._w7,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=function J(e,n){if(!n)return null;let t,i,o;return Array.isArray(n),n.forEach(s=>{s.constructor===S?t=s:function Te(e){return Object.getPrototypeOf(e.constructor)===g}(s)?i=s:o=s}),o||i||t||null}(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function Q(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){D(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Kt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const i=t.isDisabled.currentValue,o=0!==i&&(0,r.cZD)(i);Kt.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function B(e,n){return[...n.path,e]}(t,this._parent):[t]}static#t=this.\u0275fac=function(i){return new(i||e)(r.GI1(u,9),r.GI1(l,10),r.GI1(f,10),r.GI1(h,10),r.GI1(r.kD9,8),r.GI1(C,8))};static#e=this.\u0275dir=r.Sc5({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[r.Wk5.None,"disabled","isDisabled"],model:[r.Wk5.None,"ngModel","model"],options:[r.Wk5.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r.M5G([Le]),r.eg9,r.SYr]})}return e})();const je={provide:h,useExisting:(0,r.wd)(()=>nt),multi:!0};let nt=(()=>{class e extends g{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=i=>{t(""==i?null:parseFloat(i))}}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=r.otF(e)))(o||e)}})();static#e=this.\u0275dir=r.Sc5({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){1&i&&r.qCj("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},features:[r.M5G([je]),r.eg9]})}return e})(),fn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.a4G({type:e});static#n=this.\u0275inj=r.s3X({})}return e})(),gn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:C,useValue:t.callSetDisabledState??k}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.a4G({type:e});static#n=this.\u0275inj=r.s3X({imports:[fn]})}return e})();function _n(e,n){if(1&e&&r.wR5(0,"ngx-expanding-text",17),2&e){const t=r.GaO();r.E7m("text",t.lorem200)("initiallyExpanded",t.initiallyExpanded)}}let yn=(()=>{class e{constructor(){this.lorem200="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores atque deleniti doloremque eius error ex iure nesciunt, nisi odit, provident quos reiciendis, unde voluptas voluptatibus! Cupiditate, repudiandae sunt. Animi blanditiis consectetur dicta et fugiat iure iusto minima pariatur quae suscipit. Assumenda deserunt enim hic incidunt minima nemo, perferendis repellat voluptatem. Ab alias aperiam aspernatur at corporis cupiditate dolor dolorem eaque earum eos esse et eum in, laboriosam maxime minus modi nam nemo numquam officia optio perferendis repellat repellendus sapiente sed similique sint temporibus. Cupiditate maiores maxime minima, minus nesciunt pariatur sapiente soluta? Ad aperiam consectetur distinctio et, facere necessitatibus, nisi obcaecati quibusdam quod sequi similique temporibus ullam. Architecto dolore, dolorem, eius eos fugit hic id incidunt natus nihil non nostrum perferendis quo saepe? Libero, mollitia necessitatibus nihil nisi non omnis perferendis perspiciatis quasi sint voluptate! Deleniti ea eos iste quibusdam veniam. Animi assumenda atque dolor est impedit minima nihil placeat similique totam? Accusamus dicta ex excepturi iure laudantium necessitatibus neque odio optio. Accusantium asperiores error expedita fuga nam odit, optio praesentium quidem repudiandae tenetur. Architecto aspernatur at consectetur doloribus et, facilis incidunt ipsam iure minus nisi nulla qui, repudiandae sed tenetur vel! Animi consequuntur corporis perspiciatis rem similique totam.",this.ghExampleLink="https://github.com/NKisiura/ngx-expanding-text/tree/master/projects/lib-demo/src/app/examples/configurations",this.charCountLimit=100,this.showEllipsis=!0,this.showMoreText="Show more",this.showLessText="Show less",this.showInitiallyExpandedExample=!0,this.initiallyExpanded=!1}rerenderInitiallyExpandedExample(){this.showInitiallyExpandedExample=!1,setTimeout(()=>{this.showInitiallyExpandedExample=!0},100)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=r.In1({type:e,selectors:[["app-configurations"]],decls:33,vars:21,consts:[[1,"flex","flex-col","gap-4"],[3,"title","ghExampleLink"],[1,"flex","flex-col","sm:flex-row","gap-2","mb-4"],["type","number",1,"border","border-gray-400","rounded-md","px-2",3,"ngModel","ngModelChange"],[3,"text","charCountLimit"],[1,"flex","gap-2","mb-4"],["type","checkbox",3,"ngModel","ngModelChange"],[3,"text","showEllipsis"],[1,"flex","flex-col","gap-4","mb-4"],[1,"flex","flex-col","sm:flex-row","gap-2"],[2,"min-width","170px"],["type","text",1,"border","border-gray-400","rounded-md","px-2",3,"ngModel","ngModelChange"],[3,"text","moreButtonText","lessButtonText"],[1,"flex","flex-col","items-start","gap-2","mb-4"],[1,"flex","gap-2"],["type","button",1,"custom-button",3,"click"],[3,"text","initiallyExpanded",4,"ngIf"],[3,"text","initiallyExpanded"]],template:function(i,o){1&i&&(r.I0R(0,"div",0)(1,"app-example-viewer",1)(2,"div",2)(3,"label"),r.OEk(4,"Character count limit:"),r.C$Y(),r.I0R(5,"input",3),r.iHE("ngModelChange",function(a){return r.kNx(o.charCountLimit,a)||(o.charCountLimit=a),a}),r.C$Y()(),r.wR5(6,"ngx-expanding-text",4),r.C$Y(),r.I0R(7,"app-example-viewer",1)(8,"div",5)(9,"label"),r.OEk(10,"Show ellipsis:"),r.C$Y(),r.I0R(11,"input",6),r.iHE("ngModelChange",function(a){return r.kNx(o.showEllipsis,a)||(o.showEllipsis=a),a}),r.C$Y()(),r.wR5(12,"ngx-expanding-text",7),r.C$Y(),r.I0R(13,"app-example-viewer",1)(14,"div",8)(15,"div",9)(16,"label",10),r.OEk(17,"Show more button text:"),r.C$Y(),r.I0R(18,"input",11),r.iHE("ngModelChange",function(a){return r.kNx(o.showMoreText,a)||(o.showMoreText=a),a}),r.C$Y()(),r.I0R(19,"div",9)(20,"label",10),r.OEk(21,"Show less button text:"),r.C$Y(),r.I0R(22,"input",11),r.iHE("ngModelChange",function(a){return r.kNx(o.showLessText,a)||(o.showLessText=a),a}),r.C$Y()()(),r.wR5(23,"ngx-expanding-text",12),r.C$Y(),r.I0R(24,"app-example-viewer",1)(25,"div",13)(26,"div",14)(27,"label"),r.OEk(28,"Initially expanded:"),r.C$Y(),r.I0R(29,"input",6),r.iHE("ngModelChange",function(a){return r.kNx(o.initiallyExpanded,a)||(o.initiallyExpanded=a),a}),r.C$Y()(),r.I0R(30,"button",15),r.qCj("click",function(){return o.rerenderInitiallyExpandedExample()}),r.OEk(31," Rerender "),r.C$Y()(),r.yuY(32,_n,1,2,"ngx-expanding-text",16),r.C$Y()()),2&i&&(r.yG2(),r.E7m("title","The character count limit for the collapsed text view")("ghExampleLink",o.ghExampleLink),r.yG2(4),r.OKB("ngModel",o.charCountLimit),r.yG2(),r.E7m("text",o.lorem200)("charCountLimit",o.charCountLimit),r.yG2(),r.E7m("title","Whether to show ellipsis when the text is collapsed")("ghExampleLink",o.ghExampleLink),r.yG2(4),r.OKB("ngModel",o.showEllipsis),r.yG2(),r.E7m("text",o.lorem200)("showEllipsis",o.showEllipsis),r.yG2(),r.E7m("title","Provide custom text for the show more and show less buttons")("ghExampleLink",o.ghExampleLink),r.yG2(5),r.OKB("ngModel",o.showMoreText),r.yG2(4),r.OKB("ngModel",o.showLessText),r.yG2(),r.E7m("text",o.lorem200)("moreButtonText",o.showMoreText)("lessButtonText",o.showLessText),r.yG2(),r.E7m("title","Whether the text should be initially expanded")("ghExampleLink",o.ghExampleLink),r.yG2(5),r.OKB("ngModel",o.initiallyExpanded),r.yG2(3),r.E7m("ngIf",o.showInitiallyExpandedExample))},dependencies:[w.u_,fe.I,dt.U,S,nt,R,Pt,et]})}return e})();var vn=c(420),Cn=c(452);const Vn=[{path:"",component:yn}];let Mn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.a4G({type:e});static#n=this.\u0275inj=r.s3X({imports:[w.MD,vn.qQ.forChild(Vn),Cn.E,dt.B,gn]})}return e})()}}]);