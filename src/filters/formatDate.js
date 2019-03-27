export default {
  FormatDate(value) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'June',
      'July',
      'August',
      'Septemtember',
      'October',
      'November',
      'December'
    ];
    return `${value.getDate()}'s of ${months[value.getMonth()]}, ${value.getFullYear()} year`
  }
}