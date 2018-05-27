export function loop(times, cb) {
  for (let i = 0; i < times; i++) {
    cb(i);
  }
}
