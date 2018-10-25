 
 
/*
 * Turns dots in the username into "_dot_" to avoid problems when persisting the username as a property key
 */
toStorableUserName = function(username) {
    
    var modified = username.replace(/\./g, "_dot_");
    modified = modified.replace(/\@/g, "_at_");
    return modified;

};

/*
 * Turns "_dot_" in the username into "." 
 */
fromStorableUserName = function(username) {
    
    var modified = username.replace(/_dot_/g, ".");
    modified = modified.replace(/_at_/g, "@");
    return modified;
};		
