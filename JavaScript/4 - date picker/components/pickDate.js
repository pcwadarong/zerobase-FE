const pickDate = (selectedDate, $input, $calendar) => {    
    const formattedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
    $input.value = formattedDate;
    $calendar.classList.add('hidden');
};

export default pickDate;