code edits
-------------------------
+ make header above jumbotron
+ check content
+ add alt attr to imgs
+ resume page
+ make public
+ write new blog post (play by play below)
+ fix post expansion action
+ bootstrap pagination?
+ .gitignore done correctly?
+ modernizr done correctly?
+ favicon


post ideas
------------------------
big O notation
all my friends do is talk about themselves: self-referencing associations

posts
-------------------------
play by play: revamping my blog after researching web design, adding jQuery and bootstrap

https://learn.co/tracks/full-stack-web-development/html-and-css/bootstrap-framework/introduction-to-bootstrap

In this post I'have be chronicled my attempt to revamp my basic static website to now utilize bootstrap. I’ll also be doing some research on the design of a static site. So if you have your own site instead of using a host (wix, wordpress, etc.) and want to take it to the next level, hopefully this post will help.

My main goal is to make my site more modern. Some specific thoughts i have are adding more color without making it look tacky, drop down navigation, and add a featured post with other posts being minimized/summarized; also changing to a more creative layout.

If you’re doing the same remember to make a new branch before making any commits!

<ul>
<li>
so the first thing i found out was that you should include a minified jQuery file and not just link to a CDN (content delivery network) you can only link to one if your running a server, which is unlikely if you just have a static site. *** or will it still work if you’re using a hosting site, like only hinders during development ***

after reading some basic how tos on bootstrap it seemed the consensus was to start from scratch to get the page layout, css, and functionality up and running before you put your own content in. To do this you should start by copying the html file from a free bootstrap template. This can be found right on the bootstrap site. Also download bootstrap *** and jQuery *** and put them into a folder in your root directory. Then adjust all your link and script tags as necessary until your page looks and acts the same as the template. From there I just started googling bootstrap navbar left or going through the bootstrap docs to find collapsable divs. 

once you’ve got the right idea of what you want you’ll get plenty of practice using your developer tools. use the select an element option and check/uncheck different css elements and styles. 

A lot of the ‘web design research' was mostly just finding themes/templates that I liked. I did however find some objective info such as: gradients are out of style, full width sites (so no margins on the sides) are in, and most importantly I found a lot of stuff on why to predominantly feature media, especially pictures. 

well i’m decently pleased with how things turned out. I do wish that x could have gone differently. Again though, i’m pleased as i accomplished many of the goals i set out to. 
/*before picture*/
/*after picture*/

resources
https://designshack.net/articles/layouts/10-rock-solid-website-layout-examples/
https://w3layouts.com/blogging-template/
http://www.codeproject.com/Tips/889031/Bootstrap-for-Beginners
