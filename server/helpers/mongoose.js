module.exports = {
  normalizeErrors: function(errors) {
    let normalizeErrors = [];
    for (let prop in errors) {
      if (errors.hasOwnProperty(prop)) {
        normalizeErrors.push({ title: prop, detail: errors[prop].message });
      }
    }
    return normalizeErrors;
  }
};
