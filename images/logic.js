function res()
{
    const score1=parseInt(document.getElementById("score1").value);
    const score2=parseInt(document.getElementById("score2").value);
    const over1=parseFloat(document.getElementById("over1").value);
    const over2=parseFloat(document.getElementById("over2").value);

    const A= Number(score1)/(over1);
    const B= Number(score2)/(over2);
    const C=(A-B);
    const D=(B-A);
    const E="TEAM-A IS WINNER";
    const F="TEAM-B IS WINNER";
    const G="super over to Decide";
    const H="Match tied";


    if(A>B)
    {
        document.getElementById("run1").value=C;
        document.getElementById("run2").value=D;
        document.getElementById("win").value=E;
    }
    else if(B>A)
    {
        document.getElementById("run1").value=C;
        document.getElementById("run2").value=D;
        document.getElementById("win").value=F;
     
    }
    else
    {
        document.getElementById("run1").value=H;
        document.getElementById("run2").value=H;
        document.getElementById("win").value=G;
    }
}