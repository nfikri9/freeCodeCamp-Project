// LIST OF CATEGORIES
const supports = [`Supported`, `Not Supported`];
const groups   = [`Media`];

// LIST OF ATTRIBUTES
const element = {comment    : [],
                 doctype    : [],
                 a          : [],
                 abbr       : [],
                 address    : [],
                 area       : [],
                 article    : [],
                 aside      : [],
                 audio      : {definition : `Embed sound content.`,
                               notes      : [/*00*/ `The <code>mytext</code> will only be displayed in browsers that do not support the element.`,
                                             /*01*/ `There are 3 supported audio formats in HTML: MP3, WAV, and OGG.`]},
                 b          : [],
                 base       : [],
                 bdi        : [],
                 bdo        : [],
                 blockquote : [],
                 body       : [],
                 br         : [],
                 button     : [],
                 canvas     : [],
                 caption    : [],
                 cite       : [],
                 code       : [],
                 col        : [],
                 colgroup   : [],
                 data       : [],
                 datalist   : [],
                 dd         : [],
                 del        : [],
                 details    : [],
                 dfn        : [],
                 dialog     : [],
                 div        : [],
                 dl         : [],
                 dt         : [],
                 em         : [],
                 embed      : [],
                 fieldset   : [],
                 figcaption : [],
                 figure     : [],
                 footer     : [],
                 form       : [],
                 h1_h6      : [],
                 head       : [],
                 header     : [],
                 hgroup     : [],
                 hr         : [],
                 html       : [],
                 i          : [],
                 iframe     : [],
                 img        : [],
                 input      : [],
                 ins        : [],
                 kbd        : [],
                 label      : [],
                 legend     : [],
                 li         : [],
                 link       : [],
                 main       : [],
                 map        : [],
                 mark       : [],
                 menu       : [],
                 meta       : [],
                 meter      : [],
                 nav        : [],
                 noscript   : [],
                 object     : [],
                 ol         : [],
                 optgroup   : [],
                 option     : [],
                 output     : [],
                 p          : [],
                 param      : [],
                 picture    : [],
                 pre        : [],
                 progress   : [],
                 q          : [],
                 rp         : [],
                 rt         : [],
                 ruby       : [],
                 s          : [],
                 samp       : [],
                 script     : [],
                 search     : [],
                 section    : [],
                 select     : [],
                 small      : [],
                 source     : [],
                 span       : [],
                 strong     : [],
                 style      : [],
                 sub        : [],
                 summary    : [],
                 sup        : [],
                 svg        : [],
                 table      : [],
                 tbody      : [],
                 td         : [],
                 template   : [],
                 textarea   : [],
                 tfoot      : [],
                 th         : [],
                 thead      : [],
                 time       : [],
                 title      : [],
                 tr         : [],
                 track      : [],
                 u          : [],
                 ul         : [],
                 var        : [],
                 video      : [],
                 wbr        : []};

