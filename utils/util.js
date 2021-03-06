const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const throttle = (fn, dur = 100) => {
  let timer = null;
  return function () {
    if (timer == null) {
      fn.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, dur);
    }
  }
}

export { formatTime, throttle }
