 window.sr = ScrollReveal({ reset: true });
 sr.reveal('h1',{duration:200});
 sr.reveal('span',{duration:1000});

 var graph = {
  origin:"top",
  distance:"32px",
  duration:600,
  delay:800,
  scale:0,
}
sr.reveal('.hero__text',{duration:2000});
sr.reveal('.aos-scroll',{duration:800});
sr.reveal('#piechart_div',{duration:2000});
sr.reveal('#piechart3_div',{duration:2000});
sr.reveal('#stackchart_div',{duration:2000});
sr.reveal('#sankeychart_div',{duration:2000});
sr.reveal('#columnchart_div',{duration:2000});
sr.reveal('section');