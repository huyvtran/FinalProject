(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"05ZE":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=u("7wfR");class t{constructor(l,n,u,e,i,t,a,o,b,s,r,d,g,c,p){this.id=l,this.emergencyContacts=n,this.user=u,this.qrcode=e,this.dnr=i,this.birthdate=t,this.sex=a,this.height=o,this.weight=b,this.bloodType=s,this.allergies=r,this.diagnoses=d,this.personalNotes=g,this.approvedProviders=c,this.medicationList=p}}var a=u("6xEj");class o{constructor(l,n){this.patientSvc=l,this.router=n,this.patient=new t,this.bloodTypes=[new a.a(1,"AB",!1),new a.a(2,"AB",!0),new a.a(3,"A",!1),new a.a(4,"A",!0),new a.a(5,"B",!1),new a.a(6,"B",!0),new a.a(7,"O",!1),new a.a(8,"O",!0)],this.rh=null}ngOnInit(){}rhSelector(){}addPatient(){this.patientSvc.create(this.patient).subscribe(l=>{this.router.navigateByUrl("/app/tabs/medications")},l=>{console.error("PatientRegister.addPatient(): error creating user."),console.error(l)},()=>{})}}class b{}var s=u("pMnS"),r=u("oBZk"),d=u("ZZ/e"),g=u("s7LF"),c=u("SVse"),p=u("iInd"),h=e.zb({encapsulation:0,styles:[[""]],data:{}});function C(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-select-option",[],null,null,null,r.tb,r.F)),e.Ab(1,49152,null,0,d.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(2,0,["","",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit.abo,n.context.$implicit.rh?"+":"-")})}function m(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,10,"ion-header",[],null,null,null,r.hb,r.s)),e.Ab(1,49152,null,0,d.D,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Db,r.O)),e.Ab(3,49152,null,0,d.Db,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.T,r.e)),e.Ab(5,49152,null,0,d.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.ob,r.A)),e.Ab(7,49152,null,0,d.T,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,2,"ion-title",[],null,null,null,r.Bb,r.M)),e.Ab(9,49152,null,0,d.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Patient Registration"])),(l()(),e.Bb(11,0,null,null,101,"ion-content",[],null,null,null,r.bb,r.m)),e.Ab(12,49152,null,0,d.w,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,99,"form",[["name","patient"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Nb(l,15).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Nb(l,15).onReset()&&i),i},null,null)),e.Ab(14,16384,null,0,g.m,[],null,null),e.Ab(15,4210688,[["registerForm",4]],0,g.h,[[8,null],[8,null]],null,null),e.Qb(2048,null,g.a,null,[g.h]),e.Ab(17,16384,null,0,g.g,[[4,g.a]],null,null),(l()(),e.Bb(18,0,null,null,90,"ion-list",[["lines","none"]],null,null,null,r.nb,r.x)),e.Ab(19,49152,null,0,d.Q,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(20,0,null,0,13,"ion-item",[],null,null,null,r.kb,r.v)),e.Ab(21,49152,null,0,d.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(22,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.lb,r.w)),e.Ab(23,49152,null,0,d.P,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Tb(-1,0,["Date of Birth"])),(l()(),e.Bb(25,0,null,0,8,"ion-input",[["name","birthdate"],["required",""],["type","date"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,28)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,28)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.patient.birthdate=u)&&i),i},r.jb,r.u)),e.Ab(26,16384,null,0,g.j,[],{required:[0,"required"]},null),e.Qb(1024,null,g.c,function(l){return[l]},[g.j]),e.Ab(28,16384,null,0,d.Nb,[e.p],null,null),e.Qb(1024,null,g.d,function(l){return[l]},[d.Nb]),e.Ab(30,671744,null,0,g.i,[[2,g.a],[6,g.c],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(32,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(33,49152,null,0,d.I,[e.j,e.p,e.F],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(34,0,null,0,20,"ion-item",[],null,null,null,r.kb,r.v)),e.Ab(35,49152,null,0,d.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(36,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.lb,r.w)),e.Ab(37,49152,null,0,d.P,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Tb(-1,0,["Biological Sex"])),(l()(),e.Bb(39,0,null,0,15,"ion-select",[["name","sex"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Nb(l,42)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,42)._handleChangeEvent(u.target)&&i),i},r.ub,r.E)),e.Qb(5120,null,g.d,function(l){return[l]},[d.Mb]),e.Ab(41,49152,null,0,d.ob,[e.j,e.p,e.F],{name:[0,"name"]},null),e.Ab(42,16384,null,0,d.Mb,[e.p],null,null),(l()(),e.Bb(43,0,null,0,5,"ion-select-option",[["value","male"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.patient.sex=u)&&e),e},r.tb,r.F)),e.Ab(44,671744,null,0,g.i,[[2,g.a],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(46,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(47,49152,null,0,d.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["Male"])),(l()(),e.Bb(49,0,null,0,5,"ion-select-option",[["value","female"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.patient.sex=u)&&e),e},r.tb,r.F)),e.Ab(50,671744,null,0,g.i,[[2,g.a],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(52,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(53,49152,null,0,d.pb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(-1,0,["Female"])),(l()(),e.Bb(55,0,null,0,13,"ion-item",[],null,null,null,r.kb,r.v)),e.Ab(56,49152,null,0,d.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(57,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.lb,r.w)),e.Ab(58,49152,null,0,d.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Height (inches)"])),(l()(),e.Bb(60,0,null,0,8,"ion-input",[["name","height"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,63)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,63)._handleIonChange(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.patient.height=u)&&i),i},r.jb,r.u)),e.Ab(61,16384,null,0,g.j,[],{required:[0,"required"]},null),e.Qb(1024,null,g.c,function(l){return[l]},[g.j]),e.Ab(63,16384,null,0,d.Ib,[e.p],null,null),e.Qb(1024,null,g.d,function(l){return[l]},[d.Ib]),e.Ab(65,671744,null,0,g.i,[[2,g.a],[6,g.c],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(67,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(68,49152,null,0,d.I,[e.j,e.p,e.F],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(69,0,null,0,13,"ion-item",[],null,null,null,r.kb,r.v)),e.Ab(70,49152,null,0,d.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(71,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.lb,r.w)),e.Ab(72,49152,null,0,d.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Weight (pounds)"])),(l()(),e.Bb(74,0,null,0,8,"ion-input",[["name","weight"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,77)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,77)._handleIonChange(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.patient.weight=u)&&i),i},r.jb,r.u)),e.Ab(75,16384,null,0,g.j,[],{required:[0,"required"]},null),e.Qb(1024,null,g.c,function(l){return[l]},[g.j]),e.Ab(77,16384,null,0,d.Ib,[e.p],null,null),e.Qb(1024,null,g.d,function(l){return[l]},[d.Ib]),e.Ab(79,671744,null,0,g.i,[[2,g.a],[6,g.c],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(81,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(82,49152,null,0,d.I,[e.j,e.p,e.F],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(83,0,null,0,13,"ion-item",[],null,null,null,r.kb,r.v)),e.Ab(84,49152,null,0,d.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(85,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.lb,r.w)),e.Ab(86,49152,null,0,d.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Blood Type"])),(l()(),e.Bb(88,0,null,0,8,"ion-select",[["name","diagnosis"],["placeholder","Select One"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,89)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,89)._handleChangeEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.patient.bloodType=u)&&i),i},r.ub,r.E)),e.Ab(89,16384,null,0,d.Mb,[e.p],null,null),e.Qb(1024,null,g.d,function(l){return[l]},[d.Mb]),e.Ab(91,671744,null,0,g.i,[[2,g.a],[8,null],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(93,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(94,49152,null,0,d.ob,[e.j,e.p,e.F],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(l()(),e.qb(16777216,null,0,1,null,C)),e.Ab(96,278528,null,0,c.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(97,0,null,0,11,"ion-item",[],null,null,null,r.kb,r.v)),e.Ab(98,49152,null,0,d.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(99,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.lb,r.w)),e.Ab(100,49152,null,0,d.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["DNR? (check box if you have one)"])),(l()(),e.Bb(102,0,null,0,6,"ion-checkbox",[["checked",""],["color","dark"],["name","active"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,103)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,103)._handleIonChange(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.patient.dnr=u)&&i),i},r.Z,r.k)),e.Ab(103,16384,null,0,d.d,[e.p],null,null),e.Qb(1024,null,g.d,function(l){return[l]},[d.d]),e.Ab(105,671744,null,0,g.i,[[2,g.a],[8,null],[8,null],[6,g.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,g.e,null,[g.i]),e.Ab(107,16384,null,0,g.f,[[4,g.e]],null,null),e.Ab(108,49152,null,0,d.t,[e.j,e.p,e.F],{checked:[0,"checked"],color:[1,"color"],name:[2,"name"]},null),(l()(),e.Bb(109,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.Bb(110,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addPatient()&&e),e},r.S,r.d)),e.Ab(111,49152,null,0,d.m,[e.j,e.p,e.F],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),e.Tb(-1,0,["Create"]))],function(l,n){var u=n.component;l(n,19,0,"none"),l(n,23,0,"primary","stacked"),l(n,26,0,""),l(n,30,0,"birthdate",u.patient.birthdate),l(n,33,0,"birthdate","","date"),l(n,37,0,"primary","stacked"),l(n,41,0,"sex"),l(n,44,0,u.patient.sex),l(n,47,0,"male"),l(n,50,0,u.patient.sex),l(n,53,0,"female"),l(n,58,0,"stacked"),l(n,61,0,""),l(n,65,0,"height",u.patient.height),l(n,68,0,"height","","number"),l(n,72,0,"stacked"),l(n,75,0,""),l(n,79,0,"weight",u.patient.weight),l(n,82,0,"weight","","number"),l(n,86,0,"stacked"),l(n,91,0,"diagnosis",u.patient.bloodType),l(n,94,0,"diagnosis","Select One"),l(n,96,0,u.bloodTypes),l(n,100,0,"stacked"),l(n,105,0,"active",u.patient.dnr),l(n,108,0,"","dark","active"),l(n,111,0,"block","submit")},function(l,n){l(n,13,0,e.Nb(n,17).ngClassUntouched,e.Nb(n,17).ngClassTouched,e.Nb(n,17).ngClassPristine,e.Nb(n,17).ngClassDirty,e.Nb(n,17).ngClassValid,e.Nb(n,17).ngClassInvalid,e.Nb(n,17).ngClassPending),l(n,25,0,e.Nb(n,26).required?"":null,e.Nb(n,32).ngClassUntouched,e.Nb(n,32).ngClassTouched,e.Nb(n,32).ngClassPristine,e.Nb(n,32).ngClassDirty,e.Nb(n,32).ngClassValid,e.Nb(n,32).ngClassInvalid,e.Nb(n,32).ngClassPending),l(n,43,0,e.Nb(n,46).ngClassUntouched,e.Nb(n,46).ngClassTouched,e.Nb(n,46).ngClassPristine,e.Nb(n,46).ngClassDirty,e.Nb(n,46).ngClassValid,e.Nb(n,46).ngClassInvalid,e.Nb(n,46).ngClassPending),l(n,49,0,e.Nb(n,52).ngClassUntouched,e.Nb(n,52).ngClassTouched,e.Nb(n,52).ngClassPristine,e.Nb(n,52).ngClassDirty,e.Nb(n,52).ngClassValid,e.Nb(n,52).ngClassInvalid,e.Nb(n,52).ngClassPending),l(n,60,0,e.Nb(n,61).required?"":null,e.Nb(n,67).ngClassUntouched,e.Nb(n,67).ngClassTouched,e.Nb(n,67).ngClassPristine,e.Nb(n,67).ngClassDirty,e.Nb(n,67).ngClassValid,e.Nb(n,67).ngClassInvalid,e.Nb(n,67).ngClassPending),l(n,74,0,e.Nb(n,75).required?"":null,e.Nb(n,81).ngClassUntouched,e.Nb(n,81).ngClassTouched,e.Nb(n,81).ngClassPristine,e.Nb(n,81).ngClassDirty,e.Nb(n,81).ngClassValid,e.Nb(n,81).ngClassInvalid,e.Nb(n,81).ngClassPending),l(n,88,0,e.Nb(n,93).ngClassUntouched,e.Nb(n,93).ngClassTouched,e.Nb(n,93).ngClassPristine,e.Nb(n,93).ngClassDirty,e.Nb(n,93).ngClassValid,e.Nb(n,93).ngClassInvalid,e.Nb(n,93).ngClassPending),l(n,102,0,e.Nb(n,107).ngClassUntouched,e.Nb(n,107).ngClassTouched,e.Nb(n,107).ngClassPristine,e.Nb(n,107).ngClassDirty,e.Nb(n,107).ngClassValid,e.Nb(n,107).ngClassInvalid,e.Nb(n,107).ngClassPending)})}function N(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"patient",[],null,null,null,m,h)),e.Ab(1,114688,null,0,o,[i.a,p.m],null,null)],function(l,n){l(n,1,0)},null)}var v=e.xb("patient",o,N,{},{},[]);u.d(n,"PatientPageModuleNgFactory",function(){return A});var A=e.yb(b,[],function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[s.a,v]],[3,e.m],e.D]),e.Lb(4608,c.l,c.k,[e.z,[2,c.s]]),e.Lb(4608,g.l,g.l,[]),e.Lb(4608,d.c,d.c,[e.F,e.g]),e.Lb(4608,d.Gb,d.Gb,[d.c,e.m,e.w]),e.Lb(4608,d.Kb,d.Kb,[d.c,e.m,e.w]),e.Lb(1073742336,c.b,c.b,[]),e.Lb(1073742336,g.k,g.k,[]),e.Lb(1073742336,g.b,g.b,[]),e.Lb(1073742336,d.Fb,d.Fb,[]),e.Lb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.Lb(1073742336,b,b,[]),e.Lb(1024,p.k,function(){return[[{path:"",component:o}]]},[])])})}}]);