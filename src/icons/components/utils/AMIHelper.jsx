exports.AMIs = [
  ["1", "ami-1", "Windows", "Test Corp"],
  ["2", "ami-2", "Windows", "Test Corp"],
  ["3", "ami-3", "Ubuntu 16", "Test Corp"],
  ["4", "ami-4", "Amazon Linux", "Test Corp"]
];

// ID Must be the first column due to the implementation
exports.AMIColumns = [
  {
    name: "ID",
    options: {
      filter: true,
      sort: true,
      display: "excluded"
    }
  },
  {
    name: "AMI",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "OS",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Feature(s)",
    options: {
      filter: true,
      sort: false
    }
  }
];
