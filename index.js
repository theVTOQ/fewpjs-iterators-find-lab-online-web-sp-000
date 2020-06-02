function superbowlWin(record) {
  return record.find(entry => entry.result == "W").year;
}
