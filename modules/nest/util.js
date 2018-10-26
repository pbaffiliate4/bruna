 
 
  /*
 * Turns dots in the username into "_dot_" to avoid problems when persisting the username as a property key
 */
toStorableUserName = function(usernamem) {
  return username.replace(/\./g, "_dot_");
};

/*
 * Turns "_dot_" in the username into "." 
 */
fromStorableUserName = function(usernamem) {
  return username.replace(/_dot_/g, ".");
};					
