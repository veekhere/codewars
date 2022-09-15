fn min_max(lst: &[i32]) -> (i32, i32) {
  let mut a: Vec<i32> = lst.iter().cloned().collect();
  a.sort();
  return (a[0], a[a.len() - 1]);
}
