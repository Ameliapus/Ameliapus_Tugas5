function cbc() {
  let chcolor = prompt ("Please Enter Your Background Color : ");
  document.getElementById("bd").style.backgroundColor = chcolor;
}

function ctxt() {
  let chcolor = prompt ("Please Enter Your Text Color : ")
  document.getElementById("text1").style.color = chcolor;
}

function deleteimg(id) {
  const hapus = document.getElementById(id);
  hapus.remove();
  const count = document.getElementById("basket").children.length - 1;
  document.getElementById("count").innerHTML = count;
}

function imgaddremove(id, src) {
  const image = document.createElement("img");
  image.setAttribute("id", "img");
  image.setAttribute("onclick", "deleteimg(id)");
  image.src = `${src}`;
  document.getElementById("basket").appendChild(image);
  const count = document.getElementById("basket").children.length - 1;
  document.getElementById("count").innerHTML = count;
}
