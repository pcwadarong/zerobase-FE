const pickDate = (selectedDate, $input, $calendar) => {   
    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = selectedDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    $input.value = formattedDate;
    $calendar.classList.add('hidden');
};

export default pickDate;