// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(s=> s.toUpperCase() === string.toUpperCase())
}
