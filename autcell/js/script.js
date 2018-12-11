var tailleX = 200;
var tailleY = 200;
var milieu = tailleY/2
var grilleLigne = new Array(tailleY).fill(0);
grilleLigne[milieu]=1;
var grilleLigneTemp = new Array(tailleY).fill(0);
var paramFonction = new Array(256);
var paramWolfram = new Array(256);
var iteration = 0;

for(var i1=0;i1<2;i1++)
{
  for(var i2=0;i2<2;i2++)
  {
    for(var i3=0;i3<2;i3++)
    {
      for(var i4=0;i4<2;i4++)
      {
        for(var i5=0;i5<2;i5++)
        {
          for(var i6=0;i6<2;i6++)
          {
            for(var i7=0;i7<2;i7++)
            {
              for(var i8=0;i8<2;i8++)
              {
                paramFonction[iteration] = new Array(8);
                paramFonction[iteration][0]=i1;
                paramFonction[iteration][1]=i2;
                paramFonction[iteration][2]=i3;
                paramFonction[iteration][3]=i4;
                paramFonction[iteration][4]=i5;
                paramFonction[iteration][5]=i6;
                paramFonction[iteration][6]=i7;
                paramFonction[iteration][7]=i8;
                paramWolfram[iteration] = new Array(8);
                paramWolfram[iteration][7]=i1;
                paramWolfram[iteration][6]=i2;
                paramWolfram[iteration][5]=i3;
                paramWolfram[iteration][4]=i4;
                paramWolfram[iteration][3]=i5;
                paramWolfram[iteration][2]=i6;
                paramWolfram[iteration][1]=i7;
                paramWolfram[iteration][0]=i8;
                iteration++;
              }
            }
          }
        }
      }
    }
  }
}


window.onload = function start()
{
  for(var i=0;i<tailleX;i++)
  {
    for(var j=0;j<tailleY;j++)
    {
      $("#"+i+"_"+j).css("background-color","#ddd");
    }
  }
  $("#0_"+milieu).css("background-color","#000");
  iteration = 0;
}

function mutationLigne()
{
  grilleLigne.fill(0);
  grilleLigneTemp.fill(0);
  grilleLigne[milieu]=1;
  for(var i=0; i<tailleX;i++)
  {
    for(var j=0; j<tailleY;j++)
    {
      if($("#val_fonction").val()=="")$("#val_fonction").val("0");
      mutationCase(i, j, paramFonction[$("#val_fonction").val()]);
    }
    grilleLigne = grilleLigneTemp.slice();
    grilleLigneTemp.fill(0);
  }
}

function mutationLigneWolfram()
{
  grilleLigne.fill(0);
  grilleLigneTemp.fill(0);
  grilleLigne[milieu]=1;
  for(var i=0; i<tailleX;i++)
  {
    for(var j=0; j<tailleY;j++)
    {
      if($("#val_fonction").val()=="")$("#val_wolfram").val("0");
      mutationCase(i, j, paramWolfram[$("#val_wolfram").val()]);
    }
    grilleLigne = grilleLigneTemp.slice();
    grilleLigneTemp.fill(0);
  }
}



function mutationCase(x, y, parametres)
{
  var caseG = 0;
  var caseD = 0;
  var caseM = grilleLigne[y];
  if(y>0)caseG=grilleLigne[y-1];
  else caseG=grilleLigne[tailleY-1];
  if(y<tailleY-1)caseD=grilleLigne[y+1];
  else caseD=grilleLigne[0];
  var xTemp = x+1;

  //console.log("Case("+y+") = "+caseG+caseM+caseD);

  switch (caseG+""+caseM+caseD) {
    case "000":
      if(parametres[0]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    case "001":
      if(parametres[1]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    case "010":
      if(parametres[2]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    case "011":
      if(parametres[3]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    case "100":
      if(parametres[4]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    case "101":
      if(parametres[5]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    case "110":
      if(parametres[6]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
      break;
    default:
      if(parametres[7]==0)$("#"+xTemp+"_"+y).css("background-color","#ddd");
      else {$("#"+xTemp+"_"+y).css("background-color","#000");grilleLigneTemp[y]=1;}
  }
}
