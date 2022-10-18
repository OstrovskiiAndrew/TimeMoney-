let money=prompt("Ваш бюджет на месяц?");
let time=prompt("Введите дату в формате YYYY-MM-DD");

let appData ={ 
    budget: money,
    expensen:{},
    timeData:time,
    optionalExpensen:{},
    income:[],
    savings:false
}

let a1=prompt("Введите обязательную статью расходов в этом месяце")
    a2=prompt("Во сколько обойдется? ")
    a3 = prompt("Введите необязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?");

appData.expensen.a1=a2;
appData.optionalExpensen.a3=a4;

alert(appData.budget/30);