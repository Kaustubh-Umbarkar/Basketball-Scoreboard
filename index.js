let hscore=document.getElementById("home")
let gscore=document.getElementById("guest")
let score1=0
let score2=0
function click1()
{
    score1+=1
    hscore.textContent=score1
}
function click2()
{
    score1+=2
    hscore.textContent=score1
}
function click3()
{
    score1+=3
    hscore.textContent=score1
}
function click1g()
{
    score2+=1
    gscore.textContent=score2
}
function click2g()
{
    score2+=2
    gscore.textContent=score2
}
function click3g()
{
    score2+=3
    gscore.textContent=score2
}