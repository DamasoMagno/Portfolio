export function verifyDateIsCurrent(date: string = ""){
  let dateExists = date;
  let dateForamted = new Date(date);
  
  return !dateExists ? "Atual" : dateForamted.getFullYear();
}