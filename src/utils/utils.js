export const dateConverter = (date) =>{
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    if(month.toString().length === 1)
      month = '0' + month;
    let day = newDate.getDate();
    if(day.toString().length === 1)
      day = '0' + day;
    newDate = day + '/' +  month + '/' + year;
    return newDate;
}

export const chunkArray = (arr, chunkSize) => {
  let result = []
  let length = arr.length

  for (let i = 0; i < length; i = i + chunkSize) {
      result.push(arr.slice(i, i + chunkSize))
  }

  return result
}