module.exports = {
  formatOptions: (data) => {
    var options = data.map(function (obj) {
      return {
        label: obj.name,
        value: obj.url.substr(obj.url.lastIndexOf('/') + 1),
      }
    })
    return options;
  },
}