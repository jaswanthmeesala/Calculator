let exp="";

document.addEventListener("keypress",(event) => {
    if(event.key==="Enter")
    {
        document.getElementById("out").innerHTML=eval(exp);
    }
});


function fun(m)
{
    if(m=='ac')
    {
        exp="";
    }
    else if(m=='+' || m=='-' || m=='*' || m=='/')
    {
        let k=exp.charAt(exp.length-1);
        if(k=='+' || k=='-' || k=='*' || k=='/')
        {
        }
        else{
            exp=exp+m;
        }
    }
    else{
        exp=exp+m;
    }
    document.getElementById("out").innerHTML=exp;
}
function del()
{
    exp=exp.slice(0,-1);
    document.getElementById("out").innerHTML=exp;
}
function res()
{
    document.getElementById("out").innerHTML=eval(exp);
}

