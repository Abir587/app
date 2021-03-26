const rd=document.querySelector('.fazt');
const read=document.querySelector('.faza');
const nabil=document.querySelector('.nabil');
rd.addEventListener('click',()=>{
	read.classList.toggle('faz');
 rd.classList.add('faztt');
})
nabil.addEventListener('click',()=>{
	read.classList.toggle('faz');
 nabil.classList.add('nabil1');
 rd.classList.remove('faztt');})
const abir=document.querySelector('.logo');
let y=false;
abir.onclick=()=>{
y=!y;
console.log(y);
y?document.querySelector(' ul').classList.remove('isvisible'):document.querySelector(' nav ul').classList.add('isvisible');
}

const bur=document.querySelector('.logo');
const b=document.querySelector('.abir');
const l=document.querySelector('.z');
bur.addEventListener('click',()=>{
	bur.classList.toggle('active');
	l.classList.toggle('aa');
	
})
const mimi=document.querySelector('.about');
const text=document.querySelector('.abir');
const z=document.querySelector('.z');
const j=document.querySelector('.logo');
mimi.addEventListener('click',()=>{
text.classList.toggle('aa');
z.classList.toggle('.at')
})
const mimi1=document.querySelector('.logo');
const mimi2=document.querySelector('.abir');
mimi1.addEventListener('click',()=>{
	mimi2.classList.remove('aa');
})
const mimi3=document.querySelector('.logo');
const mimi4=document.querySelector('.z');
mimi3.addEventListener('click',()=>{
	mimi4.classList.toggle('at');
})
let i=1;
atr=document.querySelector('.f');
g=document.querySelector('.j');
g.classList.add('ft');
const zya=document.querySelector('.zy');
const zyta=document.querySelector('.zyt');
const zyya=document.querySelector('.zyy');
const zyia=document.querySelector('.zyi');
const zyoa=document.querySelector('.zyo');
zya.classList.remove('zya');
zyta.classList.add('zyta');
zyya.classList.add('zyya');
zyia.classList.add('zyia');
zyoa.classList.add('zyoa');
const re=document.querySelector('.l');
const rt=document.querySelector('.pe');
const rez=document.querySelector('.a3');
const ty=document.querySelector('.mimou');
const tw=document.querySelector('.mimo');
const ret=document.querySelector('.io');
rez.classList.add('ou');
atr.onclick=()=>{  g.classList.remove('ft'); do i++;  while (i>6) console.log(i);



if(i==2)
{  zya.classList.add('zya');
zyta.classList.remove('zyta');
zyya.classList.add('zyya');
zyia.classList.add('zyia');
zyoa.classList.add('zyoa');
	re.classList.add('bb');
	rt.classList.add('nn');
	rez.classList.remove('ou');

}
if(i==3)
{ zya.classList.add('zya');
zyta.classList.add('zyta');
zyya.classList.remove('zyya');
zyia.classList.add('zyia');
zyoa.classList.add('zyoa');
 re.classList.remove('bb');
	re.classList.add('v');
	rt.classList.add('nn');
	rez.classList.add('ou');
	ty.classList.add('p');

}
if(i==4)
{ zya.classList.add('zya');
zyta.classList.add('zyta');
zyia.classList.remove('zyia');
zyoa.classList.add('zyoa');
zyya.classList.add('zyya');
	
	atr.classList.remove('tf');
	re.classList.remove('v');
	re.classList.add('zr');
ty.classList.remove('p');
rt.classList.add('nn');
	rez.classList.add('ou');
tw.classList.add('lolo');

}
if(i==5)
{
	zya.classList.add('zya');
	zyta.classList.add('zyta');
	zyya.classList.add('zyya');
	zyia.classList.add('zyia');
	zyoa.classList.remove('zyoa');
	atr.classList.add('tf');
	re.classList.remove('zr');
	re.classList.add('zrb');
	ty.classList.remove('p');
rt.classList.add('nn');
rez.classList.add('ou');
tw.classList.remove('lolo');
ret.classList.add('you');}
}
const az=document.querySelector('.j');
az.classList.add('ft');

