/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['exo, sans-serif']='<script src=\"http://use.edgefonts.net/exo:n4,i4,n7,i7,n1,i1,n3,i3,n5,i9,n8,i8,n2,n9,i2,i5,n6,i6:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'yellow',
            type:'rect',
            rect:['0px','0px','320px','50px','auto','auto'],
            fill:["rgba(242,198,16,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'blue',
            type:'rect',
            rect:['0px','0px','320px','50px','auto','auto'],
            fill:["rgba(93,173,226,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'red',
            type:'rect',
            rect:['0px','0px','320px','50px','auto','auto'],
            fill:["rgba(231,77,61,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'banner_rojo',
            type:'text',
            rect:['103px','9px','auto','auto','auto','auto'],
            text:"Banner",
            align:"center",
            font:['exo, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_red}": [
            ["color", "background-color", 'rgba(231,77,61,1.00)'],
            ["style", "left", '-320px'],
            ["style", "width", '320px']
         ],
         "${_blue}": [
            ["color", "background-color", 'rgba(93,173,226,1.00)'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '320px'],
            ["style", "height", '50px'],
            ["style", "overflow", 'hidden']
         ],
         "${_banner_rojo}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'exo, sans-serif'],
            ["style", "left", '122px'],
            ["style", "opacity", '0']
         ],
         "${_yellow}": [
            ["color", "background-color", 'rgba(242,198,16,1.00)'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid14", tween: [ "style", "${_yellow}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_yellow}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_blue}", "left", '-320px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "eid23", tween: [ "style", "${_blue}", "left", '0px', { fromValue: '-320px'}], position: 1000, duration: 1000 },
            { id: "eid13", tween: [ "style", "${_red}", "left", '0px', { fromValue: '-320px'}], position: 0, duration: 1000 },
            { id: "eid21", tween: [ "style", "${_red}", "left", '-320px', { fromValue: '0px'}], position: 1000, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_banner_rojo}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1007 },
            { id: "eid18", tween: [ "color", "${_banner_rojo}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 1007 },
            { id: "eid24", tween: [ "style", "${_banner_rojo}", "left", '122px', { fromValue: '122px'}], position: 2000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "banner");