const attribute = {accept             : [],
                   accept_charset     : [],
                   accesskey          : [],
                   action             : [],
                   alt                : [],
                   async              : [],
                   autocomplete       : [],
                   autofocus          : [],
                   autoplay           : {definition: `The media will automatically start playing as soon as it can do so without stopping.`},
                   charset            : [],
                   checked            : [],
                   cite               : [],
                   class              : [],
                   cols               : [],
                   colspan            : [],
                   content            : [],
                   contenteditable    : [],
                   controls           : [],
                   coords             : [],
                   data               : [],
                   data_              : [],
                   datetime           : [],
                   default            : [],
                   defer              : [],
                   dir                : [],
                   dirname            : [],
                   disabled           : [],
                   download           : [],
                   draggable          : [],
                   enctype            : [],
                   enterkeyhint       : [],
                   for                : [],
                   form               : [],
                   formaction         : [],
                   headers            : [],
                   height             : [],
                   hidden             : [],
                   high               : [],
                   href               : [],
                   hreflang           : [],
                   http_equiv         : [],
                   id                 : [],
                   inert              : [],
                   inputmode          : [],
                   ismap              : [],
                   kind               : [],
                   label              : [],
                   lang               : [],
                   list               : [],
                   loop               : [],
                   low                : [],
                   max                : [],
                   maxlength          : [],
                   media              : [],
                   method             : [],
                   min                : [],
                   multiple           : [],
                   muted              : [],
                   name               : [],
                   novalidate         : [],
                   onabort            : [],
                   onafterprint       : [],
                   onbeforeprint      : [],
                   onbeforeunload     : [],
                   onblur             : [],
                   oncanplay          : [],
                   oncanplaythrough   : [],
                   onchange           : [],
                   onclick            : [],
                   oncontextmenu      : [],
                   oncopy             : [],
                   oncuechange        : [],
                   oncut              : [],
                   ondblclick         : [],
                   ondrag             : [],
                   ondragend          : [],
                   ondragenter        : [],
                   ondragleave        : [],
                   ondragover         : [],
                   ondragstart        : [],
                   ondrop             : [],
                   ondurationchange   : [],
                   onemptied          : [],
                   onended            : [],
                   onerror            : [],
                   onfocus            : [],
                   onhashchange       : [],
                   oninput            : [],
                   oninvalid          : [],
                   onkeydown          : [],
                   onkeypress         : [],
                   onkeyup            : [],
                   onload             : [],
                   onloadeddata       : [],
                   onloadedmetadata   : [],
                   onloadstart        : [],
                   onmousedown        : [],
                   onmousemove        : [],
                   onmouseout         : [],
                   onmouseover        : [],
                   onmouseup          : [],
                   onmousewheel       : [],
                   onoffline          : [],
                   ononline           : [],
                   onpagehide         : [],
                   onpageshow         : [],
                   onpaste            : [],
                   onpause            : [],
                   onplay             : [],
                   onplaying          : [],
                   onpopstate         : [],
                   onprogress         : [],
                   onratechange       : [],
                   onreset            : [],
                   onresize           : [],
                   onscroll           : [],
                   onsearch           : [],
                   onseeked           : [],
                   onseeking          : [],
                   onselect           : [],
                   onstalled          : [],
                   onstorage          : [],
                   onsubmit           : [],
                   onsuspend          : [],
                   ontimeupdate       : [],
                   ontoggle           : [],
                   onunload           : [],
                   onvolumechange     : [],
                   onwaiting          : [],
                   onwheel            : [],
                   open               : [],
                   optimum            : [],
                   pattern            : [],
                   placeholder        : [],
                   popover            : [],
                   popovertarget      : [],
                   popovertargetaction: [],
                   poster             : [],
                   preload            : [],
                   readonly           : [],
                   rel                : [],
                   required           : [],
                   reversed           : [],
                   rows               : [],
                   rowspan            : [],
                   sandbox            : [],
                   scope              : [],
                   selected           : [],
                   shape              : [],
                   size               : [],
                   sizes              : [],
                   span               : [],
                   spellcheck         : [],
                   src                : [],
                   srcdoc             : [],
                   srclang            : [],
                   srcset             : [],
                   start              : [],
                   step               : [],
                   style              : [],
                   tabindex           : [],
                   target             : [],
                   title              : [],
                   translate          : [],
                   type               : [],
                   usemap             : [],
                   value              : [],
                   width              : [],
                   wrap               : []};

function result(){
    let x = document.querySelector("#myselect").value;
    let y = element.x;

        if (x == y){
            document.getElementById("definition").innerHTML = y.definition;
        }
     
}

/*
<pre>
&lt;audio preload="myvalue" src="myvalue" autoplay controls loop muted&gt;
&lt;source src="myvalue" type="myvalue"&gt;
&lt;track kind="myvalue" label="myvalue" src="myvalue" srclang="myvalue" default&gt;
mytext
&lt;/audio&gt;
</pre>`
*/