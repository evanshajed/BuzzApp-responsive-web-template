/* Additional Plugins : Compressed Version */

/* jQuery Tweet compressed version
  Original Source: http://tweet.seaofclouds.com/

  Used Closure Compiler for JavaScript Compression: https://developers.google.com/closure/compiler/
   */

    (function(d){"function"===typeof define&&define.amd?define(["jquery"],d):d(jQuery)})(function(d){d.fn.tweet=function(j){function e(b,a){if("string"===typeof b){var f=b,d;for(d in a)var e=a[d],f=f.replace(RegExp("{"+d+"}","g"),null===e?"":e);return f}return b(a)}function g(b,a){return function(){var f=[];this.each(function(){f.push(this.replace(b,a))});return d(f)}}function k(b,a){return b.replace(h,function(b){for(var c=/^[a-z]+:/i.test(b)?b:"http://"+b,d=0;d<a.length;++d){var e=a[d];if(e.url==c&&
    e.expanded_url){c=e.expanded_url;b=e.display_url;break}}return'<a href="'+c.replace(/</g,"&lt;").replace(/>/g,"^&gt;")+'">'+b.replace(/</g,"&lt;").replace(/>/g,"^&gt;")+"</a>"})}function l(b){var a=parseInt(((1<arguments.length?arguments[1]:new Date).getTime()-b)/1E3,10),d="";return d=1>a?"just now":60>a?a+" seconds ago":120>a?"about a minute ago":2700>a?"about "+parseInt(a/60,10).toString()+" minutes ago":7200>a?"about an hour ago":86400>a?"about "+parseInt(a/3600,10).toString()+" hours ago":172800>
    a?"about a day ago":"about "+parseInt(a/86400,10).toString()+" days ago"}function m(){var c="https:"==document.location.protocol?"https:":"http:",a=null===b.fetch?b.count:b.fetch;if(b.list)return c+"//"+b.twitter_api_url+"/1/"+b.username[0]+"/lists/"+b.list+"/statuses.json?page="+b.page+"&per_page="+a+"&include_entities=1&callback=?";if(b.favorites)return c+"//"+b.twitter_api_url+"/favorites/"+b.username[0]+".json?page="+b.page+"&count="+a+"&include_entities=1&callback=?";if(null===b.query&&1==b.username.length)return c+
    "//"+b.twitter_api_url+"/1/statuses/user_timeline.json?screen_name="+b.username[0]+"&count="+a+(b.retweets?"&include_rts=1":"")+"&page="+b.page+"&include_entities=1&callback=?";var d=b.query||"from:"+b.username.join(" OR from:");return c+"//"+b.twitter_search_url+"/search.json?&q="+encodeURIComponent(d)+"&rpp="+a+"&page="+b.page+"&include_entities=1&callback=?"}function i(b,a){return a?"user"in b?b.user.profile_image_url_https:i(b,!1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/"):
    b.profile_image_url||b.user.profile_image_url}function n(c){var a={};a.item=c;a.source=c.source;a.screen_name=c.from_user||c.user.screen_name;a.avatar_size=b.avatar_size;a.avatar_url=i(c,"https:"===document.location.protocol);a.retweet="undefined"!=typeof c.retweeted_status;a.tweet_time=Date.parse(c.created_at.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"));a.join_text="auto"==b.join_text?c.text.match(/^(@([A-Za-z0-9-_]+)) .*/i)?b.auto_join_text_reply:c.text.match(h)?b.auto_join_text_url:
    c.text.match(/^((\w+ed)|just) .*/im)?b.auto_join_text_ed:c.text.match(/^(\w*ing) .*/i)?b.auto_join_text_ing:b.auto_join_text_default:b.join_text;a.tweet_id=c.id_str;a.twitter_base="http://"+b.twitter_url+"/";a.user_url=a.twitter_base+a.screen_name;a.tweet_url=a.user_url+"/status/"+a.tweet_id;a.reply_url=a.twitter_base+"intent/tweet?in_reply_to="+a.tweet_id;a.retweet_url=a.twitter_base+"intent/retweet?tweet_id="+a.tweet_id;a.favorite_url=a.twitter_base+"intent/favorite?tweet_id="+a.tweet_id;a.retweeted_screen_name=
    a.retweet&&c.retweeted_status.user.screen_name;a.tweet_relative_time=l(a.tweet_time);a.entities=c.entities?(c.entities.urls||[]).concat(c.entities.media||[]):[];a.tweet_raw_text=a.retweet?"RT @"+a.retweeted_screen_name+" "+c.retweeted_status.text:c.text;a.tweet_text=d([k(a.tweet_raw_text,a.entities)]).linkUser().linkHash()[0];a.tweet_text_fancy=d([a.tweet_text]).makeHeart()[0];a.user=e('<a class="tweet_user" href="{user_url}">{screen_name}</a>',a);a.join=b.join_text?e(' <span class="tweet_join">{join_text}</span> ',
    a):" ";a.avatar=a.avatar_size?e('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',a):"";a.time=e('<span class="tweet_box"><cite class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></cite>',a);a.text=e('<blockquote class="tweet_text">{tweet_text_fancy}</blockquote></span>',a);a.reply_action=e('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',
    a);a.retweet_action=e('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',a);a.favorite_action=e('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',a);return a}var b=d.extend({username:null,list:null,favorites:!1,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:!0,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",
    loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(b,a){return a.tweet_time-b.tweet_time},filter:function(){return!0}},j),h=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
    d.extend({tweet:{t:e}});d.fn.extend({linkUser:g(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+b.twitter_url+'/$2">$2</a>'),linkHash:g(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+b.twitter_search_url+"/search?q=&tag=$1&lang=all"+(b.username&&1==b.username.length&&!b.list?"&from="+b.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:g(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});return this.each(function(c,
    a){var f=d('<ul class="tweet_list">'),g='<p class="tweet_intro">'+b.intro_text+"</p>",h='<p class="tweet_outro">'+b.outro_text+"</p>",i=d('<p class="loading">'+b.loading_text+"</p>");b.username&&"string"==typeof b.username&&(b.username=[b.username]);d(a).unbind("tweet:load").bind("tweet:load",function(){b.loading_text&&d(a).empty().append(i);d.getJSON(m(),function(c){d(a).empty().append(f);b.intro_text&&f.before(g);f.empty();c=d.map(c.results||c,n);c=d.grep(c,b.filter).sort(b.comparator).slice(0,
    b.count);f.append(d.map(c,function(a){return"<li>"+e(b.template,a)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");b.outro_text&&f.after(h);d(a).trigger("loaded").trigger(c.length===0?"empty":"full");b.refresh_interval&&window.setTimeout(function(){d(a).trigger("tweet:load")},1E3*b.refresh_interval)})}).trigger("tweet:load")})}});

  /*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
*/
    jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:
b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*
a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(1==
(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?
b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});

/* -------------------------------------------------------------- */


/* Author: Shajed Evan
*/

/*  Google Font Loader */

   WebFontConfig = {
    google: { families: [ 'Oleo+Script::latin' ] } //place your font name within ['...']
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
/* End of Font Loader */
  
jQuery(function($){

        /* Initializing Tweet */
        $(".query").tweet({
            username: "evanshajed", // give your twitter username here
            join_text: "auto",
            avatar_size: 48,
            count: 1,
            loading_text: "loading tweets..."
        });

        /* Initializing Carousel Slide */
        $('.carousel').carousel({
           interval: 3000
          });

        /* Positioning browser when collapsible box is triggered */
        $('#demo').on('show', function () {
            window.location.hash = "demo";
          });
    });

/* Move to Top Link Easing Effect */
$(function() {
    $('a#onCollapse,a#onTop').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});