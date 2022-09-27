 const calculating_app=document.getElementsByClassName('calculator-app');
 const display=document.getElementsByClassName('dis');
 const amt=document.getElementsByClassName('amt-display');
 const calc=document.getElementsByClassName('calculation');
 const tot=document.getElementsByClassName('total');
 const Tips=document.getElementsByClassName('Tip');
 const peop=document.getElementsByClassName('people');
 const sum=document.getElementsByClassName('sumation');
 const tipamt=document.getElementsByClassName('tip-amount');
 const totamt=document.getElementsByClassName('total-amount');


 let tipPercent=0;


 for(let btn 0f Tips) {
    btn.addEventListener('click',function() {
        tipPercent=Number.parseInt(btn.textcontent);
    });

    }
 
 