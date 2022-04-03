let code=document.getElementById("selector");
let encode_text=document.getElementById("input_text");
let result_text=document.getElementById("result_text");
code.focus();//يعمل تركيز للعنصر
encode_text.addEventListener("input",()=>{	
	result();
	code.blur();//يحذف التركيز	
	});
	code.addEventListener("change",()=>{	
		result();
		});	
function result(){
	if(code.value=="encode"){
		result_text.value=window.btoa(encode_text.value);
	}else{
		result_text.value=window.atob(encode_text.value);
	}
}

// let text="thank you".toUpperCase();
// let index="i love your power love".indexOf("love")//يحدد رقم تمركز الكلمه من البدايه
// index.lastIndexOf("love")//يحدد تمركز الكلمه من الاخر
// index.search("love")//indexOf نفس وظيفة
//document.getElementById("end").innerHTML=text;
let text=document.getElementById("end");
var replacetext="hello$my$name$is$rasha";//سيقوم بإستبدال اول علامة دولار فقط
//طريقتان لاستبدال جميع الدولارات اول طريقه عن طريق الفور لوب
for (let index = 0; index <= replacetext.length; index++) {
   
   text.innerHTML+=replacetext[index].replace("$"," ");
	
}
//الطريقة التانيه
text.innerHTML=replacetext.replace(/\$/g," ")// \$ نضع عمود مائل مع الدولار لانه ليس نص
text.innerHTML=replacetext.replace(/my/g,"your")
text.substring(8)//يحدد مكان التمركز لبداية طباعته
text.substring(8,10)//يحدد مكان التمركز بدايةوالنهاية لطباعته
// if(screen.orientation.type=="landscape-primary"){//تنفذ اوامر معينه عندما تكون الشاشه افقيه

// }
