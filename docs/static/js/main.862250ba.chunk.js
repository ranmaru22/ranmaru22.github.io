(this["webpackJsonpranmaru22.github.io"]=this["webpackJsonpranmaru22.github.io"]||[]).push([[0],{33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),i=(t(38),t(65)),o=t(66),m=t(67),s=function(){return l.a.createElement("section",{id:"home","pt-5":!0},l.a.createElement(i.a,{id:"headerSection",className:"p-5",fluid:!0},l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"text-center"},l.a.createElement("img",{className:"mb-3",src:"images/avataaars.svg",alt:"Alex Sun"}))),l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"text-center"},l.a.createElement("h1",{className:"header"},"Hi, I'm Alex"),l.a.createElement("h2",{className:"subheader"},"Programmer & Web Developer")))))},u=t(69),p=t(70),g=t(26),h=t.n(g),E=["home","projects","about","contact"],d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{id:"mainNav",variant:"dark",bg:"dark",sticky:"top",expand:"lg",collapseOnSelect:!0},l.a.createElement(i.a,{fluid:!0},l.a.createElement(u.a.Brand,{href:"#home"},"Alex Sun"),l.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(h.a,{className:"ml-auto navbar-nav",items:E,currentClassName:"active"},l.a.createElement(p.a.Link,{href:"#home"},"Home"),l.a.createElement(p.a.Link,{href:"#projects"},"Projects"),l.a.createElement(p.a.Link,{href:"#about"},"About Me"),l.a.createElement(p.a.Link,{href:"#contact"},"Contact"))))))},f=t(71),b=t(68),v=function(e){var a=e.project;return l.a.createElement(f.a,{bg:"light"},l.a.createElement(f.a.Img,{className:"project-img",src:a.image,alt:a.alt}),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,a.label),l.a.createElement(f.a.Text,null,a.description)),l.a.createElement(f.a.Footer,null,l.a.createElement("a",{href:a.link},"View on GitHub")))},k=function(e){var a=e.projects;return l.a.createElement("div",{id:"projects",className:"p-lg-5 pt-5"},l.a.createElement(i.a,{className:"mt-5 pt-5 text-justify",fluid:"md"},l.a.createElement("h3",null,"Creative Portfolio"),l.a.createElement(b.a,null,a.map((function(e){return l.a.createElement(v,{project:e})})))))},N=t(12),j=t(18),x=t(32),w=function(){return l.a.createElement("section",{id:"about",className:"pt-5 bg-light"},l.a.createElement(i.a,{className:"mt-5 pt-5 text-justify",fluid:"md"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,l.a.createElement("h3",{className:"h-border"},"About me"),l.a.createElement("p",null,"I am a self-taught programmer and web developer currently living in Germany. I've had a passion for computers since I was little and became interested in programming early on. I took my first steps with simple game programming while in high school."),l.a.createElement("p",null,"After working boring and mind-numbing office jobs for far too long, I decided to make a change and do something I enjoy for a living."),l.a.createElement("p",null,"My favourite webdev technologies are the ",l.a.createElement("strong",null,"MERN")," stack with ",l.a.createElement("strong",null,"TypeScript")," and ",l.a.createElement("strong",null,"SCSS"),". My favourite programming language in general is ",l.a.createElement("strong",null,"Rust"),"."),l.a.createElement("p",null,"I speak English, German, Japanese, and a little bit of Mandarin Chinese."),l.a.createElement("h5",{className:"text-center mt-5"},"You can find me also on..."),l.a.createElement("p",{className:"text-center"},l.a.createElement("a",{href:"mailto:alexsun82@icloud.com"},l.a.createElement(N.a,{className:"icon mr-3",icon:x.a,size:"lg"})),l.a.createElement("a",{href:"https://github.com/ranmaru22"},l.a.createElement(N.a,{className:"icon mx-3",icon:j.a,size:"lg"})),l.a.createElement("a",{href:"https://stackoverflow.com/users/12570014/ranmaru"},l.a.createElement(N.a,{className:"icon mx-3",icon:j.c,size:"lg"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/alexsun82/"},l.a.createElement(N.a,{className:"icon mx-3",icon:j.b,size:"lg"})))))))},y=function(){return l.a.createElement("section",{id:"footer"},l.a.createElement(i.a,{id:"footerSection",className:"py-2",fluid:!0},l.a.createElement(o.a,null,l.a.createElement(m.a,{className:"pt-3 d-flex justify-content-between align-items-center"},l.a.createElement("p",null,"\xa9 2020 ",l.a.createElement("a",{href:"https://github.com/ranmaru22"},"ranmaru22")),l.a.createElement("p",null,"Source code available on"," ",l.a.createElement("a",{href:"https://github.com/ranmaru22/ranmaru22.github.io"},"GitHub"),".")))))},S=[{image:"images/divibot.png",alt:"DiviBot",label:"DiviBot",description:"A simple Discord bot written in Rust that helps with dice rolling for pen & paper RPGs.",link:"https://github.com/ranmaru22/divibot"},{image:"images/fso.svg",alt:"Full Stack Open",label:"Full Stack Open",description:"Solutions for the exercises of the University of Helsinki's Full Stack Open certificate.",link:"https://github.com/ranmaru22/fullstackopen"},{image:"images/odinbook.png",alt:"Odinbook",label:"Odinbook",description:"A Facebook clone written in pure TypeScript as capstone for The Odin Project.",link:"https://github.com/ranmaru22/odinbook"},{image:"images/odin.svg",alt:"The Odin Project",label:"The Odin Project",description:"Solutions for the exercises of The Odin Project's full-stack node.js curriculum.",link:"https://github.com/ranmaru22/the_odin_project"}],I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(s,null),l.a.createElement(k,{projects:S}),l.a.createElement(w,null),l.a.createElement(y,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.862250ba.chunk.js.map