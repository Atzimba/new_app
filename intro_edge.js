/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';


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
            id:'sillones',
            type:'image',
            rect:['0px','0px','320px','568px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sillones.jpg",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['23px','419px','274px','129px','auto','auto'],
            borderRadius:["2px 2px","2px 2px","2px 2px","2px 2px"],
            fill:["rgba(17,173,81,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['65px','461px','185px','45px','auto','auto'],
            text:"Inicio",
            align:"center",
            font:['source-sans-pro, sans-serif',30,"rgba(255,255,255,1.00)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '568px'],
            ["style", "width", '320px']
         ],
         "${_sillones}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '30px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(17,173,81,1.00)'],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '23px'],
            ["style", "width", '274px'],
            ["style", "top", '419px'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '129px'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            { id: "eid2", tween: [ "style", "${_sillones}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1017 },
            { id: "eid3", tween: [ "style", "${_Rectangle}", "left", '63px', { fromValue: '23px'}], position: 0, duration: 1017 },
            { id: "eid9", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 517 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "top", '449px', { fromValue: '419px'}], position: 0, duration: 1017 },
            { id: "eid12", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 752, duration: 265 },
            { id: "eid4", tween: [ "style", "${_Rectangle}", "width", '189px', { fromValue: '274px'}], position: 0, duration: 1017 },
            { id: "eid5", tween: [ "style", "${_Rectangle}", "height", '67px', { fromValue: '129px'}], position: 0, duration: 1017 }         ]
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
})(jQuery, AdobeEdge, "EDGE-12925834");
