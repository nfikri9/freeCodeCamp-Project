// LIST OF ATTRIBUTES
const ele = {Media: [/*00*/`<code>&lt;audio&gt;</code>  = Embed sound content in webpage.`,
                     /*01*/`<code>&lt;source&gt;</code> = Specify alternative media files (audio, video, picture) which the browser may choose from.`]};

const att = {Boolean: [/*00*/`<code>autoplay</code> = The media (audio/video) will automatically start playing as soon as it can do so without stopping.`,
                       /*01*/`<code>controls</code> = The media (audio/video) player should be displayed, features include play, pause, volume,
                              seeking, fullscreen toggle, captions/subtitles, track.`,
                       /*02*/`<code>loop</code>     = The media (audio/video) will start over again, every time it is finished.`,
                       /*03*/`<code>muted</code>    = The media (audio/video) should be muted initially.`,
                       /*04*/`<code></code> = `,
                       /*05*/`<code></code> = `,
                       /*06*/`<code></code> = `,
                       /*07*/`<code></code> = `,
                       /*08*/`<code></code> = `,
                       /*09*/`<code></code> = `,
                       /*10*/`<code></code> = `,
                       /*11*/`<code></code> = `,
                       /*12*/`<code></code> = `,],

             Event: [/*00*/`<code>onabort</code>          = TBL`,
                     /*01*/`<code>oncanplay</code>        = TBL`,
                     /*02*/`<code>oncanplaythrough</code> = TBL`,
                     /*03*/`<code>ondurationchange</code> = TBL`,
                     /*04*/`<code>onemptied</code>        = TBL`,
                     /*05*/`<code>onended</code>          = TBL`,
                     /*06*/`<code>onerror</code>          = TBL`,
                     /*07*/`<code>onloadeddata</code>     = TBL`,
                     /*08*/`<code>onloadedmetadata</code> = TBL`,
                     /*09*/`<code>onloadstart</code>      = TBL`,
                     /*10*/`<code>onpause</code>          = TBL`,
                     /*11*/`<code>onplay</code>           = TBL`,
                     /*12*/`<code>onplaying</code>        = TBL`,
                     /*13*/`<code>onprogress</code>       = TBL`,
                     /*14*/`<code>onratechange</code>     = TBL`,
                     /*15*/`<code>onseeked</code>         = TBL`,
                     /*16*/`<code>onseeking</code>        = TBL`,
                     /*17*/`<code>onstalled</code>        = TBL`,
                     /*18*/`<code>onsuspend</code>        = TBL`,
                     /*19*/`<code>ontimeupdate</code>     = TBL`,
                     /*20*/`<code>onvolumechange</code>   = TBL`,
                     /*21*/`<code>onwaiting</code>        = TBL`,
                     /*22*/`<code></code> = TBL`,
                     /*23*/`<code></code> = TBL`,
                     /*24*/`<code></code> = TBL`,
                     /*25*/`<code></code> = TBL`,
                     /*26*/`<code></code> = TBL`,
                     /*27*/`<code></code> = TBL`,
                     /*28*/`<code></code> = TBL`,
                     /*29*/`<code></code> = TBL`,
                     /*30*/`<code></code> = TBL`,],

             Media: [/*00*/`<code>preload="myvalue"</code> = TBL`,
                     /*01*/`<code>src="myvalue"</code>     = Specifies the URL of the media. (audio, embed, iframe, img, input, script, source, track, video`]
};

let element_audio_definition = `Element <code>&lt;audio&gt;</code> = Specifies sound content.`;
function element_audio(){
    document.getElementsByClassName("audio")[0].innerHTML            = ele.Media[0];
    document.getElementsByClassName("source")[0].innerHTML           = ele.Media[1];
    document.getElementsByClassName("preload")[0].innerHTML          = att.Media[0];
    document.getElementsByClassName("src")[0].innerHTML              = att.Media[1];
    document.getElementsByClassName("autoplay")[0].innerHTML         = att.Boolean[0];
    document.getElementsByClassName("controls")[0].innerHTML         = att.Boolean[1];
    document.getElementsByClassName("loop")[0].innerHTML             = att.Boolean[2];
    document.getElementsByClassName("muted")[0].innerHTML            = att.Boolean[3];
    document.getElementsByClassName("onabort")[0].innerHTML          = att.Event[0];
    document.getElementsByClassName("oncanplay")[0].innerHTML        = att.Event[1];
    document.getElementsByClassName("oncanplaythrough")[0].innerHTML = att.Event[2];
    document.getElementsByClassName("ondurationchange")[0].innerHTML = att.Event[3];
    document.getElementsByClassName("onemptied")[0].innerHTML        = att.Event[4];
    document.getElementsByClassName("onended")[0].innerHTML          = att.Event[5];
    document.getElementsByClassName("onerror")[0].innerHTML          = att.Event[6];
    document.getElementsByClassName("onloadeddata")[0].innerHTML     = att.Event[7];
    document.getElementsByClassName("onloadedmetadata")[0].innerHTML = att.Event[8];
    document.getElementsByClassName("onloadstart")[0].innerHTML      = att.Event[9];
    document.getElementsByClassName("onpause")[0].innerHTML          = att.Event[10];
    document.getElementsByClassName("onplay")[0].innerHTML           = att.Event[11];
    document.getElementsByClassName("onplaying")[0].innerHTML        = att.Event[12];
    document.getElementsByClassName("onprogress")[0].innerHTML       = att.Event[13];
    document.getElementsByClassName("onratechange")[0].innerHTML     = att.Event[14];
    document.getElementsByClassName("onseeked")[0].innerHTML         = att.Event[15];
    document.getElementsByClassName("onseeking")[0].innerHTML        = att.Event[16];
    document.getElementsByClassName("onstalled")[0].innerHTML        = att.Event[17];
    document.getElementsByClassName("onsuspend")[0].innerHTML        = att.Event[18];
    document.getElementsByClassName("ontimeupdate")[0].innerHTML     = att.Event[19];
    document.getElementsByClassName("onvolumechange")[0].innerHTML   = att.Event[20];
    document.getElementsByClassName("onwaiting")[0].innerHTML        = att.Event[21];
}