let exp="";

document.addEventListener("keypress",(event) => {
    if(event.key==="Enter")
    {
        document.getElementById("out").innerHTML=eval(exp);
    }
    else if(event.key==="Delete")
    {
        exp=exp.slice(0,exp.length-1);
        document.getElementById("out").innerHTML=exp;
    }
    else if(event.key>=0 && event.key<=9)
    {
        exp=exp+String(event.key);
        document.getElementById("out").innerHTML=exp;
    }
    else if(event.key==="+" || event.key==="-" || event.key==="*" || event.key==="/")
    {
        if(exp.charAt(exp.length-1)!="+" && exp.charAt(exp.length-1)!="-" && exp.charAt(exp.length-1)!="*" && exp.charAt(exp.length-1)!="/")
        {
            exp=exp+String(event.key);
            document.getElementById("out").innerHTML=exp;
        }
    }
    console.log(event.key);
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

