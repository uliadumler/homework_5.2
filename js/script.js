let date = new Date(),
		currentDay = document.getElementById('date'),
		currentTime = document.getElementById('time'),
		weekDay = document.getElementById('week-day'),
		time,
		day_today,
		day;
		
// Выводим и записываем текущие дату и день
function getCurrentDay() {

time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
day_today = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + "." + date.getFullYear();
currentTime.innerHTML = time;
currentDay.innerHTML = day_today;
}

getCurrentDay();

// Добавляем 0 перед цифрой
function addZero (num) {
	if (num >= 0 && num < 10) {
		return '0' + num;
	} else {
		return num;
	}
}

// Выводим и записываем день недели словом
function getWeekDay (day) {
	day = date.getDay();
	let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

	weekDay.innerHTML = days[day];
}

getWeekDay(day);



let date_1 = document.getElementById('date1'),
		date_2 = document.getElementById('date2'),
		result = document.getElementById('result'),
		btn = document.getElementById('btn'),
		timeDiff,
		date1,
		date2;

// Записываем введенные в input даты 
date_1.addEventListener, date_2.addEventListener('change', () => {
	date1 = date_1.value,
	date2 = date_2.value;
});

// Считаем разницу между датами и записываем ее по клику на кнопку
btn.addEventListener('click', () => {
	timeDiff = Math.floor((Math.abs(new Date(date1).getTime() - new Date(date2).getTime())) / (1000 * 3600 * 24));

	if (timeDiff == 1 || timeDiff % 10 == 1) {
		result.innerHTML = timeDiff + ' день';
	} else if (timeDiff % 10 == 2 || timeDiff % 10 == 3 || timeDiff % 10 == 4) {
		result.innerHTML = timeDiff + ' дня';
	} else {
		result.innerHTML = timeDiff + ' дней';
	}

	if (date_1.value == '' || date_2.value == '') {
		result.innerHTML = ''; 
	}
})
