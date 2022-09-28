 const calculating_app=document.getElementsByClassName('calculator-app')[0];
 const display=document.getElementsByClassName('dis')[0];
 const amt=document.getElementsByClassName('amt-display')[0];
 const calc=document.getElementsByClassName('calculation')[0];
 const tot=document.getElementsByClassName('total')[0];
 const tips=document.getElementsByClassName('Tip')[0];
 const peop=document.getElementsByClassName('people')[0];
 const sum=document.getElementsByClassName('sumation')[0];
 const tipamt=document.getElementsByClassName('tip-amount')[0];
 const totamt=document.getElementsByClassName('total-amount')[0];
 const resetbtn=document.getElementsByClassName('reset')[0];
 const custombutton=document.getElementsByClassName('custbtn')[0];



 let tipPercent=0;

    btn.addEventListener('click',function() {
        tipPercent=Number.parseInt(btn.textcontent);
    });
    
    peop.addEventListener('input',function(){
        if(peop.value === 0){
            // errorMsg.style.visibility='visible';
            tipamt.textcontent='$0.00';
            totamt.textcontent='$0.00';

            resetbtn.setAttribute('disabled',true);   
        }
        else
        {
            // errorMsg.style.visibility='hidden';
            if(custombutton.value!==''){
                tipPercent=custombutton.value;
            }
        }
    })

 
 