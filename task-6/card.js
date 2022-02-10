window.addEventListener("DOMContentLoaded", function () {
    alert("Мен оз ишимди 100 балл деп балайм");
    const card = document.createElement("div");
    const img = document.createElement("img");
    const cardTitle = document.createElement("h3");
    const cardDescrp = document.createElement("p");
    const hrLine = document.createElement("hr");
    const userImg = document.createElement("img");
    const userNameSpan = document.createElement("span");
    const userName = document.createElement("h3");
    const body = document.createElement("body");
  const info=document.createElement("div");
    const ethereum=document.createElement("img");
    const view=document.createElement("img");
    const ethereumDescrp=document.createElement("h4")
    const viewDescr=document.createElement("h4");
   const stat=document.createElement("div");
   const days = document.createElement("div");
   const daysImg=document.createElement("img")
  const daysInfo=document.createElement("h4")
  const user=document.createElement("div");
  
  
    document.body.append(card);
  document.body.style.cssText=
    `background-color :hsl(217, 54%, 11%);
    width:1440px;
    margin:0 auto;
    font-family: 'Outfit', sans-serif;
    `;
     card.id = "wrapper";
    card.append(img);
    img.setAttribute(
      "src",
      "/images/image-equilibrium.jpg"
    );
    
    wrapper.style.cssText=`
      width:250px;
      height:450px;
      background-color:hsl(216, 50%, 16%);
      position:fixed;
      top:50%;
      left:50%;
      margin: -200px 0 0 -100px;
      border-radius:10px;
      padding:15px;
      
    `;
    img.style.cssText=
    `width:245px;
    height:220px;
     margin:0 auto;
     font-weight:600;
    `;
    card.append(cardTitle);
    cardTitle.textContent="Equilibruim #3429"
    cardTitle.style.cssText=
    `color:hsl(0, 0%, 100%);
    font-size:18px;
   `;
  
   card.append(cardDescrp);
   cardDescrp.textContent="Our equilibruim collection promotes balance and calm";
   cardDescrp.style.cssText=
   `color:hsl(215, 51%, 70%);
   font-weight:300;
   font-size:15px;
   `
  
  card.append(stat)
  stat.className="stat";
  stat.append(info);
  stat.style.cssText=`
  display:flex;
  justify-content:space-between;`;
  info.className="info"
  info.style.cssText=h
  `
  display:flex;
  align-items:center;
  `
  info.append(ethereum);
  
  ethereum.setAttribute(
    "src",
    "/images/icon-ethereum.svg"
  )
  
  info.append(ethereumDescrp);
  ethereumDescrp.textContent="0.041 ETH"
  ethereumDescrp.style.cssText=
  `padding-left:10px;
  color:hsl(178, 100%, 50%);
  font-size:14px;
  font-weight:400;`
  
  stat.append(days);
  days.style.cssText=`
  display:flex;
  align-items:center;
  `
  days.append(daysImg);
  daysImg.setAttribute(
   "src",
   "/images/icon-clock.svg"
  )
  daysImg.style.cssText=`
  width:20px;
  height:20px;
  `;
  
  days.append(daysInfo);
  daysInfo.textContent="3 days left"
  daysInfo.style.cssText=`
  padding-left:10px;
  color:hsl(215, 51%, 70%);
  font-size:14px;
  font-weight:300;`
  
  card.append(hrLine);
  hrLine.style.cssText=`
  height: .2px;
  background-color: hsl(215, 51%, 70%);
  border: none;`
  
  card.append(user);
  user.append(userImg)
  user.append(userNameSpan);
  user.append(userName);
  
  userImg.setAttribute(
    "src",
    "/images/image-avatar.png"
  )
  user.style.cssText=`
  margin-top:20px;
  display:flex;
  align-items:center;
  `
  userImg.style.cssText=`
  width:30px;
  height:30px;
  `
  
  userNameSpan.textContent="Creation of";
  userNameSpan.style.cssText=`
  color:hsl(215, 51%, 70%);
  font-size:14px;
  font-weight:300;
  padding-left:10px;
  `
  
  userName.textContent="Jyles Wyvern"
  userName.style.cssText=
  `
  color: hsl(0, 0%, 100%);
  font-size:14px;
  padding-left:10px;
  font-weight:300;
  `
  });