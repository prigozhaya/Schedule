export function hideGroupsBlock() {
  const groupsBlock = document.getElementById('groupsWrapper');
  groupsBlock?.style.setProperty("display", "none")
}
export function displayGroupsBlock() {
  const groupsBlock = document.getElementById('groupsWrapper');
  groupsBlock?.style.setProperty("display", "flex")
}