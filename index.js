window.addEventListener("load", () => {
  const button = document.getElementById("button");
  let int;
  let card = 0;
  let color = {h:50,s:72.73,l:12.94};//hsl(50deg 72.73% 12.94%);

  // fermat algo from--https://craftofcoding.wordpress.com/2018/04/18/building-a-visualization-of-a-sunflower-spiral-ii/
  let angle = Math.PI*(3.0-Math.sqrt(5.0)); //137.5 in radians
  let r, theta;
  function drawCard() {
    if (card > 75) return clearInterval(int);
    color.l += 0.8;
    r = card*5;
    // r = Math.pow(card,1.5);//card*11;
    theta = card * angle;
    // let dia = (0.1*card)+0.25;
    // Convert polar to cartesian
    let x = r * Math.cos(theta) + 500// + dia;
    let y = r * Math.sin(theta) + 375// + dia;
    const text = `<!DOCTYPE html><html> <head> <title>${card+1}</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0 auto;text-align:center;color: #f9faffde;
      text-shadow: #858ebc -2px 2px 8px;width:100vw;height:100vh;background-color:hsl(${color.h}deg ${color.s}% ${color.l}%);}</style><h1></h1></body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,location,status,scrollbars,resizable,width=100,height=100,top=${y},left=${x}`);
    window.URL.revokeObjectURL(blobUrl);
    card++;
  }

  button.onclick = () => {int = setInterval(drawCard, 200);};
});