az.onclick=()=>{  az.classList.remove('ft');	
i--; console.log(i);
const ret=document.querySelector('.l');
const rtt=document.querySelector('.pe');
const rezt=document.querySelector('.a3');
const tyt=document.querySelector('.mimou');
const twt=document.querySelector('.mimo');
const rett=document.querySelector('.io');
 const di=document.querySelector('.f');
if (i==1)
{zya.classList.remove('zya');
zyta.classList.add('zyta');
zyya.classList.add('zyya');
zyia.classList.add('zyia');
zyoa.classList.add('zyoa');
	az.classList.add('ft'); 
	ret.classList.remove('bb');
	rtt.classList.remove('nn');
	rezt.classList.add('ou');

	ret.classList.remove('v');
	
	tyt.classList.remove('p');}
if (i==2)
{ zya.classList.add('zya');
zyta.classList.remove('zyta');
zyya.classList.add('zyya');
zyia.classList.add('zyia');
zyoa.classList.add('zyoa');
	ret.classList.add('bb');
	rtt.classList.add('nn');
	rezt.classList.remove('ou');

	ret.classList.remove('v');
	
	tyt.classList.remove('p');}
if(i==3)
{
	zya.classList.add('zya');
	zyta.classList.add('zyta');
	zyya.classList.remove('zyya');
	zyia.classList.add('zyia');
	zyoa.classList.add('zyoa');
ret.classList.add('v');
	ret.classList.remove('zr');
tyt.classList.add('p');
rtt.classList.add('nn');
	rezt.classList.add('ou');
twt.classList.remove('lolo');
}
if(i==4)
{zya.classList.add('zya');
zyta.classList.add('zyta');
zyia.classList.remove('zyia');
zyoa.classList.add('zyoa');
zyya.classList.add('zyya');
	di.classList.remove('tf');
	ret.classList.add('zr');
	ret.classList.remove('zrb');
	tyt.classList.add('p');
rtt.classList.remove('nn');
rezt.classList.add('ou');
twt.classList.add('lolo');
rett.classList.remove('you'); 
ret.classList.remove('bb');
	ret.classList.remove('v');
	rtt.classList.add('nn');
	rezt.classList.add('ou');
	tyt.classList.remove('p');	

}
if(i==5)
{ zya.classList.add('zya');
zyta.classList.add('zyta');
zyya.classList.add('zyya');
zyia.classList.add('zyia');
zyoa.classList.remove('zyoa');
di.classList.add('tf');}
}

const date=new Date();
function calendar(){ const days=new 
    Date(date.getFullYear()
,date.getMonth()+1,0).getDate();
console.log(days);

const jours=new Date(date.getFullYear()
,date.getMonth()+1,0).getDay();
console.log(jours);
const prevday1=new Date(date.getFullYear()
,date.getMonth(),0).getDay();
console.log(prevday1);
const prevday2=new Date(date.getFullYear()
,date.getMonth(),0).getDate();
console.log(prevday2);
const prevday=new Date(date.getFullYear()
,date.getMonth(),1).getDate();
console.log(prevday);
const today=date.getDate();
console.log(today);
const nextday=7-jours+1;
console.log(nextday);
const da=document.querySelector('.date');
const da1=document.querySelector('.Days');
const day2=[" Mon","Tues ","Wed "," Thur","Fri ","Sa","Sun"];
if(nextday-1>=5)
{
    m=42;
    }
else
{
    m=35;
   
    
}

const prevday9=m-nextday-days;
console.log(prevday9);
const day=document.querySelector('.day');
const next=document.querySelector('.next');
const pre=document.querySelector('.prev');
const jo=document.querySelector('.weekend')
day1="";
day3="";
const months=["Jannuary"," February",
" March"," April","May","Jun",
"Jully","August",
"September",   
"October","November", "December"];

document.querySelector('.date h3').
  innerHTML=months[date.getMonth()];
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa'+date.getMonth());
  document.querySelector('.date p')
  .innerHTML=date.toDateString();

for(o=0;o<3;o++)
{
    day1='<span class="weekend1">'+day1+day2[o]+'&ensp; ';
    console.log(day3);
    

}
for(o=3;o<7;o++)
{
    day1=day1+day2[o]+' &ensp;'+'&ensp;   ';
    console.log(day3);


}

day1=day1+'<pre></pre>';
let l=0;
for(jq=prevday9;jq>=0;jq--)
{ console.log(jq); 
    a=prevday2-jq;
    day1+='<span class="prev1">'+a+'&emsp;'+'&emsp;';
    console.log('a='+a);
    /*pre.innerHTML=day1*/
  
}
;
y=date.getDate();
if (1==y)
        {
            day1+='<span class="today">'+'0'+1+'&emsp;';
        }
        else
    {day1+='<span class="today1">'+'0'+1+'&emsp;'; }

for (aq=2; aq<=days; aq++)

{   if(aq<=9)  
    {if (aq==y)
        {
            day1+='<span class="today">'+'&emsp;'+'0'+aq+'&emsp;';
        }
        else
    {day1+='<span class="today1">'+'&emsp;'+'0'+aq+'&emsp;'; }
   /*day.innerHTML=day1;*/}
  else
  {{if (aq==y)
    {
        day1+='<span class="today">'+'&emsp;'+aq+'&emsp;';
    }
    else{
    day1+='<span class="today1">'+'&emsp;'+aq+'&emsp;';
    /* day.innerHTML=day1;*/l++;}}
  }
  if(l==7)
  {}
}

for(k=1;k<nextday;k++)
{
day1+='<span class="next1">'+'&emsp;'+'0'+k+'&emsp;';
next.innerHTML=day1;
}

}
y="vvvvv";
console.log('yoyo'+y.length);

const button=document.querySelector('.rachid');
const button1=document.querySelector('.douja');
let q=0;
button.addEventListener('click',()=>{q++;
    date.setMonth(date.getMonth()+1);
calendar();
});
button1.addEventListener('click',()=>{q++;
    date.setMonth(date.getMonth()-1);
calendar();
});

calendar();
